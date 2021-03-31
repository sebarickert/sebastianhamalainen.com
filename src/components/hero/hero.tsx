import * as React from "react";
import Container from "../container/container";
import Spacer from "../spacer/spacer";

interface HeroProps {
  title: string;
  children: React.ReactNode;
}

const Hero = ({ title, children }: HeroProps): JSX.Element => (
  <div>
    <Container>
      <Spacer>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-tight sm:leading-tight lg:leading-tight font-extrabold tracking-tight text-gray-900 mb-4 sm:mb-8">
          {title}
        </h1>
        {children}
      </Spacer>
    </Container>
  </div>
);

export default Hero;
