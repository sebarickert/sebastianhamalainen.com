interface WidgetVideoProps {
  src: string;
  className?: string;
}

export const WidgetVideo = ({ src, className = '' }: WidgetVideoProps): JSX.Element => {
  const youtubeVideoID = src.split('https://www.youtube.com/watch?v=').filter((item) => item)[0];
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeVideoID}`;

  return (
    <div className="my-8 -mx-6 md:-mx-10 lg:my-16 lg:-mx-24">
      <div className={`aspect-w-16 aspect-h-9 ${className}`}>
        <iframe
          src={youtubeEmbedUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
