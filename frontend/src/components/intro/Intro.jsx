import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["A Rafy Deliveries", "Make an Order", "We are at your Service"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <h2>
            <span ref={textRef}></span>
          </h2>
    </div>
  );
}
