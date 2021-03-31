import * as React from "react";

interface HeroLeadProps {
  children: string;
}

const HeroLead = ({ children }: HeroLeadProps): JSX.Element => (
  <h2 className="text-2xl sm:text-3xl lg:text-5xl font-light leading-relaxed sm:leading-relaxed lg:leading-normal">
    {children}
  </h2>
);

export default HeroLead;
