import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, PerspectiveCamera, useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Mesh, MeshStandardMaterial, Color, Vector3 } from 'three';

interface ProductViewerProps {
  modelPath: string;
  productId?: string;
}

const ShoeModel = ({ modelPath, productId }: { modelPath: string; productId?: string }) => {
  const [error, setError] = useState<string | null>(null);
  const { scene } = useGLTF(modelPath);
  
  useEffect(() => {
    try {
      console.log('Model loaded:', modelPath);
      scene.traverse((node) => {
        if (node instanceof Mesh) {
          console.log('Mesh found:', node.name);
          if (node.material) {
            if (Array.isArray(node.material)) {
              node.material.forEach((mat) => {
                if (mat instanceof MeshStandardMaterial) {
                  // For the second product (ID: 2), set brown colors
                  if (productId === '2') {
                    mat.color = new Color(0x8B4513); // Saddle Brown
                    mat.roughness = 0.7;
                    mat.metalness = 0.1;
                  }
                  // For the third product (ID: 3), set black color
                  if (productId === '3') {
                    mat.color = new Color(0x000000); // Black
                    mat.roughness = 0.7;
                    mat.metalness = 0.1;
                  }
                  // For the fourth product (ID: 4), set red color
                  if (productId === '4') {
                    mat.color = new Color(0xFF0000); // Red
                    mat.roughness = 0.7;
                    mat.metalness = 0.1;
                  }
                  // For the fifth product (ID: 5), set blue color
                  if (productId === '5') {
                    mat.color = new Color(0x0000FF); // Blue
                    mat.roughness = 0.7;
                    mat.metalness = 0.1;
                  }
                  // For the sixth product (ID: 6), set purple color
                  if (productId === '6') {
                    mat.color = new Color(0x800080); // Purple
                    mat.roughness = 0.7;
                    mat.metalness = 0.1;
                  }
                  mat.needsUpdate = true;
                }
              });
            } else if (node.material instanceof MeshStandardMaterial) {
              // For the second product (ID: 2), set brown colors
              if (productId === '2') {
                node.material.color = new Color(0x8B4513); // Saddle Brown
                node.material.roughness = 0.7;
                node.material.metalness = 0.1;
              }
              // For the third product (ID: 3), set black color
              if (productId === '3') {
                node.material.color = new Color(0x000000); // Black
                node.material.roughness = 0.7;
                node.material.metalness = 0.1;
              }
              // For the fourth product (ID: 4), set red color
              if (productId === '4') {
                node.material.color = new Color(0xFF0000); // Red
                node.material.roughness = 0.7;
                node.material.metalness = 0.1;
              }
              // For the fifth product (ID: 5), set blue color
              if (productId === '5') {
                node.material.color = new Color(0x0000FF); // Blue
                node.material.roughness = 0.7;
                node.material.metalness = 0.1;
              }
              // For the sixth product (ID: 6), set purple color
              if (productId === '6') {
                node.material.color = new Color(0x800080); // Purple
                node.material.roughness = 0.7;
                node.material.metalness = 0.1;
              }
              node.material.needsUpdate = true;
            }
          }
        }
      });
    } catch (err) {
      console.error('Error processing model:', err);
      setError('Failed to process 3D model');
    }

    // Cleanup function
    return () => {
      console.log('Cleaning up model:', modelPath);
      scene.traverse((node) => {
        if (node instanceof Mesh) {
          if (node.geometry) {
            node.geometry.dispose();
          }
          if (node.material) {
            if (Array.isArray(node.material)) {
              node.material.forEach(mat => mat.dispose());
            } else {
              node.material.dispose();
            }
          }
        }
      });
    };
  }, [scene, productId, modelPath]);

  if (error) {
    return (
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#ff0000" />
      </mesh>
    );
  }

  // Adjust scale and position based on product ID
  const scale = productId === '2' ? 1 : 1;
  const position = productId === '2' ? [0, -0.2, 0] : [0, -0.2, 0];

  return (
    <primitive 
      object={scene} 
      scale={scale}
      position={position}
    />
  );
};

const ProductViewer: React.FC<ProductViewerProps> = ({ modelPath, productId }) => {
  // Adjust camera position to be closer to the model
  const cameraPosition = new Vector3(0, 0, 1.5);
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-[500px] bg-dark-300 rounded-lg overflow-hidden relative"
    >
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={cameraPosition} />
        <Suspense fallback={
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#00c3ff" />
          </mesh>
        }>
          <Stage 
            environment="city" 
            intensity={2}
            preset="rembrandt"
            adjustCamera={false}
          >
            <ShoeModel modelPath={modelPath} productId={productId} />
          </Stage>
        </Suspense>
        <OrbitControls 
          autoRotate
          autoRotateSpeed={4}
          enableZoom={true}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI - Math.PI / 4}
          minDistance={0.5}
          maxDistance={Infinity}
        />
      </Canvas>
      
      {/* Controls Overlay */}
      <div className="absolute bottom-4 right-4 glass-effect rounded-lg p-2 text-sm text-gray-300">
        <p>Left Click: Rotate</p>
        <p>Scroll: Zoom</p>
      </div>
    </motion.div>
  );
};

export default ProductViewer;