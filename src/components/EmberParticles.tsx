'use client';

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

// Function to create textures for the particles
const createSymbolTexture = (symbol: string) => {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    return new THREE.Texture();
  }
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.font = 'bold 160px "Roboto Mono", monospace';
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  // Neon red glow, matching the site's primary color
  ctx.shadowColor = "rgba(220, 38, 38, 0.7)";
  ctx.shadowBlur = 20;
  ctx.fillStyle = "#dc2626"; // Tailwind's red-600
  ctx.fillText(symbol, canvas.width / 2, canvas.height / 2);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
};

// Main component for the animated background
export const EmberParticles = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 10;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);
    
    const symbols = ["♠", "♦", "♣", "0", "1"];
    const totalParticleCount = 500;
    const particlesPerSymbol = Math.floor(totalParticleCount / symbols.length);
    const particleSystems: { points: THREE.Points; geometry: THREE.BufferGeometry; velocities: Float32Array }[] = [];

    symbols.forEach(symbol => {
        const positions = new Float32Array(particlesPerSymbol * 3);
        const velocities = new Float32Array(particlesPerSymbol * 5);

        for (let i = 0; i < particlesPerSymbol; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

            velocities[i * 3] = (Math.random() - 0.5) * 0.0005;
            velocities[i * 3 + 1] = 0.001 + Math.random() * 0.002;
            velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.0005;
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

        const material = new THREE.PointsMaterial({
            size: 0.35,
            transparent: true,
            opacity: 0.7,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            map: createSymbolTexture(symbol),
        });

        const points = new THREE.Points(geometry, material);
        scene.add(points);
        particleSystems.push({ points, geometry, velocities });
    });


    // Resize handler
    const handleResize = () => {
      if (currentMount) {
        camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
      }
    };
    window.addEventListener("resize", handleResize);

    // Animation loop
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);

      particleSystems.forEach(system => {
        const pos = system.geometry.attributes.position.array as Float32Array;

        for (let i = 0; i < pos.length; i += 3) {
            pos[i] += system.velocities[i];
            pos[i + 1] += system.velocities[i + 1];
            pos[i + 2] += system.velocities[i + 2];

            if (pos[i + 1] > 10) {
                pos[i] = (Math.random() - 0.5) * 20;
                pos[i + 1] = -10;
                pos[i + 2] = (Math.random() - 0.5) * 20;
            }
        }

        system.geometry.attributes.position.needsUpdate = true;
        system.points.rotation.y += 0.0001;
      });
      
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      particleSystems.forEach(system => {
          system.geometry.dispose();
          (system.points.material as THREE.PointsMaterial).map?.dispose();
          (system.points.material as THREE.PointsMaterial).dispose();
      });
      renderer.dispose();
      if (currentMount) {
        currentMount.innerHTML = ''; // Clear the container
      }
    };
  }, []);

  return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};