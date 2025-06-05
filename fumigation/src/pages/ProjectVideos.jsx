import React, { useState, useRef, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getApp } from "firebase/app";

const ProjectVideos = () => {
  const [videos, setVideos] = useState([]);
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const videoRefs = useRef({});
  const db = getFirestore(getApp());

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "projectVideos"));
        const fetchedVideos = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setVideos(fetchedVideos);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  const handlePlay = (id) => {
    Object.entries(videoRefs.current).forEach(([key, video]) => {
      if (video && key !== id) {
        video.pause();
        video.currentTime = 0;
      }
    });

    const selectedVideo = videoRefs.current[id];
    if (selectedVideo) {
      selectedVideo.play();
      setPlayingVideoId(id);
    }
  };

  return (
    <section className="bg-black py-10 px-4">
      <h2 className="text-3xl font-bold text-lime-400 text-center mb-8">
        Completed Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video) => (
          <div
            key={video.id}
            className="flex flex-col items-center justify-start"
          >
            <div className="w-full aspect-video relative rounded-lg overflow-hidden shadow-md">
              <video
                ref={(el) => (videoRefs.current[video.id] = el)}
                src={video.url}
                className="w-full h-full object-cover"
                controls={playingVideoId === video.id}
                preload="metadata"
              />
              {playingVideoId !== video.id && (
                <button
                  onClick={() => handlePlay(video.id)}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 hover:bg-opacity-80 transition-colors"
                >
                  <span className="text-white text-lg font-semibold bg-lime-500 px-4 py-2 rounded-full shadow-md">
                    ▶ Play
                  </span>
                </button>
              )}
            </div>
            {video.title && (
              <p className="text-white text-xl font-bold mt-3 text-center max-w-xs">
                {video.title}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectVideos;
