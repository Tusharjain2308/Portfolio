import React from "react";
import { motion } from "framer-motion";
import useScrollToTop from "../../utils/scrolltotop";
import { LampContainer } from "../ui/Lamp";

export function LampDemo() {
  useScrollToTop();
  return (
    <LampContainer/>
    
  );
}
