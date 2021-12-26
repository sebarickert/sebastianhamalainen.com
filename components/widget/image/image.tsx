import NextImage from 'next/image';

interface WidgetImageProps {
  src: string;
  alt?: string;
}

export const WidgetImage = ({ src, alt = '' }: WidgetImageProps): JSX.Element => {
  return (
    <div className="my-8 -mx-6 md:-mx-10 lg:-mx-24">
      <figure className="relative aspect-w-16 aspect-h-10 overflow-hidden prose:rounded-md border-2">
        <NextImage src={src} alt={alt} layout="fill" objectFit="contain" objectPosition="top" />
      </figure>
    </div>
  );
};
