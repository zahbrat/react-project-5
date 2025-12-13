import Section from "./Section";
import { useState, useEffect, useCallback } from "react";

// Увага: Ці шляхи до зображень '/weatherX.png' припускають,
// що файли знаходяться у папці 'public' вашого проекту.
const slidesData = [
  {
    id: 0,
    imageUrl: "/weather1.png",
  },
  {
    id: 1,
    imageUrl: "/weather2.png",
  },
  {
    id: 2,
    imageUrl: "/weather3.png",
  },
  {
    id: 3,
    imageUrl: "/weather4.png",
  },
  {
    id: 4,
    imageUrl: "/weather5.png",
  },
];

export default function Nature() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false); 
  const slideCount = slidesData.length;
  const slideIntervalDuration = 1500; 

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slideCount - 1 ? 0 : prev + 1));
  }, [slideCount]);

  useEffect(() => {
    if (isPaused) {
      return; 
    }

    const slideInterval = setInterval(nextSlide, slideIntervalDuration);

    return () => clearInterval(slideInterval);
  }, [nextSlide, isPaused, slideIntervalDuration]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <Section title="Beautiful nature">
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="relative overflow-hidden rounded-xl aspect-video sm:w-[50%] mx-auto">
          <div
            className="flex transition-transform duration-700 ease-in-out w-full h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slidesData.map((s, index) => (
              <div key={s.id} className="shrink-0 relative w-full h-full">
                <img
                  src={s.imageUrl}
                  alt={`Слайд ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-2 flex items-center justify-center gap-2">
          {slidesData.map((s, index) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlide(index)}
              aria-current={index === currentSlide ? "true" : "false"}
              aria-label={`Перейти до слайда ${index + 1}`}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-orange-300 scale-125"
                  : "bg-black opacity-70"
              }`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
