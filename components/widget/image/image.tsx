/* eslint-disable @next/next/no-img-element */

interface WidgetImageProps {
  src: string;
  alt?: string;
}

export const WidgetImage = ({ src, alt = '' }: WidgetImageProps): JSX.Element => {
  return (
    <div className="my-8 -mx-8 md:-mx-10 lg:-mx-24">
      <figure className="relative h-full max-w-full overflow-hidden border-t-2 border-b-2 dark:border-b-neutral-850 dark:border-t-neutral-850 prose:rounded-md prose:border-2 dark:prose:border-neutral-850">
        <img src={src} alt={alt} />
      </figure>
    </div>
  );
};
