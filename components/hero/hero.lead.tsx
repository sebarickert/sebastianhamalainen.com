interface HeroLeadProps {
  children: string;
}

export const HeroLead = ({ children }: HeroLeadProps): JSX.Element => (
  <p className="!leading-relaxed text-2xl sm:text-4xl lg:text-5xl text-gray-700 sm:font-light sm:!leading-snug sm:text-gray-800">
    {children}
  </p>
);
