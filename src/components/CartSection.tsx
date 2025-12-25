import { useState } from 'react';
import { Trash2, Plus, Minus, ShoppingBag, MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCartContext } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

export const CartSection = () => {
  const { cart, cartTotal, updateQuantity, removeFromCart, clearCart, generateWhatsAppMessage } = useCartContext();
  const { toast } = useToast();
  const [showModal, setShowModal] = useState(false);

  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      toast({
        title: 'Cart is empty',
        description: 'Please add items to your cart before placing an order.',
        variant: 'destructive',
      });
      return;
    }
    setShowModal(true);
  };

  const confirmOrder = () => {
    toast({
      title: 'Order placed successfully!',
      description: 'Thank you for your order. We will prepare it shortly.',
    });
    clearCart();
    setShowModal(false);
  };

  const openWhatsApp = () => {
    if (cart.length === 0) {
      toast({
        title: 'Cart is empty',
        description: 'Please add items to your cart before ordering via WhatsApp.',
        variant: 'destructive',
      });
      return;
    }
    const message = generateWhatsAppMessage();
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <section id="cart" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium uppercase tracking-wider text-sm reveal">
            Your Order
          </span>
          <h2 className="section-title mt-2 reveal" style={{ transitionDelay: '0.1s' }}>
            Shopping <span className="text-primary">Cart</span>
          </h2>
          <p className="section-subtitle reveal" style={{ transitionDelay: '0.2s' }}>
            Review your order and proceed to checkout
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {cart.length === 0 ? (
            <div className="text-center py-16 reveal">
              <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground/50 mb-4" />
              <h3 className="font-display text-xl text-foreground mb-2">Your cart is empty</h3>
              <p className="text-muted-foreground">
                Add some delicious coffee to get started!
              </p>
            </div>
          ) : (
            <div className="reveal">
              {/* Cart Items */}
              <div className="space-y-4 mb-8">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-soft"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display font-semibold text-foreground truncate">
                        {item.name}
                      </h4>
                      <p className="text-primary font-bold">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center font-semibold">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="text-right min-w-[80px]">
                      <p className="font-bold text-foreground">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-destructive hover:text-destructive hover:bg-destructive/10"
                      onClick={() => removeFromCart(item.id)}
                      aria-label="Remove item"
                    >
                      <Trash2 className="h-5 w-5" />
                    </Button>
                  </div>
                ))}
              </div>

              {/* Cart Summary */}
              <div className="bg-card rounded-xl p-6 shadow-soft mb-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-muted-foreground">Tax (10%)</span>
                  <span className="font-semibold">${(cartTotal * 0.1).toFixed(2)}</span>
                </div>
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-display text-lg font-semibold">Total</span>
                    <span className="font-display text-2xl font-bold text-primary">
                      ${(cartTotal * 1.1).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={clearCart}
                >
                  Clear Cart
                </Button>
                <Button
                  variant="whatsapp"
                  className="flex-1"
                  onClick={openWhatsApp}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Order via WhatsApp
                </Button>
                <Button
                  variant="coffee"
                  className="flex-1"
                  onClick={handlePlaceOrder}
                >
                  Place Order
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Order Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-foreground/50 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          />
          <div className="relative bg-card rounded-2xl p-6 md:p-8 max-w-md w-full shadow-elevated animate-scale-in">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
              aria-label="Close modal"
            >
              <X className="h-6 w-6" />
            </button>
            
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Confirm Your Order
            </h3>
            
            <div className="space-y-3 mb-6">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    {item.name} x{item.quantity}
                  </span>
                  <span className="font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
              <div className="border-t border-border pt-3">
                <div className="flex justify-between">
                  <span className="font-semibold">Total (incl. tax)</span>
                  <span className="font-bold text-primary">
                    ${(cartTotal * 1.1).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </Button>
              <Button
                variant="coffee"
                className="flex-1"
                onClick={confirmOrder}
              >
                Confirm Order
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
