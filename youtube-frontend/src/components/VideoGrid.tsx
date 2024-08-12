import { VideoCard } from "./VideoCard";

const VIDEOS = [
  {
    title: "How to learn coding in 30 days | 30 day plan",
    author: "Saksham Batta",
    image: "thumb.jpg",
    thumbnail: "photo.png",
    views: "200k",
    timestamp: "1 day ago",
  },
  {
    title: "How to learn jumping in 30 days | 30 day plan",
    author: "Saksham Batta",
    image: "thumb.jpg",
    thumbnail: "photo.png",
    views: "200k",
    timestamp: "1 day ago",
  },
  {
    title: "How to learn cycling in 30 days | 30 day plan",
    author: "Saksham Batta",
    image: "thumb.jpg",
    thumbnail: "photo.png",
    views: "200k",
    timestamp: "1 day ago",
  },
  {
    title: "How to learn coding in 30 days | 30 day plan",
    author: "Saksham Batta",
    image: "thumb.jpg",
    thumbnail: "photo.png",
    views: "200k",
    timestamp: "1 day ago",
  },
  {
    title: "How to learn jumping in 30 days | 30 day plan",
    author: "Saksham Batta",
    image: "thumb.jpg",
    thumbnail: "photo.png",
    views: "200k",
    timestamp: "1 day ago",
  },
  {
    title: "How to learn cycling in 30 days | 30 day plan",
    author: "Saksham Batta",
    image: "thumb.jpg",
    thumbnail: "photo.png",
    views: "200k",
    timestamp: "1 day ago",
  },
  {
    title: "How to learn coding in 30 days | 30 day plan",
    author: "Saksham Batta",
    image: "thumb.jpg",
    thumbnail: "photo.png",
    views: "200k",
    timestamp: "1 day ago",
  },
  {
    title: "How to learn jumping in 30 days | 30 day plan",
    author: "Saksham Batta",
    image: "thumb.jpg",
    thumbnail: "photo.png",
    views: "200k",
    timestamp: "1 day ago",
  },
  {
    title: "How to learn cycling in 30 days | 30 day plan",
    author: "Saksham Batta",
    image: "thumb.jpg",
    thumbnail: "photo.png",
    views: "200k",
    timestamp: "1 day ago",
  },
];

export function VideoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
      {VIDEOS.map((video) => (
        <div>
          <VideoCard
            title={video.title}
            author={video.author}
            image={video.image}
            thumbnail={video.thumbnail}
            views={video.views}
            timestamp={video.timestamp}
          />
        </div>
      ))}
    </div>
  );
}
