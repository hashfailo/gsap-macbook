import React, { useRef, useEffect } from "react";

const Hero = () => {
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 2;
  }, []);

  return (
    <section id="hero">
      <div>
        <h1>MacBook Pro</h1>
        <img src="/title.png" alt="MacBook Title" />
        <video
          src="/videos/hero.mp4"
          alt="MacBook Pro"
          autoPlay
          muted
          playInline
        ></video>

        <button>Buy</button>
        <p>For $1,499 or 129/month every month</p>
      </div>
    </section>
  );
};

export default Hero;
