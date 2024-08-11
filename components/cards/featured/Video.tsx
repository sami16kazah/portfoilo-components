import { cn } from "@/lib/util";
import React, { FC, useEffect, useRef } from "react";
interface VideoProps {
  video: string;
  active: boolean;
}
export const Video: FC<VideoProps> = ({ video, active }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const embedUrl = video.includes("youtube.com")
    ? video.replace("watch?v=", "embed/").split("&")[0]
    : video;

  useEffect(() => {
    if (videoRef.current) {
      if (active) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [active]);

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 rounded-3xl  ">
      <video
        src={video}
        ref={videoRef}
        className={cn(
          "h-full w-full object-cover rounded-3xl",
          active ? "" : "grayscale"
        )}
      ></video>
      {/* youtube 
      <iframe
        src={embedUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className={cn(
          "h-full w-full object-cover rounded-3xl",
          active ? "" : "grayscale"
        )}
      ></iframe>
      */}
    </div>
  );
};
