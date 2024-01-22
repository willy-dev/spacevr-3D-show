/* eslint-disable react/no-unknown-property */ 

import { Spinning, Floating, StandardReality, Model } from "spacesvr";
import TransparentFloor from "ideas/TransparentFloor";
import CloudySky from "ideas/CloudySky";
import {Sky} from "@react-three/drei";

export default function Starter() {
  return (
    <StandardReality>
      <ambientLight intensity={3}/>
      <Model scale= {0.007} position-y={0.01} rotation-x={-Math.PI/2} src ="./../vrShowcaseGlassFixed.glb" />
      <Model  src ="./../product.glb" scale= {0.01} position={[0.05,0.7,-0.01]} />
      <TransparentFloor opacity={0.7} />
      <Sky />
    </StandardReality>
  );
}
