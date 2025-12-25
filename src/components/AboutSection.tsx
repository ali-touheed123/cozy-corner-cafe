import { Award, Heart, Leaf } from 'lucide-react';
import aboutImg from '@/assets/about-coffee-shop.jpg';

const features = [
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'We source only the finest single-origin beans from sustainable farms worldwide.',
  },
  {
    icon: Heart,
    title: 'Crafted with Love',
    description: 'Every cup is prepared by our skilled baristas with attention to every detail.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'We are committed to sustainable practices and reducing our environmental footprint.',
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="reveal">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={aboutImg}
                alt="Cozy coffee shop interior with warm lighting"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
              
              {/* Experience Badge */}
              <div className="absolute bottom-6 left-6 bg-card/90 backdrop-blur-sm rounded-xl p-4 shadow-soft">
                <p className="font-display text-3xl font-bold text-primary">10+</p>
                <p className="text-sm text-muted-foreground">Years of Excellence</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Our Story
            </span>
            <h2 className="section-title mt-2">
              A Passion for
              <br />
              <span className="text-primary">Perfect Coffee</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Founded in 2014, Brew Haven began with a simple dream: to create a space where 
              coffee lovers could experience the world&apos;s finest brews in a warm, welcoming 
              atmosphere. What started as a small corner café has grown into a beloved community 
              gathering place.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our master roasters travel the globe to discover exceptional beans, while our 
              baristas train extensively to perfect their craft. Every cup we serve represents 
              our commitment to quality and our love for the art of coffee making.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="reveal text-center sm:text-left"
                  style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-3">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
