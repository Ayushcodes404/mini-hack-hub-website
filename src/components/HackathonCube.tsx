
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const Cube = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.5) * 0.3;
      meshRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.4;
    }
  });
  
  return (
    <mesh ref={meshRef} position={[-1.5, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="black" wireframe />
    </mesh>
  );
};

const Coder = () => {
  const coderRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (coderRef.current) {
      coderRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.5 + Math.PI / 4;
    }
  });
  
  return (
    <group ref={coderRef} position={[1.5, -0.5, 0]}>
      {/* Body */}
      <mesh position={[0, 0.7, 0]}>
        <boxGeometry args={[0.8, 1.2, 0.5]} />
        <meshStandardMaterial color="black" />
      </mesh>
      
      {/* Head */}
      <mesh position={[0, 1.7, 0]}>
        <sphereGeometry args={[0.4, 16, 16]} />
        <meshStandardMaterial color="black" />
      </mesh>
      
      {/* Arms */}
      <mesh position={[-0.6, 0.7, 0]} rotation={[0, 0, -Math.PI / 4]}>
        <boxGeometry args={[0.2, 0.8, 0.2]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh position={[0.6, 0.7, 0]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[0.2, 0.8, 0.2]} />
        <meshStandardMaterial color="black" />
      </mesh>
      
      {/* Laptop */}
      <mesh position={[0, 0.3, 0.4]} rotation={[Math.PI / 4, 0, 0]}>
        <boxGeometry args={[0.8, 0.05, 0.6]} />
        <meshStandardMaterial color="gray" />
      </mesh>
      <mesh position={[0, 0.55, 0.1]} rotation={[Math.PI / 2 + Math.PI / 4, 0, 0]}>
        <boxGeometry args={[0.8, 0.05, 0.6]} />
        <meshStandardMaterial color="black" />
      </mesh>
    </group>
  );
};

const HackathonCube = () => {
  return (
    <div className="w-full h-64 md:h-80 lg:h-96">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Cube />
        <Coder />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default HackathonCube;
