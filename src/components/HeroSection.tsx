import { ArrowDown, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroCoffee from '@/assets/hero-coffee.jpg';

export const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/1234567890?text=Hello!%20I%20would%20like%20to%20place%20an%20order.', '_blank');
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroCoffee})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Steam Animation */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2">
        <div className="relative">
          <div className="steam-line h-16 animate-steam-rise" style={{ left: '20px', animationDelay: '0s' }} />
          <div className="steam-line h-20 animate-steam-rise" style={{ left: '40px', animationDelay: '0.5s' }} />
          <div className="steam-line h-14 animate-steam-rise" style={{ left: '60px', animationDelay: '1s' }} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center px-4">
        <div className="animate-slide-in-up">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Where Every Cup
            <br />
            <span className="text-accent">Tells a Story</span>
          </h1>
          <p className="text-primary-foreground/90 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Experience the perfect blend of artisan coffee, warm ambiance, and exceptional service. 
            Your daily escape awaits.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="hero"
              size="xl"
              onClick={() => scrollToSection('#cart')}
              className="group"
            >
              Order Now
              <ArrowDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
            </Button>
            <Button
              variant="whatsapp"
              size="xl"
              onClick={openWhatsApp}
              className="group"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Order
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <button
          onClick={() => scrollToSection('#about')}
          className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
};
