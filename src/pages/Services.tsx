import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, ShoppingCart } from 'lucide-react';

const services = [
  {
    name: 'Veg Momos',
    price: '₹35-40',
    description: 'Our classic vegetarian momos are filled with a finely chopped mix of cabbage, carrots, beans, and onions, seasoned with our signature spice blend. Perfect for street carts and quick-service cafes.',
    features: ['Fresh seasonal veggies', 'Thin wrapper', 'High profit margin'],
    image: '/images/veg.jpg',
  },
  {
    name: 'Paneer Momos',
    price: '₹60',
    description: 'A premium vegetarian option featuring soft, crumbled malai paneer mixed with fresh coriander and mild spices. A favorite among restaurant diners looking for a richer taste.',
    features: ['Premium malai paneer', 'Rich protein source', 'Great for restaurants'],
    image: '/images/paneer.jpg',
  },
  {
    name: 'Egg Momos',
    price: '₹45-50',
    description: 'A nutritious and tasty option with scrambled eggs, lightly sautéed onions, and fresh green chilies. A unique offering for your breakfast or evening snack menu.',
    features: ['High protein eggs', 'Spicy & savory', 'Unique market offering'],
    image: '/images/egg.jpg',
  },
  {
    name: 'Chicken Momos',
    price: '₹70-80',
    description: 'Juicy minced chicken blended with ginger, garlic, and spring onions. These are our best-sellers, known for their consistent taste and quality.',
    features: ['Quality minced chicken', 'Juicy filling', 'Best-seller'],
    image: '/images/chicken.jpg',
  },
  {
    name: 'Mutton Momos',
    price: '₹100-120',
    description: 'For the ultimate gourmet experience. Tender minced mutton with traditional Himalayan spices. Ideal for high-end cafes and specialty restaurants.',
    features: ['Tender mutton', 'Traditional spices', 'Gourmet choice'],
    image: '/images/mutton.jpg',
  },
];

export default function Services() {
  const getWhatsAppLink = (momoName: string) => {
    const message = `Hi Abhishek, I'd like to inquire about bulk ordering ${momoName} from Momoshala.`;
    return `https://wa.me/916280167160?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services & Menu</h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We offer a wide range of momos tailored for bulk supply. Whether you run a small cart or a large restaurant, we have the right product for you.
            </p>
          </motion.div>
        </div>

        <div className="space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              }`}
            >
              <div className="flex-1">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video">
                  <img 
                    src={service.image} 
                    alt={service.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-orange-600 text-white px-4 py-2 text-lg">
                      {service.price} / Plate
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">{service.name}</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {service.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-8">
                    <a href={getWhatsAppLink(service.name)} target="_blank" rel="noopener noreferrer">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Order Bulk {service.name}
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Wholesale Note */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-32 bg-gray-900 rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-6">Wholesale Terms</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-orange-500 font-bold text-xl mb-2">Minimum Order</p>
              <p className="text-gray-400">10 Plates (100 Momos) per delivery.</p>
            </div>
            <div>
              <p className="text-orange-500 font-bold text-xl mb-2">Delivery</p>
              <p className="text-gray-400">Daily delivery available across Yol Cant and Dharamshala.</p>
            </div>
            <div>
              <p className="text-orange-500 font-bold text-xl mb-2">Customization</p>
              <p className="text-gray-400">Special spice levels available for bulk contracts.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
