import { AI_CONFIG, PROVIDER_CONFIGS } from "../data/aiConfig";

/**
 * Sends a message to the configured AI service and gets a response
 * @param {string} message - The user's message
 * @param {Array} previousMessages - Previous conversation messages
 * @returns {Promise<string>} - The AI's response
 */

export const sendMessageToAI = async (message, previousMessages = []) => {
  try {
    const { provider, apiKey, systemPrompt } = AI_CONFIG;

    // Format previous messages for context
    const formattedMessages = previousMessages
      .filter((msg) => msg.role === "user" || msg.role === "assistant")
      .map((msg) => ({
        role: msg.role,
        content: msg.content,
      }));

    // Add system prompt for context
    const messages = [
      { role: "system", content: systemPrompt },
      ...formattedMessages,
      { role: "user", content: message },
    ];

    // Debug logging
    console.log("Using provider:", provider);
    console.log("Provider config:", PROVIDER_CONFIGS[provider]);
    console.log(
      "API key available:",
      apiKey ? "Yes (length: " + apiKey.length + ")" : "No"
    );

    if (provider === "groq" && apiKey && apiKey.trim() !== "") {
      try {
        return await sendToGroq(messages, apiKey);
      } catch (err) {
        console.warn("Groq API error, fallback mock:", err.message);
        return getMockResponse(message);
      }
    } else {
      // Use mock response if no valid provider or API key
      console.info("Using mock AI responses (no valid API configuration)");
      return getMockResponse(message);
    }
  } catch (error) {
    console.error("Error in sendMessageToAI:", error);
    return "Xin lỗi, đã có lỗi xảy ra khi xử lý yêu cầu của bạn. Vui lòng thử lại sau.";
  }
};

const sendToGroq = async (messages, apiKey) => {
  console.log("Sending request to Groq API...");
  const { defaultModel, temperature } = PROVIDER_CONFIGS.groq;
  const req = {
    model: defaultModel,
    temperature: temperature ?? 0.5,
    messages,
    stream: false,
  };

  const res = await fetch(PROVIDER_CONFIGS.groq.baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(req),
  });

  if (!res.ok) {
    const txt = await res.text().catch(() => "Unknown error");
    console.error(`Groq API error (${res.status}): ${txt}`);
    throw new Error(`Groq API error (${res.status}): ${txt}`);
  }

  const data = await res.json();
  console.log("Groq response:", data);
  return data.choices?.[0]?.message?.content || "Không có nội dung trả về.";
};

