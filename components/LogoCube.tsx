// 'use client';

// import React, { useRef } from 'react';
// import { Canvas, useFrame, useLoader } from '@react-three/fiber';
// import { TextureLoader } from 'three';
// import { OrbitControls } from '@react-three/drei';
// // import Image from 'next/image';
// // import NordicLogo from '../../public/images/Nordic_logo_square.png';
// import * as THREE from 'three';

// const LogoCube: React.FC = () => {
//   return (
//     <div className="h-40 w-40">
//       <Canvas>
//         <OrbitControls enableZoom={false} />
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[2, 2, 2]} intensity={1} />
//         <Cube />
//       </Canvas>
//     </div>
//   );
// };

// const Cube: React.FC = () => {
//   const mesh = useRef<THREE.Mesh>(null);
//   const textureLoader = new THREE.TextureLoader();
//   const texture = textureLoader.load( '/images/Nordic_logo_square.png');

//   useFrame((_, delta) => {
//     if (mesh.current) {
//       mesh.current.rotation.x += delta * 0.5;
//       mesh.current.rotation.y += delta * 0.5;
//       mesh.current.rotation.z += delta * 0.5;
//     }
//   });

//   return (
//     <mesh ref={mesh}>
//       <boxGeometry args={[1, 1, 1]} />
//       {/* Apply the same texture to all 6 faces */}
//       {[...Array(6)].map((_, index) => (
//         <meshStandardMaterial
//           key={index}
//           attach={`material-${index}`} // Attach each side of the cube
//           map={texture}
//         />
//       ))}
//     </mesh>
//   );
// };

// export default LogoCube;
