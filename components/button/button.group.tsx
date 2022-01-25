interface ButtonGroupProps {
  readonly children: React.ReactNode[];
  label?: string;
  isReverse?: boolean;
  className?: string;
}

export const ButtonGroup = ({ children, label, className = '', isReverse }: ButtonGroupProps): JSX.Element => {
  const horizontalMargin = isReverse ? 'sm:mr-3' : 'sm:ml-3';

  return (
    <div className={className}>
      {label && <h2 className="mb-2 text-2xl font-bold leading-9 tracking-tight text-gray-900">{label}</h2>}
      <div className={`sm:inline-flex  ${isReverse ? 'sm:flex-row-reverse' : ''}`}>
        {children.map((child, index) => (
          <span className={`block ${index > 0 ? `mt-3 sm:mt-0 ${horizontalMargin}` : ''}`} key={`button-${index}`}>
            {child}
          </span>
        ))}
      </div>
    </div>
  );
};
