export const Loader = (): JSX.Element => {
  return (
    <div className="py-8">
      <div
        className="w-32 h-32 border-8 border-blue-100 border-solid rounded-full animate-spin !border-t-blue-500 mx-auto"
        aria-label="Content is loading"
        role="presentation"
      ></div>
    </div>
  );
};
