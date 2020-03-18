import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function About() {

  let textItem = useRef(null);

  useEffect(() => {
    gsap.from(textItem, 1, {y:30, opacity: 0});

    return function cleanup(){
      gsap.to(textItem, 1, {x: -100});
    }
  }, [])

  return (
    <div className="container">
      <p ref={el => {textItem = el}}>ABOUT PAGE</p>
    </div>
  );
}
