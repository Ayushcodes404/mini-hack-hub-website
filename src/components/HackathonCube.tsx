
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
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="black" wireframe />
    </mesh>
  );
};

const HackathonCube = () => {
  return (
    <div className="w-full h-64 md:h-80 lg:h-96">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Cube />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default HackathonCube;
