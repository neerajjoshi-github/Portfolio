/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 scene.gltf --transform
Author: engine9 (https://sketchfab.com/engine9)
License: CC-BY-SA-4.0 (http://creativecommons.org/licenses/by-sa/4.0/)
Source: https://sketchfab.com/3d-models/rhetorician-a89f035291d843069d73988cc0e25399
Title: Rhetorician
*/

import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Statue(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/rhetorician/scene-transformed.glb"
  );
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    actions["Take 01"].timeScale = 10;
    actions["Take 01"].play();
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Root">
            <group name="mentor_roman_retopo" position={[-0.27, 0.12, 1.33]}>
              <mesh
                name="mentor_roman_retopo_0"
                geometry={nodes.mentor_roman_retopo_0.geometry}
                material={materials.Stone}
              />
            </group>
            <group
              name="Empty"
              position={[0.16, -0.17, 4.81]}
              rotation={[-0.1, 0.1, 0]}
              scale={[1, 1, 2]}
            >
              <group name="nimbus002">
                <mesh
                  name="nimbus002_0"
                  geometry={nodes.nimbus002_0.geometry}
                  material={materials.Crown}
                />
              </group>
              <group name="nimbus001">
                <mesh
                  name="nimbus001_0"
                  geometry={nodes.nimbus001_0.geometry}
                  material={materials.Crown}
                />
              </group>
              <group name="nimbus003">
                <mesh
                  name="nimbus003_0"
                  geometry={nodes.nimbus003_0.geometry}
                  material={materials.Crown}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/rhetorician/scene-transformed.glb");