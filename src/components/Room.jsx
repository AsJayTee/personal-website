/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/room.glb -o src/Components/Room.jsx -k -K -r public 
Author: Bee Badea (https://sketchfab.com/beebadea)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/dae-simple-scene-unlucky-library-7f09861579394ad686cf6150736281d9
Title: DAE Simple Scene - Unlucky Library
*/

import React from "react";
import { useGLTF } from "@react-three/drei";
import { EnhancedOverlayItem } from "./EnhancedOverlayItem";
import { AboutContent, ProjectsContent } from "./PageContents";

export function Room({ html, currentPageAtom, ...props }) {
  const { nodes, materials } = useGLTF("/models/room.glb");
  return (
    <group {...props} dispose={null}>
      {html && (
        <EnhancedOverlayItem
          position={[-2, 7.5, -1.5]} 
          title={"About Me"}
          description={"Learn more about my background and why I built this 3D website"}
          bgColor={"bg-amber-500"}
          bgColorHover={"bg-amber-600"}
          buttonTextColor={"text-white"}
          buttonText={"View Profile"}
          headerBgOpacity={"bg-opacity-20"}
          buttonBgOpacity={"bg-opacity-70"}
          useGlassEffect={true}
          currentPageAtom={currentPageAtom}
          className={"transition delay-300"}
          modalTitle={"Siah Jin Thau"}
          modalContent={<AboutContent />}
          modalBgColor={"bg-blue-50"}
          modalBorderColor={"border-blue-200"}
        />
      )}
      {/* {html && (
        <EnhancedOverlayItem
          position={[2.6, 5.5, 2.2]} 
          title={"You might be thinking:"}
          description={"Why the hell would a Data Science student choose to build a 3D-Model Website?"}
          bgColor={"bg-blue-500"}
          bgColorHover={"bg-blue-600"}
          buttonTextColor={"text-white"}
          buttonText={"Here's Why."}
          headerBgOpacity={"bg-opacity-20"}
          buttonBgOpacity={"bg-opacity-70"}
          useGlassEffect={true}
          currentPageAtom={currentPageAtom}
          className={"transition delay-300"}
          onItemClick={() => console.log("Backpack clicked")}
        />
      )} */}
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="SimpleScene9fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="RootNode">
              <group
                name="SM_FloorBoard"
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              >
                <group name="SM_Book_Cat">
                  <mesh
                    name="SM_Book_Cat_M_Paper_0"
                    geometry={nodes.SM_Book_Cat_M_Paper_0.geometry}
                    material={materials.M_Paper}
                  />
                  <mesh
                    name="SM_Book_Cat_M_Cover_Color_5_0"
                    geometry={nodes.SM_Book_Cat_M_Cover_Color_5_0.geometry}
                    material={materials.M_Cover_Color_5}
                  />
                </group>
                <group name="SM_Books_Carpet">
                  <mesh
                    name="SM_Books_Carpet_M_Cover_Color_5_0"
                    geometry={nodes.SM_Books_Carpet_M_Cover_Color_5_0.geometry}
                    material={materials.M_Cover_Color_5}
                  />
                  <mesh
                    name="SM_Books_Carpet_M_Paper_0"
                    geometry={nodes.SM_Books_Carpet_M_Paper_0.geometry}
                    material={materials.M_Paper}
                  />
                  <mesh
                    name="SM_Books_Carpet_M_Book_Cover_0"
                    geometry={nodes.SM_Books_Carpet_M_Book_Cover_0.geometry}
                    material={materials.M_Book_Cover}
                  />
                  <mesh
                    name="SM_Books_Carpet_M_Gold_0"
                    geometry={nodes.SM_Books_Carpet_M_Gold_0.geometry}
                    material={materials.M_Gold}
                  />
                  <mesh
                    name="SM_Books_Carpet_M_Pencil_0"
                    geometry={nodes.SM_Books_Carpet_M_Pencil_0.geometry}
                    material={materials.M_Pencil}
                  />
                  <mesh
                    name="SM_Books_Carpet_M_Cat_Nose_Ears_0"
                    geometry={nodes.SM_Books_Carpet_M_Cat_Nose_Ears_0.geometry}
                    material={materials.M_Cat_Nose_Ears}
                  />
                </group>
                <group name="SM_Books_Ladder">
                  <mesh
                    name="SM_Books_Ladder_M_Book_Cover_0"
                    geometry={nodes.SM_Books_Ladder_M_Book_Cover_0.geometry}
                    material={materials.M_Book_Cover}
                  />
                  <mesh
                    name="SM_Books_Ladder_M_Cover_Color_4_0"
                    geometry={nodes.SM_Books_Ladder_M_Cover_Color_4_0.geometry}
                    material={materials.M_Cover_Color_4}
                  />
                  <mesh
                    name="SM_Books_Ladder_M_Paper_0"
                    geometry={nodes.SM_Books_Ladder_M_Paper_0.geometry}
                    material={materials.M_Paper}
                  />
                  <mesh
                    name="SM_Books_Ladder_M_Cover_Color_2_0"
                    geometry={nodes.SM_Books_Ladder_M_Cover_Color_2_0.geometry}
                    material={materials.M_Cover_Color_2}
                  />
                  <mesh
                    name="SM_Books_Ladder_M_Cover_Color_1_0"
                    geometry={nodes.SM_Books_Ladder_M_Cover_Color_1_0.geometry}
                    material={materials.M_Cover_Color_1}
                  />
                  <mesh
                    name="SM_Books_Ladder_M_Carpet_Color1_0"
                    geometry={nodes.SM_Books_Ladder_M_Carpet_Color1_0.geometry}
                    material={materials.M_Carpet_Color1}
                  />
                  <mesh
                    name="SM_Books_Ladder_M_Cover_Color_3_0"
                    geometry={nodes.SM_Books_Ladder_M_Cover_Color_3_0.geometry}
                    material={materials.M_Cover_Color_3}
                  />
                  <mesh
                    name="SM_Books_Ladder_M_Carpet_Color2_0"
                    geometry={nodes.SM_Books_Ladder_M_Carpet_Color2_0.geometry}
                    material={materials.M_Carpet_Color2}
                  />
                  <mesh
                    name="SM_Books_Ladder_M_Gold_0"
                    geometry={nodes.SM_Books_Ladder_M_Gold_0.geometry}
                    material={materials.M_Gold}
                  />
                </group>
                <group name="SM_Books_Shelves">
                  <mesh
                    name="SM_Books_Shelves_M_Lamp_Rim_0"
                    geometry={nodes.SM_Books_Shelves_M_Lamp_Rim_0.geometry}
                    material={materials.M_Lamp_Rim}
                  />
                  <mesh
                    name="SM_Books_Shelves_M_Paper_0"
                    geometry={nodes.SM_Books_Shelves_M_Paper_0.geometry}
                    material={materials.M_Paper}
                  />
                  <mesh
                    name="SM_Books_Shelves_M_Gold_0"
                    geometry={nodes.SM_Books_Shelves_M_Gold_0.geometry}
                    material={materials.M_Gold}
                  />
                  <mesh
                    name="SM_Books_Shelves_M_Cover_Color_1_0"
                    geometry={nodes.SM_Books_Shelves_M_Cover_Color_1_0.geometry}
                    material={materials.M_Cover_Color_1}
                  />
                  <mesh
                    name="SM_Books_Shelves_M_Book_Cover_0"
                    geometry={nodes.SM_Books_Shelves_M_Book_Cover_0.geometry}
                    material={materials.M_Book_Cover}
                  />
                  <mesh
                    name="SM_Books_Shelves_M_Carpet_Color2_0"
                    geometry={nodes.SM_Books_Shelves_M_Carpet_Color2_0.geometry}
                    material={materials.M_Carpet_Color2}
                  />
                  <mesh
                    name="SM_Books_Shelves_M_Scroll_Tie_0"
                    geometry={nodes.SM_Books_Shelves_M_Scroll_Tie_0.geometry}
                    material={materials.M_Scroll_Tie}
                  />
                  <mesh
                    name="SM_Books_Shelves_M_Cover_Color_2_0"
                    geometry={nodes.SM_Books_Shelves_M_Cover_Color_2_0.geometry}
                    material={materials.M_Cover_Color_2}
                  />
                  <mesh
                    name="SM_Books_Shelves_M_Cover_Color_5_0"
                    geometry={nodes.SM_Books_Shelves_M_Cover_Color_5_0.geometry}
                    material={materials.M_Cover_Color_5}
                  />
                  <mesh
                    name="SM_Books_Shelves_M_Cover_Color_4_0"
                    geometry={nodes.SM_Books_Shelves_M_Cover_Color_4_0.geometry}
                    material={materials.M_Cover_Color_4}
                  />
                  <mesh
                    name="SM_Books_Shelves_M_Cover_Color_3_0"
                    geometry={nodes.SM_Books_Shelves_M_Cover_Color_3_0.geometry}
                    material={materials.M_Cover_Color_3}
                  />
                  <mesh
                    name="SM_Books_Shelves_M_Carpet_Color1_0"
                    geometry={nodes.SM_Books_Shelves_M_Carpet_Color1_0.geometry}
                    material={materials.M_Carpet_Color1}
                  />
                </group>
                <group name="SM_Books_Table">
                  <mesh
                    name="SM_Books_Table_M_Gold_0"
                    geometry={nodes.SM_Books_Table_M_Gold_0.geometry}
                    material={materials.M_Gold}
                  />
                  <mesh
                    name="SM_Books_Table_M_Carpet_Color2_0"
                    geometry={nodes.SM_Books_Table_M_Carpet_Color2_0.geometry}
                    material={materials.M_Carpet_Color2}
                  />
                  <mesh
                    name="SM_Books_Table_M_Paper_0"
                    geometry={nodes.SM_Books_Table_M_Paper_0.geometry}
                    material={materials.M_Paper}
                  />
                  <mesh
                    name="SM_Books_Table_M_Cover_Color_3_0"
                    geometry={nodes.SM_Books_Table_M_Cover_Color_3_0.geometry}
                    material={materials.M_Cover_Color_3}
                  />
                </group>
                <group name="SM_Books_Table_Beneath">
                  <mesh
                    name="SM_Books_Table_Beneath_M_Paper_0"
                    geometry={nodes.SM_Books_Table_Beneath_M_Paper_0.geometry}
                    material={materials.M_Paper}
                  />
                  <mesh
                    name="SM_Books_Table_Beneath_M_Cover_Color_3_0"
                    geometry={
                      nodes.SM_Books_Table_Beneath_M_Cover_Color_3_0.geometry
                    }
                    material={materials.M_Cover_Color_3}
                  />
                  <mesh
                    name="SM_Books_Table_Beneath_M_Cover_Color_5_0"
                    geometry={
                      nodes.SM_Books_Table_Beneath_M_Cover_Color_5_0.geometry
                    }
                    material={materials.M_Cover_Color_5}
                  />
                  <mesh
                    name="SM_Books_Table_Beneath_M_Cover_Color_1_0"
                    geometry={
                      nodes.SM_Books_Table_Beneath_M_Cover_Color_1_0.geometry
                    }
                    material={materials.M_Cover_Color_1}
                  />
                  <mesh
                    name="SM_Books_Table_Beneath_M_Cover_Color_2_0"
                    geometry={
                      nodes.SM_Books_Table_Beneath_M_Cover_Color_2_0.geometry
                    }
                    material={materials.M_Cover_Color_2}
                  />
                  <mesh
                    name="SM_Books_Table_Beneath_M_Gold_0"
                    geometry={nodes.SM_Books_Table_Beneath_M_Gold_0.geometry}
                    material={materials.M_Gold}
                  />
                  <mesh
                    name="SM_Books_Table_Beneath_M_Scroll_Tie_0"
                    geometry={
                      nodes.SM_Books_Table_Beneath_M_Scroll_Tie_0.geometry
                    }
                    material={materials.M_Scroll_Tie}
                  />
                  <mesh
                    name="SM_Books_Table_Beneath_M_Lamp_Rim_0"
                    geometry={
                      nodes.SM_Books_Table_Beneath_M_Lamp_Rim_0.geometry
                    }
                    material={materials.M_Lamp_Rim}
                  />
                  <mesh
                    name="SM_Books_Table_Beneath_M_Unfinished_0"
                    geometry={
                      nodes.SM_Books_Table_Beneath_M_Unfinished_0.geometry
                    }
                    material={materials.M_Unfinished}
                  />
                  <mesh
                    name="SM_Books_Table_Beneath_M_Book_Cover_0"
                    geometry={
                      nodes.SM_Books_Table_Beneath_M_Book_Cover_0.geometry
                    }
                    material={materials.M_Book_Cover}
                  />
                  <mesh
                    name="SM_Books_Table_Beneath_M_Painting_3_0"
                    geometry={
                      nodes.SM_Books_Table_Beneath_M_Painting_3_0.geometry
                    }
                    material={materials.M_Painting_3}
                  />
                  <mesh
                    name="SM_Books_Table_Beneath_M_Cover_Color_4_0"
                    geometry={
                      nodes.SM_Books_Table_Beneath_M_Cover_Color_4_0.geometry
                    }
                    material={materials.M_Cover_Color_4}
                  />
                  <mesh
                    name="SM_Books_Table_Beneath_M_Carpet_Color1_0"
                    geometry={
                      nodes.SM_Books_Table_Beneath_M_Carpet_Color1_0.geometry
                    }
                    material={materials.M_Carpet_Color1}
                  />
                </group>
                <group name="SM_Bottles_Shelf">
                  <mesh
                    name="SM_Bottles_Shelf_M_Bottles_3_0"
                    geometry={nodes.SM_Bottles_Shelf_M_Bottles_3_0.geometry}
                    material={materials.M_Bottles_3}
                  />
                  <mesh
                    name="SM_Bottles_Shelf_M_Wood3_0"
                    geometry={nodes.SM_Bottles_Shelf_M_Wood3_0.geometry}
                    material={materials.M_Wood3}
                  />
                  <mesh
                    name="SM_Bottles_Shelf_M_Bottle_2_0"
                    geometry={nodes.SM_Bottles_Shelf_M_Bottle_2_0.geometry}
                    material={materials.M_Bottle_2}
                  />
                  <mesh
                    name="SM_Bottles_Shelf_M_Bottle_1_0"
                    geometry={nodes.SM_Bottles_Shelf_M_Bottle_1_0.geometry}
                    material={materials.M_Bottle_1}
                  />
                </group>
                <group name="SM_Bottles_Table">
                  <mesh
                    name="SM_Bottles_Table_M_Bottle_1_0"
                    geometry={nodes.SM_Bottles_Table_M_Bottle_1_0.geometry}
                    material={materials.M_Bottle_1}
                  />
                  <mesh
                    name="SM_Bottles_Table_M_Wood_4_0"
                    geometry={nodes.SM_Bottles_Table_M_Wood_4_0.geometry}
                    material={materials.M_Wood_4}
                  />
                  <mesh
                    name="SM_Bottles_Table_M_Bottle_2_0"
                    geometry={nodes.SM_Bottles_Table_M_Bottle_2_0.geometry}
                    material={materials.M_Bottle_2}
                  />
                  <mesh
                    name="SM_Bottles_Table_M_Wood3_0"
                    geometry={nodes.SM_Bottles_Table_M_Wood3_0.geometry}
                    material={materials.M_Wood3}
                  />
                  <mesh
                    name="SM_Bottles_Table_M_Paper_0"
                    geometry={nodes.SM_Bottles_Table_M_Paper_0.geometry}
                    material={materials.M_Paper}
                  />
                  <mesh
                    name="SM_Bottles_Table_M_Cover_Color_1_0"
                    geometry={nodes.SM_Bottles_Table_M_Cover_Color_1_0.geometry}
                    material={materials.M_Cover_Color_1}
                  />
                </group>
                <group name="SM_Carpet">
                  <mesh
                    name="SM_Carpet_M_Carpet_Color1_0"
                    geometry={nodes.SM_Carpet_M_Carpet_Color1_0.geometry}
                    material={materials.M_Carpet_Color1}
                  />
                  <mesh
                    name="SM_Carpet_M_Carpet_Color2_0"
                    geometry={nodes.SM_Carpet_M_Carpet_Color2_0.geometry}
                    material={materials.M_Carpet_Color2}
                  />
                </group>
                <group name="SM_Cat">
                  <mesh
                    name="SM_Cat_M_Cat_Eyes_0"
                    geometry={nodes.SM_Cat_M_Cat_Eyes_0.geometry}
                    material={materials.M_Cat_Eyes}
                  />
                  <mesh
                    name="SM_Cat_M_Cat_0"
                    geometry={nodes.SM_Cat_M_Cat_0.geometry}
                    material={materials.M_Cat}
                  />
                  <mesh
                    name="SM_Cat_M_Cat_Nose_Ears_0"
                    geometry={nodes.SM_Cat_M_Cat_Nose_Ears_0.geometry}
                    material={materials.M_Cat_Nose_Ears}
                  />
                </group>
                <group name="SM_Chair">
                  <mesh
                    name="SM_Chair_M_Wood_1_0"
                    geometry={nodes.SM_Chair_M_Wood_1_0.geometry}
                    material={materials.M_Wood_1}
                  />
                  <mesh
                    name="SM_Chair_M_Wood_2_0"
                    geometry={nodes.SM_Chair_M_Wood_2_0.geometry}
                    material={materials.M_Wood_2}
                  />
                </group>
                <group name="SM_Drawer">
                  <mesh
                    name="SM_Drawer_M_Lamp_Yellow_2_0"
                    geometry={nodes.SM_Drawer_M_Lamp_Yellow_2_0.geometry}
                    material={materials.M_Lamp_Yellow_2}
                  />
                  <mesh
                    name="SM_Drawer_M_Carpet_Color2_0"
                    geometry={nodes.SM_Drawer_M_Carpet_Color2_0.geometry}
                    material={materials.M_Carpet_Color2}
                  />
                  <mesh
                    name="SM_Drawer_M_Wood_5_0"
                    geometry={nodes.SM_Drawer_M_Wood_5_0.geometry}
                    material={materials.M_Wood_5}
                  />
                  <mesh
                    name="SM_Drawer_M_Wood_1_0"
                    geometry={nodes.SM_Drawer_M_Wood_1_0.geometry}
                    material={materials.M_Wood_1}
                  />
                  <mesh
                    name="SM_Drawer_M_Wood_4_0"
                    geometry={nodes.SM_Drawer_M_Wood_4_0.geometry}
                    material={materials.M_Wood_4}
                  />
                </group>
                <group name="SM_Glasses">
                  <mesh
                    name="SM_Glasses_M_Glasses_0"
                    geometry={nodes.SM_Glasses_M_Glasses_0.geometry}
                    material={materials.M_Glasses}
                  />
                </group>
                <group name="SM_Ladder">
                  <mesh
                    name="SM_Ladder_M_Wood_2_0"
                    geometry={nodes.SM_Ladder_M_Wood_2_0.geometry}
                    material={materials.M_Wood_2}
                  />
                  <mesh
                    name="SM_Ladder_M_Wood_1_0"
                    geometry={nodes.SM_Ladder_M_Wood_1_0.geometry}
                    material={materials.M_Wood_1}
                  />
                </group>
                <group name="SM_Lamp">
                  <mesh
                    name="SM_Lamp_M_Lamp_Rim_0"
                    geometry={nodes.SM_Lamp_M_Lamp_Rim_0.geometry}
                    material={materials.M_Lamp_Rim}
                  />
                  <mesh
                    name="SM_Lamp_M_Carpet_Color2_0"
                    geometry={nodes.SM_Lamp_M_Carpet_Color2_0.geometry}
                    material={materials.M_Carpet_Color2}
                  />
                  <mesh
                    name="SM_Lamp_M_Lamp_Yellow_2_0"
                    geometry={nodes.SM_Lamp_M_Lamp_Yellow_2_0.geometry}
                    material={materials.M_Lamp_Yellow_2}
                  />
                  <mesh
                    name="SM_Lamp_M_Lamp_Yellow_1_0"
                    geometry={nodes.SM_Lamp_M_Lamp_Yellow_1_0.geometry}
                    material={materials.M_Lamp_Yellow_1}
                  />
                </group>
                <group name="SM_Paintings_Left">
                  <mesh
                    name="SM_Paintings_Left_M_Lamp_Rim_0"
                    geometry={nodes.SM_Paintings_Left_M_Lamp_Rim_0.geometry}
                    material={materials.M_Lamp_Rim}
                  />
                  <mesh
                    name="SM_Paintings_Left_M_Painting_3_0"
                    geometry={nodes.SM_Paintings_Left_M_Painting_3_0.geometry}
                    material={materials.M_Painting_3}
                  />
                  <mesh
                    name="SM_Paintings_Left_M_Painting_2_0"
                    geometry={nodes.SM_Paintings_Left_M_Painting_2_0.geometry}
                    material={materials.M_Painting_2}
                  />
                  <mesh
                    name="SM_Paintings_Left_M_Painting_1_0"
                    geometry={nodes.SM_Paintings_Left_M_Painting_1_0.geometry}
                    material={materials.M_Painting_1}
                  />
                  <mesh
                    name="SM_Paintings_Left_M_Painting_4_0"
                    geometry={nodes.SM_Paintings_Left_M_Painting_4_0.geometry}
                    material={materials.M_Painting_4}
                  />
                </group>
                <group name="SM_Paintings_Right">
                  <mesh
                    name="SM_Paintings_Right_M_Lamp_Rim_0"
                    geometry={nodes.SM_Paintings_Right_M_Lamp_Rim_0.geometry}
                    material={materials.M_Lamp_Rim}
                  />
                  <mesh
                    name="SM_Paintings_Right_M_Painting_2_0"
                    geometry={nodes.SM_Paintings_Right_M_Painting_2_0.geometry}
                    material={materials.M_Painting_2}
                  />
                  <mesh
                    name="SM_Paintings_Right_M_Painting_4_0"
                    geometry={nodes.SM_Paintings_Right_M_Painting_4_0.geometry}
                    material={materials.M_Painting_4}
                  />
                  <mesh
                    name="SM_Paintings_Right_M_Painting_1_0"
                    geometry={nodes.SM_Paintings_Right_M_Painting_1_0.geometry}
                    material={materials.M_Painting_1}
                  />
                  <mesh
                    name="SM_Paintings_Right_M_Painting_3_0"
                    geometry={nodes.SM_Paintings_Right_M_Painting_3_0.geometry}
                    material={materials.M_Painting_3}
                  />
                </group>
                <group name="SM_Papers_Table">
                  <mesh
                    name="SM_Papers_Table_M_Paper_0"
                    geometry={nodes.SM_Papers_Table_M_Paper_0.geometry}
                    material={materials.M_Paper}
                  />
                </group>
                <group name="SM_Pencils_Table">
                  <mesh
                    name="SM_Pencils_Table_M_Pencil_0"
                    geometry={nodes.SM_Pencils_Table_M_Pencil_0.geometry}
                    material={materials.M_Pencil}
                  />
                  <mesh
                    name="SM_Pencils_Table_M_Carpet_Color1_0"
                    geometry={nodes.SM_Pencils_Table_M_Carpet_Color1_0.geometry}
                    material={materials.M_Carpet_Color1}
                  />
                  <mesh
                    name="SM_Pencils_Table_M_Carpet_Color2_0"
                    geometry={nodes.SM_Pencils_Table_M_Carpet_Color2_0.geometry}
                    material={materials.M_Carpet_Color2}
                  />
                  <mesh
                    name="SM_Pencils_Table_M_Cover_Color_4_0"
                    geometry={nodes.SM_Pencils_Table_M_Cover_Color_4_0.geometry}
                    material={materials.M_Cover_Color_4}
                  />
                </group>
                <group name="SM_Picture_Frames">
                  <mesh
                    name="SM_Picture_Frames_M_Carpet_Color1_0"
                    geometry={
                      nodes.SM_Picture_Frames_M_Carpet_Color1_0.geometry
                    }
                    material={materials.M_Carpet_Color1}
                  />
                  <mesh
                    name="SM_Picture_Frames_M_Painting_2_0"
                    geometry={nodes.SM_Picture_Frames_M_Painting_2_0.geometry}
                    material={materials.M_Painting_2}
                  />
                  <mesh
                    name="SM_Picture_Frames_M_Painting_3_0"
                    geometry={nodes.SM_Picture_Frames_M_Painting_3_0.geometry}
                    material={materials.M_Painting_3}
                  />
                </group>
                <group name="SM_Plants_Shelf">
                  <mesh
                    name="SM_Plants_Shelf_M_Cover_Color_3_0"
                    geometry={nodes.SM_Plants_Shelf_M_Cover_Color_3_0.geometry}
                    material={materials.M_Cover_Color_3}
                  />
                  <mesh
                    name="SM_Plants_Shelf_M_Cover_Color_2_0"
                    geometry={nodes.SM_Plants_Shelf_M_Cover_Color_2_0.geometry}
                    material={materials.M_Cover_Color_2}
                  />
                  <mesh
                    name="SM_Plants_Shelf_M_Wood_1_0"
                    geometry={nodes.SM_Plants_Shelf_M_Wood_1_0.geometry}
                    material={materials.M_Wood_1}
                  />
                  <mesh
                    name="SM_Plants_Shelf_M_Cover_Color_1_0"
                    geometry={nodes.SM_Plants_Shelf_M_Cover_Color_1_0.geometry}
                    material={materials.M_Cover_Color_1}
                  />
                  <mesh
                    name="SM_Plants_Shelf_M_Cover_Color_5_0"
                    geometry={nodes.SM_Plants_Shelf_M_Cover_Color_5_0.geometry}
                    material={materials.M_Cover_Color_5}
                  />
                </group>
                <group name="SM_Quill">
                  <mesh
                    name="SM_Quill_M_Rat_0"
                    geometry={nodes.SM_Quill_M_Rat_0.geometry}
                    material={materials.M_Rat}
                  />
                  <mesh
                    name="SM_Quill_M_Paper_0"
                    geometry={nodes.SM_Quill_M_Paper_0.geometry}
                    material={materials.M_Paper}
                  />
                  <mesh
                    name="SM_Quill_M_Feather_0"
                    geometry={nodes.SM_Quill_M_Feather_0.geometry}
                    material={materials.M_Feather}
                  />
                </group>
                <group name="SM_Rat">
                  <mesh
                    name="SM_Rat_M_Rat_0"
                    geometry={nodes.SM_Rat_M_Rat_0.geometry}
                    material={materials.M_Rat}
                  />
                  <mesh
                    name="SM_Rat_M_Cat_Nose_Ears_0"
                    geometry={nodes.SM_Rat_M_Cat_Nose_Ears_0.geometry}
                    material={materials.M_Cat_Nose_Ears}
                  />
                </group>
                <group name="SM_Scrolls_Drawer">
                  <mesh
                    name="SM_Scrolls_Drawer_M_Paper_0"
                    geometry={nodes.SM_Scrolls_Drawer_M_Paper_0.geometry}
                    material={materials.M_Paper}
                  />
                  <mesh
                    name="SM_Scrolls_Drawer_M_Scroll_Tie_0"
                    geometry={nodes.SM_Scrolls_Drawer_M_Scroll_Tie_0.geometry}
                    material={materials.M_Scroll_Tie}
                  />
                </group>
                <group name="SM_Scrolls_Shelf">
                  <mesh
                    name="SM_Scrolls_Shelf_M_Gold_0"
                    geometry={nodes.SM_Scrolls_Shelf_M_Gold_0.geometry}
                    material={materials.M_Gold}
                  />
                  <mesh
                    name="SM_Scrolls_Shelf_M_Paper_0"
                    geometry={nodes.SM_Scrolls_Shelf_M_Paper_0.geometry}
                    material={materials.M_Paper}
                  />
                  <mesh
                    name="SM_Scrolls_Shelf_M_Scroll_Tie_0"
                    geometry={nodes.SM_Scrolls_Shelf_M_Scroll_Tie_0.geometry}
                    material={materials.M_Scroll_Tie}
                  />
                </group>
                <group name="SM_Shelf">
                  <mesh
                    name="SM_Shelf_M_Wood3_0"
                    geometry={nodes.SM_Shelf_M_Wood3_0.geometry}
                    material={materials.M_Wood3}
                  />
                  <mesh
                    name="SM_Shelf_M_Wood_2_0"
                    geometry={nodes.SM_Shelf_M_Wood_2_0.geometry}
                    material={materials.M_Wood_2}
                  />
                </group>
                <group name="SM_Stars">
                  <mesh
                    name="SM_Stars_M_Cat_0"
                    geometry={nodes.SM_Stars_M_Cat_0.geometry}
                    material={materials.M_Cat}
                  />
                  <mesh
                    name="SM_Stars_M_Lamp_Rim_0"
                    geometry={nodes.SM_Stars_M_Lamp_Rim_0.geometry}
                    material={materials.M_Lamp_Rim}
                  />
                </group>
                <group name="SM_Table">
                  <mesh
                    name="SM_Table_M_Wood_1_0"
                    geometry={nodes.SM_Table_M_Wood_1_0.geometry}
                    material={materials.M_Wood_1}
                  />
                  <mesh
                    name="SM_Table_M_Wood3_0"
                    geometry={nodes.SM_Table_M_Wood3_0.geometry}
                    material={materials.M_Wood3}
                  />
                </group>
                <group name="SM_Tea">
                  <mesh
                    name="SM_Tea_M_Porcelain_Blue_0"
                    geometry={nodes.SM_Tea_M_Porcelain_Blue_0.geometry}
                    material={materials.M_Porcelain_Blue}
                  />
                  <mesh
                    name="SM_Tea_M_Porcelain_0"
                    geometry={nodes.SM_Tea_M_Porcelain_0.geometry}
                    material={materials.M_Porcelain}
                  />
                  <mesh
                    name="SM_Tea_M_Tea_0"
                    geometry={nodes.SM_Tea_M_Tea_0.geometry}
                    material={materials.M_Tea}
                  />
                  <mesh
                    name="SM_Tea_M_Steam_0"
                    geometry={nodes.SM_Tea_M_Steam_0.geometry}
                    material={materials.M_Steam}
                  />
                </group>
                <group name="SM_Wall_Book_Cover">
                  <mesh
                    name="SM_Wall_Book_Cover_M_Book_Cover_0"
                    geometry={nodes.SM_Wall_Book_Cover_M_Book_Cover_0.geometry}
                    material={materials.M_Book_Cover}
                  />
                </group>
                <group name="SM_Wall_Book_Paper">
                  <mesh
                    name="SM_Wall_Book_Paper_M_Paper_Written_0"
                    geometry={
                      nodes.SM_Wall_Book_Paper_M_Paper_Written_0.geometry
                    }
                    material={materials.M_Paper_Written}
                  />
                  <mesh
                    name="SM_Wall_Book_Paper_M_Paper_Wall_0"
                    geometry={nodes.SM_Wall_Book_Paper_M_Paper_Wall_0.geometry}
                    material={materials.M_Paper_Wall}
                  />
                </group>
                <group name="SM_Wall_Lamp">
                  <mesh
                    name="SM_Wall_Lamp_M_Book_Cover_0"
                    geometry={nodes.SM_Wall_Lamp_M_Book_Cover_0.geometry}
                    material={materials.M_Book_Cover}
                  />
                  <mesh
                    name="SM_Wall_Lamp_M_Lamp_Rim_0"
                    geometry={nodes.SM_Wall_Lamp_M_Lamp_Rim_0.geometry}
                    material={materials.M_Lamp_Rim}
                  />
                  <mesh
                    name="SM_Wall_Lamp_M_Stars_0"
                    geometry={nodes.SM_Wall_Lamp_M_Stars_0.geometry}
                    material={materials.M_Stars}
                  />
                </group>
                <mesh
                  name="SM_FloorBoard_M_Wood_5_0"
                  geometry={nodes.SM_FloorBoard_M_Wood_5_0.geometry}
                  material={materials.M_Wood_5}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/room.glb");
