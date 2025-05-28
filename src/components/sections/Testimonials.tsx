"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { testimonials } from "@/data/testimonials";
import Image from "next/image";

const Testimonials = () => {
  const { theme } = useTheme();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What Our
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {" "}
              Clients Say
            </span>
          </h2>
        </div>

        <div className="relative">
          <div
            className={`p-8 rounded-2xl border ${
              theme === "dark"
                ? "bg-black border-gray-700"
                : "bg-white border-gray-200"
            } shadow-xl max-w-4xl mx-auto`}
          >
            <div className="flex items-center mb-6">
              <Image
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                width={64}
                height={64}
                className="rounded-full mr-4"
              />
              <div>
                <h4 className="text-xl font-semibold">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p
                  className={`${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {testimonials[currentTestimonial].company}
                </p>
                <div className="flex mt-1">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    )
                  )}
                </div>
              </div>
            </div>
            <p
              className={`text-lg leading-relaxed ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              &ldquo;{testimonials[currentTestimonial].text}&rdquo;
            </p>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full ${
              theme === "dark"
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-white hover:bg-gray-50"
            } shadow-lg transition-all duration-200`}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full ${
              theme === "dark"
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-white hover:bg-gray-50"
            } shadow-lg transition-all duration-200`}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentTestimonial
                    ? "bg-gradient-to-r from-purple-600 to-pink-600"
                    : theme === "dark"
                    ? "bg-gray-600"
                    : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
