import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const reviews = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Coffee Enthusiast',
    content: 'The best coffee I\'ve ever tasted! The atmosphere is so cozy and the staff is incredibly friendly. My new favorite spot!',
    rating: 5,
    avatar: 'SM',
  },
  {
    id: 2,
    name: 'James Rodriguez',
    role: 'Regular Customer',
    content: 'Been coming here for 3 years now. The consistency in quality is remarkable. Their espresso is simply perfection.',
    rating: 5,
    avatar: 'JR',
  },
  {
    id: 3,
    name: 'Emily Chen',
    role: 'Food Blogger',
    content: 'As a food blogger, I\'ve tried countless coffee shops. Brew Haven stands out with their attention to detail and passion.',
    rating: 5,
    avatar: 'EC',
  },
  {
    id: 4,
    name: 'Michael Brown',
    role: 'Local Resident',
    content: 'The Belgian Mocha is to die for! Great place to work remotely too. Fast wifi and great ambiance.',
    rating: 4,
    avatar: 'MB',
  },
];

export const ReviewsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextReview = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium uppercase tracking-wider text-sm reveal">
            Testimonials
          </span>
          <h2 className="section-title mt-2 reveal" style={{ transitionDelay: '0.1s' }}>
            What Our <span className="text-primary">Customers</span> Say
          </h2>
          <p className="section-subtitle reveal" style={{ transitionDelay: '0.2s' }}>
            Don't just take our word for it — hear from our happy customers
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className="reveal coffee-card p-6"
              style={{ transitionDelay: `${0.1 * index}s` }}
            >
              <Quote className="h-8 w-8 text-primary/30 mb-4" />
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{review.content}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  {review.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mt-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < review.rating
                        ? 'text-accent fill-accent'
                        : 'text-muted-foreground'
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden reveal">
          <div className="coffee-card p-6">
            <Quote className="h-8 w-8 text-primary/30 mb-4" />
            <p className="text-muted-foreground mb-6 leading-relaxed">
              "{reviews[activeIndex].content}"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                {reviews[activeIndex].avatar}
              </div>
              <div>
                <p className="font-semibold text-foreground">{reviews[activeIndex].name}</p>
                <p className="text-sm text-muted-foreground">{reviews[activeIndex].role}</p>
              </div>
            </div>
            <div className="flex gap-1 mt-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < reviews[activeIndex].rating
                      ? 'text-accent fill-accent'
                      : 'text-muted-foreground'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevReview}
              aria-label="Previous review"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex
                      ? 'bg-primary w-6'
                      : 'bg-muted-foreground/30'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextReview}
              aria-label="Next review"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
