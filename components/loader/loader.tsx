export const Loader = (): JSX.Element => {
  return (
    <div className="py-8">
      <div
        className="mx-auto h-32 w-32 animate-spin rounded-full border-8 border-solid border-blue-100 !border-t-blue-500"
        aria-label="Content is loading"
        role="presentation"
      ></div>
    </div>
  );
};
