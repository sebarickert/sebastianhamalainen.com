interface HeroLeadProps {
  children: string;
}

export const HeroLead = ({ children }: HeroLeadProps): JSX.Element => (
  <p className="!leading-snug font-light text-3xl sm:text-4xl lg:text-5xl">{children}</p>
);
