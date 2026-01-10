import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
  OrbitControls,
  useHelper,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import { useEffect, useRef } from "react";
import { AnimationMixer } from "three";

// Load Model
function Model() {
  const { scene, animations } = useGLTF("/3dmodels/trong_dong/scene.gltf");
  const mixer = new AnimationMixer(scene);
  const modelRef = useRef();

  useEffect(() => {
    if (animations.length > 0) {
      const action = mixer.clipAction(animations[0]); // lấy animation đầu tiên
      action.play();
    }

    // Thiết lập góc nghiêng ban đầu - nghiêng về phía trước bên phải 10 độ
    if (modelRef.current) {
      modelRef.current.rotation.x = Math.PI / 18; // 10 độ về phía trước = π/18 radians
      modelRef.current.rotation.z = -Math.PI / 18; // 10 độ nghiêng sang phải = -π/18 radians
    }
  }, [animations, mixer]);

  // update mỗi frame - animation và tự động xoay
  useFrame((state, delta) => {
    mixer.update(delta);

    // Tự động xoay model
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.5; // xoay với tốc độ 0.5 rad/s
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={0.15}
      position={[0, -1, 0]}
    />
  );
}

export const TrongDong3D = () => {
  return (
    <div id="trongdongcontainer" className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        {/* Ánh sáng môi trường tổng thể */}
        <ambientLight intensity={0.4} />

        {/* Ánh sáng chính từ top-right xuống bottom-left */}
        <directionalLight
          position={[5, 6, 3]}
          target-position={[-3, -5, -2]}
          intensity={1.5}
          castShadow
        />

        {/* Ánh sáng từ bên phải để làm sáng cạnh phải */}
        <directionalLight
          position={[8, 2, 0]}
          target-position={[0, 0, 0]}
          intensity={1.2}
        />

        {/* Ánh sáng phụ để làm sáng các vùng tối */}
        <pointLight position={[-3, 2, 4]} intensity={0.6} />

        <Model />
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={2}
          maxDistance={10}
        />
      </Canvas>
    </div>
  );
};
