/* eslint-disable react/no-unknown-property */

import { Spinning, Floating, StandardReality } from "spacesvr";
import TransparentFloor from "ideas/TransparentFloor";
import CloudySky from "ideas/CloudySky";

export default function Starter() {
  return (
    <StandardReality>
      <ambientLight />
      
      <TransparentFloor opacity={0.7} />
    </StandardReality>
  );
}
