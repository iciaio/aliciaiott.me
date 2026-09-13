import type { MediaItem } from "../data/projects";
import "./MediaGallery.css";

interface MediaGalleryProps {
  media: MediaItem[];
}

function isVimeo(src: string) {
  return src.includes("vimeo.com");
}

export default function MediaGallery({ media }: MediaGalleryProps) {
  if (media.length === 0) {
    return null;
  }

  return (
    <div className="media-gallery">
      {media.map((item, index) => {
        const key = `${item.type}-${index}-${item.src}`;
        if (item.type === "image") {
          return (
            <img
              key={key}
              className="media-gallery-image"
              src={item.src}
              loading="lazy"
              alt=""
            />
          );
        }

        return (
          <div
            key={key}
            className={`media-gallery-video ${isVimeo(item.src) ? "media-gallery-video--vimeo" : ""}`}
          >
            <iframe
              src={item.src}
              title={key}
              frameBorder={0}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        );
      })}
    </div>
  );
}
