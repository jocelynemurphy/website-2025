"use client";

import { useEffect, useState } from "react";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import Footer from "../footer";
import HomeNav from "../homenav";
import artPieces from "./art";

export default function ArtPortfolio() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = Object.entries(artPieces).map(([, artwork]) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => {
            resolve({
              src: artwork.url,
              width: img.naturalWidth,
              height: img.naturalHeight,
              alt: artwork.description,
            });
          };
          img.onerror = () => {
            // Fallback dimensions if image fails to load
            resolve({
              src: artwork.url,
              width: 400,
              height: 300,
              alt: artwork.description,
            });
          };
          img.src = artwork.url;
        });
      });

      const loadedPhotos = await Promise.all(imagePromises);
      setPhotos(loadedPhotos);
      setLoading(false);
    };

    loadImages();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <HomeNav />
        <main className="flex items-center justify-center">
          <div className="text-lg">Loading...</div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <HomeNav />
      <h3
        className="bg-white/50 hover:bg-white rounded-full w-36 fixed top-4 right-4 z-50 flex items-center justify-center h-10 hover:transition-transform hover:rotate-8 hover:scale-115 duration-200 ease-in-out cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Art Portfolio!
      </h3>
      <main className="flex flex-col row-start-2 items-start lg:max-w-7xl w-full">
        <div className="w-full mb-12 mt-2">
          <MasonryPhotoAlbum
            photos={photos}
            spacing={6}
            columns={(containerWidth) => {
              if (containerWidth < 450) return 1;
              if (containerWidth < 750) return 2;
              return 3;
            }}
          />
          <img
            alt="art-meal"
            src="https://personalwebsitecontent.s3.us-east-2.amazonaws.com/art-yummymeal.png"
            width={0}
            height={0}
            sizes="100vw"
            className="w-auto h-auto -mt-10 mb-20"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
