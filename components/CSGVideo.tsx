interface CSGVideoProps {
  fileName: string;
  fallbackFileName: string;
  className?: string;
}

export const CSGVideo = ({
  fileName,
  fallbackFileName,
  className,
}: Readonly<CSGVideoProps>) => {
  return (
    <video
      loop
      autoPlay
      playsInline
      muted
      preload="auto"
      poster={fallbackFileName}
      className={className}
    >
      <source src={fileName} type="video/mp4" />
      <p className="text-sm text-muted-foreground">Cannot view the video!</p>
    </video>
  );
};
