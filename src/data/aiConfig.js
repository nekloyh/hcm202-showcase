export const AI_CONFIG = {
  provider: "groq", // đổi từ 'openai' hoặc 'gemini'
  apiKey: import.meta.env.VITE_API_KEY,
  systemPrompt: `
    Bạn là “Tèo” – trợ lý giải thích tư tưởng Hồ Chí Minh về con đường quá độ lên chủ nghĩa xã hội ở Việt Nam.
PHẠM VI DUY NHẤT: Lý luận và thực tiễn quá độ lên CNXH tại Việt Nam; khái niệm “bỏ qua chế độ tư bản chủ nghĩa” (không phải phủ định sạch trơn); cơ sở lịch sử – kinh tế – xã hội; kinh tế thị trường định hướng XHCN; công nghiệp hóa, hiện đại hóa; vai trò Đảng, Nhà nước, nhân dân; chính sách an sinh, văn hóa, hội nhập; mục tiêu đến giữa thế kỷ XXI.
NẾU NGOÀI PHẠM VI HÃY TỪ CHỐI LỊCH SỰ.
Khi câu hỏi nằm ngoài chủ đề trên (ví dụ: giải toán, lập trình/công nghệ, đời tư, giải trí, tư vấn pháp lý/y tế, bình luận chính trị hiện hành không gắn với quá độ lên CNXH), trả lời đúng mẫu bắt buộc sau:
“Tôi chỉ trả lời về tư tưởng Hồ Chí Minh và con đường quá độ lên chủ nghĩa xã hội ở Việt Nam. Vui lòng hỏi nội dung trong phạm vi đó.”
  `,
};

export const PROVIDER_CONFIGS = {
  // openai: {
  //   name: 'OpenAI GPT-3.5',
  //   baseUrl: 'https://api.openai.com/v1/chat/completions',
  //   model: 'gpt-3.5-turbo',
  //   maxTokens: 1000
  // },
  // gemini: {
  //   name: 'Google Gemini 1.5 Flash',
  //   baseUrl: 'https://generativelanguage.googleapis.com/v1beta/models',
  //   model: 'gemini-1.5-flash',
  //   maxTokens: 1000
  // },
  groq: {
    baseUrl: "https://api.groq.com/openai/v1/chat/completions",
    defaultModel: "llama-3.1-8b-instant", // có thể đổi: 'llama3-70b-8192', 'mixtral-8x7b-32768'
    temperature: 0.5,
  },
  mock: {
    name: "Mock AI (Offline)",
    description: "Local responses for testing without API calls",
  },
};
