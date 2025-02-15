import React from "react";
import Section from "./Section";
import { curve } from "../assets";
import Button from "./Button";

const Hero = () => {
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative">
        <div className="ralative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb:[6rem]">
          <h1 className="h1 mb-6">
            Explore the Possibilities of AI Chatting with BrainwaveCurve
            <span className="inline-block relative">
              Brainwave
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Unleashthe power of AI within Brainwave. Upgrade your Productivity
            with Brainwave, the open AI chat app.
          </p>
          <Button href="/pricing" white>
            Get Started
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
