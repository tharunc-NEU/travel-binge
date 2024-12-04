import React, { useEffect, useRef } from "react";

const reviews = [
  {
    name: "Emily Johnson",
    feedback: "An unforgettable experience!",
    rating: 4.8,
    image: "assets/american.jpeg",
  },
  {
    name: "James Anderson",
    feedback: "Excellent service and destinations!",
    rating: 4.9,
    image: "assets/james.jpeg",
  },
  {
    name: "Sophia Lee",
    feedback: "Truly a fantastic experience!",
    rating: 4.7,
    image: "assets/chin.jpeg",
  },
  // Duplicate reviews for seamless scrolling
  {
    name: "Emily Johnson",
    feedback: "An unforgettable experience!",
    rating: 4.8,
    image: "assets/american.jpeg",
  },
  {
    name: "James Anderson",
    feedback: "Excellent service and destinations!",
    rating: 4.9,
    image: "assets/james.jpeg",
  },
  {
    name: "Sophia Lee",
    feedback: "Truly a fantastic experience!",
    rating: 4.7,
    image: "assets/chin.jpeg",
  },
];

const UserFeedback = () => {
  const scrollContainerRef = useRef(null);
  const scrollIntervalRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      let scrollAmount = 0;

      const startScrolling = () => {
        scrollIntervalRef.current = setInterval(() => {
          scrollAmount += 1;
          if (scrollAmount >= scrollContainer.scrollWidth / 2) {
            scrollAmount = 0; // Reset scroll for seamless loop
          }
          scrollContainer.scrollTo({
            left: scrollAmount,
            behavior: "smooth",
          });
        }, 30); // Adjust scroll speed here
      };

      const stopScrolling = () => {
        clearInterval(scrollIntervalRef.current);
      };

      startScrolling();

      scrollContainer.addEventListener("mouseenter", stopScrolling);
      scrollContainer.addEventListener("mouseleave", startScrolling);

      return () => {
        stopScrolling();
        scrollContainer.removeEventListener("mouseenter", stopScrolling);
        scrollContainer.removeEventListener("mouseleave", startScrolling);
      };
    }
  }, []);

  return (
    <div className="mx-8 mb-16">
      <h2 className="text-4xl font-display font-semibold text-center mb-8">
        User Feedback and Reviews
      </h2>

      {/* Auto-scrolling Reviews Container */}
      <div
        ref={scrollContainerRef}
        className="overflow-hidden relative flex gap-4"
      >
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex-none bg-white p-6 rounded-lg shadow-lg text-center w-80 transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={review.image}
              alt={review.name}
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{review.name}</h3>
            <p className="text-gray-600 text-sm mb-4">"{review.feedback}"</p>
            <span className="text-yellow-500">
              <i className="fas fa-star"></i> {review.rating}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserFeedback;
