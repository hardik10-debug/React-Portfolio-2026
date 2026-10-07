import React, { useState } from "react";

const ImageCarousel = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const nextImage = (e) => {
    e?.stopPropagation();

    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = (e) => {
    e?.stopPropagation();

    setCurrentIndex(
      (prev) => (prev - 1 + images.length) % images.length
    );
  };

  return (
    <>
      {/* Project Image */}
      <div
        onClick={() => setIsOpen(true)}
        className="relative h-56 bg-[#09090B] border-b border-[#27272A] overflow-hidden group cursor-pointer"
      >
        <img
          src={images[currentIndex]}
          alt={`${title} screenshot ${currentIndex + 1}`}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />

        {/* Click to expand */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition">
          <span className="opacity-0 group-hover:opacity-100 transition bg-black/70 text-white px-4 py-2 rounded-lg text-sm">
            Click to expand ↗
          </span>
        </div>

        {/* Carousel arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={previousImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/70 text-white hover:bg-[#22C55E] hover:text-black transition"
            >
              ←
            </button>

            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/70 text-white hover:bg-[#22C55E] hover:text-black transition"
            >
              →
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(index);
                  }}
                  className={`h-2 rounded-full transition ${
                    index === currentIndex
                      ? "w-5 bg-[#22C55E]"
                      : "w-2 bg-white/60"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Fullscreen Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-6"
          onClick={() => setIsOpen(false)}
        >
          {/* Close */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-6 text-white text-3xl hover:text-[#22C55E] transition"
          >
            ✕
          </button>

          {/* Previous */}
          {images.length > 1 && (
            <button
              onClick={previousImage}
              className="absolute left-5 md:left-10 text-white text-4xl hover:text-[#22C55E] transition"
            >
              ←
            </button>
          )}

          {/* Image */}
          <img
            src={images[currentIndex]}
            alt={`${title} screenshot ${currentIndex + 1}`}
            onClick={(e) => e.stopPropagation()}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
          />

          {/* Next */}
          {images.length > 1 && (
            <button
              onClick={nextImage}
              className="absolute right-5 md:right-10 text-white text-4xl hover:text-[#22C55E] transition"
            >
              →
            </button>
          )}

          {/* Counter */}
          {images.length > 1 && (
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[#A1A1AA] text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ImageCarousel;