"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const createCardTexture = () => {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;

  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const symbols = ["♠", "♦", "♣"];
  const symbol = symbols[Math.floor(Math.random() * symbols.length)];

  ctx.font = "bold 180px serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  // Neon red glow
  ctx.shadowColor = "rgba(255, 0, 80, 1)";
  ctx.shadowBlur = 20;
  ctx.fillStyle = "#f5190a";
  ctx.fillText(symbol, canvas.width / 2, canvas.height / 2);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
};

export const EmberParticles = ({ containerId }) => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const particlesRef = useRef(null);
  const geometryRef = useRef(null);
  const materialRef = useRef(null);
  const lastScrollYRef = useRef(0);
  const animationFrameRef = useRef(undefined);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    /* 🔽 SMALL DENSITY HERE */
    const particleCount = 180;

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 8;   // tighter spread
      positions[i * 3 + 1] = -5 - Math.random() * 3;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2;

      velocities[i * 3] = (Math.random() - 0.5) * 0.002;
      velocities[i * 3 + 1] = 0.004 + Math.random() * 0.004;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.001;
    }

    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    geometryRef.current = geometry;

    const material = new THREE.PointsMaterial({
      size: 0.45,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      map: createCardTexture(),
      alphaTest: 0.2,
    });
    materialRef.current = material;

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);
    particlesRef.current = particles;

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const handleScroll = () => {
      lastScrollYRef.current = window.scrollY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);

      const scrollDelta = window.scrollY - lastScrollYRef.current;
      const pos = geometry.attributes.position.array;

      for (let i = 0; i < pos.length; i += 3) {
        pos[i] += velocities[i];
        pos[i + 1] += velocities[i + 1] + scrollDelta * 0.00015;
        pos[i + 2] += velocities[i + 2];

        if (pos[i + 1] > 5) {
          pos[i] = (Math.random() - 0.5) * 8;
          pos[i + 1] = -5 - Math.random() * 3;
          pos[i + 2] = (Math.random() - 0.5) * 2;
        }
      }

      geometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameRef.current);

      geometry.dispose();
      material.dispose();
      renderer.dispose();

      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div id={containerId} ref={containerRef} />;
};
