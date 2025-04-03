"use client";
import { SiReact, SiNextdotjs, SiTailwindcss, SiJavascript, SiMysql, SiTypescript } from "react-icons/si";
import "./../cube.css";

export default function Cube() {
  return (
    <div className="animation-container flex justify-center">
      <div className="cube text-4xl text-accent">
        <div className="cube-face front"><SiReact /></div>
        <div className="cube-face back"><SiNextdotjs /></div>
        <div className="cube-face right"><SiTailwindcss /></div>
        <div className="cube-face left"><SiJavascript /></div>
        <div className="cube-face top"><SiMysql /></div>
        <div className="cube-face bottom"><SiTypescript /></div>
      </div>
    </div>
  );
}
