import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture, Environment } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";

function BookModel({ coverUrl }) {
  const coverTexture = useTexture(coverUrl);
  const ref = useRef();

  // Auto rotate
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.3; // tốc độ xoay
    }
  });

  const width = 2; // ngang
  const height = 3; // dọc
  const depth = 0.5; // độ dày

  // Tạo materials cho từng mặt
  const materials = [
    // PX (right) → gáy sách
    new THREE.MeshStandardMaterial({ color: "#ffffff", roughness: 0.9 }),
    // NX (left) → cạnh trái (dán bìa)
    new THREE.MeshStandardMaterial({
      map: coverTexture,
      metalness: 0.5,
      roughness: 0.6,
    }),
    // PY (top) → cạnh trên (giấy trắng)
    new THREE.MeshStandardMaterial({ color: "#ffffff", roughness: 0.9 }),
    // NY (bottom) → cạnh dưới (giấy trắng)
    new THREE.MeshStandardMaterial({ color: "#ffffff", roughness: 0.9 }),
    // PZ (front) → bìa trước
    new THREE.MeshStandardMaterial({
      map: coverTexture,
      metalness: 0.5,
      roughness: 0.6,
    }),
    // NZ (back) → bìa sau vàng kim
    new THREE.MeshStandardMaterial({
      color: "#FFD700",
      metalness: 1,
      roughness: 0.2,
    }),
  ];

  return (
    <group ref={ref} castShadow receiveShadow>
      {/* Toàn bộ sách là một box với 6 materials */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[width, height, depth]} />
        {materials.map((mat, i) => (
          <primitive attach={`material-${i}`} object={mat} key={i} />
        ))}
      </mesh>

      {/* Ruột sách thụt vô */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[width * 0.92, height * 0.92, depth * 0.85]} />
        <meshStandardMaterial color="#fff" roughness={0.95} />
      </mesh>
    </group>
  );
}

export default function Book() {
  return (
    <Canvas
      style={{ width: "100%", height: "500px" }}
      camera={{ position: [3, 2, 5], fov: 40 }}
      shadows
    >
      {/* Lights */}
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[-5, -5, -5]} intensity={1.2} />

      <Environment preset="sunset" />

      {/* Truyền ảnh bìa */}
      <BookModel coverUrl="/3dmodels/duong_cach_menh/texture.jpg" />

      {/* Shadow ground */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.8, 0]}
        receiveShadow
      >
        <planeGeometry args={[20, 20]} />
        <shadowMaterial opacity={0.3} />
      </mesh>

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
