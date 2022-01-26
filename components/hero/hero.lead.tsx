interface HeroLeadProps {
  children: string;
}

export const HeroLead = ({ children }: HeroLeadProps): JSX.Element => (
  <p className="text-2xl !leading-relaxed text-gray-700 dark:text-gray-300 sm:text-4xl sm:font-light sm:!leading-snug sm:text-gray-800 lg:text-5xl">
    {children}
  </p>
);
