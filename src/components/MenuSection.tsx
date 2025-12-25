import { coffeeMenu } from '@/data/coffeeMenu';
import { CoffeeMenuItem } from './CoffeeMenuItem';

export const MenuSection = () => {
  return (
    <section id="menu" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium uppercase tracking-wider text-sm reveal">
            Our Menu
          </span>
          <h2 className="section-title mt-2 reveal" style={{ transitionDelay: '0.1s' }}>
            Signature <span className="text-primary">Coffee</span> Creations
          </h2>
          <p className="section-subtitle reveal" style={{ transitionDelay: '0.2s' }}>
            Each cup is crafted with passion using the finest beans and expert techniques
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {coffeeMenu.map((item, index) => (
            <div
              key={item.id}
              className="reveal"
              style={{ transitionDelay: `${0.1 * index}s` }}
            >
              <CoffeeMenuItem item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
