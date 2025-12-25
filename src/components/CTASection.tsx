import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const CTASection = () => {
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
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-primary-foreground blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto reveal">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready for Your Perfect Cup?
          </h2>
          <p className="text-primary-foreground/80 text-lg md:text-xl mb-8">
            Join thousands of coffee lovers who start their day with Brew Haven. 
            Order now and experience the difference quality makes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="heroOutline"
              size="xl"
              onClick={() => scrollToSection('#menu')}
              className="group border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10"
            >
              View Menu
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="whatsapp"
              size="xl"
              onClick={openWhatsApp}
              className="group"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Order on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
