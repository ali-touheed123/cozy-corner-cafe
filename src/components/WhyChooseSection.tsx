import { Coffee, Clock, Truck, Award } from 'lucide-react';

const reasons = [
  {
    icon: Coffee,
    title: 'Premium Beans',
    description: 'Sourced from the world\'s finest coffee-growing regions',
  },
  {
    icon: Clock,
    title: 'Fresh Roasted',
    description: 'Beans roasted in small batches for peak freshness',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Quick and reliable delivery right to your doorstep',
  },
  {
    icon: Award,
    title: 'Award Winning',
    description: 'Recognized excellence in coffee craftsmanship',
  },
];

export const WhyChooseSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium uppercase tracking-wider text-sm reveal">
            Why Us
          </span>
          <h2 className="section-title mt-2 reveal" style={{ transitionDelay: '0.1s' }}>
            Why Choose <span className="text-primary">Brew Haven</span>
          </h2>
          <p className="section-subtitle reveal" style={{ transitionDelay: '0.2s' }}>
            Experience the difference that passion and quality make
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="reveal coffee-card p-6 text-center group"
              style={{ transitionDelay: `${0.1 * index}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-4 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                <reason.icon className="h-8 w-8" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
