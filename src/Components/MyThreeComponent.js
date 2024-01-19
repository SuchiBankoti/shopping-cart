import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';


const url='https://images.unsplash.com/photo-1655998233171-ee5b130acba5?q=80&w=1899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

const MyThreeComponent = (props) => {
  const width = props.width
  const height=props.height
  const containerRef = useRef();

    
    useEffect(() => {
        
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width/height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width,height);
    containerRef.current.appendChild(renderer.domElement);

      
      const texture = new THREE.TextureLoader().load(url)
      
    const geometry = new THREE.SphereGeometry(3);
    const material = new THREE.MeshStandardMaterial({map:texture});
    const cube = new THREE.Mesh(geometry, material);
    const ambientLight = new THREE.AmbientLight(0xffffff,0.02)
      const spotLight = new THREE.SpotLight(0xffffff, 100)
      // scene.background = new THREE.Color(0x000000, 0)
      renderer.setClearColor(0x000000, 0)
    scene.add(cube);
    scene.add(camera)
        scene.add(ambientLight)
      spotLight.position.set(-10, 10, 5)
      scene.add(spotLight)
    camera.position.z = 10;
    const clock=new THREE.Clock()
      const animate = () => {
        const elapsedTime=clock.getElapsedTime()
      cube.rotation.y=elapsedTime
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

      animate();
      
      return () => {
        
      }

},[])

  return <div ref={containerRef}  style={{width:width,height:height}}/>;
};

export default MyThreeComponent;
