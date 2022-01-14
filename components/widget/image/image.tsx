/* eslint-disable @next/next/no-img-element */

interface WidgetImageProps {
  src: string;
  alt?: string;
}

export const WidgetImage = ({ src, alt = '' }: WidgetImageProps): JSX.Element => {
  return (
    <div className="my-8 -mx-8 md:-mx-10 lg:-mx-24">
      <figure className="relative prose:rounded-md overflow-hidden border-t-2 border-b-2 prose:border-2 max-w-full h-full">
        <img src={src} alt={alt} />
      </figure>
    </div>
  );
};
