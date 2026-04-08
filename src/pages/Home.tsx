import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShoppingCart, TrendingDown, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const momoTypes = [
  {
    name: 'Veg Momos',
    price: '₹35-40',
    description: 'Fresh seasonal vegetables with our secret spice blend.',
    image: '/images/veg.jpg',
  },
  {
    name: 'Paneer Momos',
    price: '₹60',
    description: 'Soft malai paneer with herbs and mild spices.',
    image: '/images/paneer.jpg',
  },
  {
    name: 'Egg Momos',
    price: '₹45-50',
    description: 'Scrambled eggs with onions and green chilies.',
    image: '/images/egg.jpg',
  },
  {
    name: 'Chicken Momos',
    price: '₹70-80',
    description: 'Juicy minced chicken with ginger and garlic.',
    image: '/images/chicken.jpg',
  },
  {
    name: 'Mutton Momos',
    price: '₹100-120',
    description: 'Tender minced mutton with traditional Himalayan spices.',
    image: '/images/mutton.jpg',
  },
];

export default function Home() {
  const whatsappLink = "https://wa.me/916280167160?text=Hi%20Abhishek,%20I'm%20interested%20in%20ordering%20momos%20from%20Momoshala.";

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-brand-cream">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/banner.jpg" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-brand-orange/10 text-brand-orange border-brand-orange/20 px-4 py-1">
                #1 Bulk Momo Supplier in Dharamshala
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold text-brand-brown leading-tight mb-6">
                Fresh Momos, <span className="text-brand-orange">Bulk Prices</span>, Unmatched Quality.
              </h1>
              <p className="text-xl text-brand-brown/80 mb-8 leading-relaxed">
                Scale your food business with Momoshala. We supply premium handmade momos to carts, cafes, and restaurants at wholesale rates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-8 h-14 text-lg">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    Order Now (WhatsApp)
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-14 text-lg border-gray-300">
                  <Link to="/services">View Menu</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Brief */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Serving Dharamshala Since 2024</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Momoshala started with a simple mission: to provide high-quality, authentic momos to food entrepreneurs at prices that allow them to thrive. Based in Yol Cant, we take pride in our traditional recipes and fresh ingredients.
              </p>
              <ul className="space-y-4">
                {[
                  'Handmade with fresh local ingredients',
                  'Strict hygiene standards',
                  'Reliable daily supply for businesses',
                  'Minimum order: 100 Momos (10 Plates)'
                ].map((item) => (
                  <li key={item} className="flex items-center text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://picsum.photos/seed/aboutmomo/800/600" 
                alt="About Momoshala" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-600 text-white p-8 rounded-2xl shadow-xl hidden md:block">
                <p className="text-4xl font-bold">100%</p>
                <p className="text-sm uppercase tracking-wider">Fresh & Handmade</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Compare our wholesale prices with market rates and see how much profit you can make.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold">Cart Owners</h3>
                  <TrendingUp className="text-red-500" />
                </div>
                <p className="text-sm text-gray-500 mb-4">Market Selling Price</p>
                <p className="text-3xl font-bold text-gray-900 mb-6">₹80 <span className="text-sm font-normal text-gray-500">/ 10 Momos</span></p>
                <Separator className="my-6" />
                <p className="text-sm text-gray-600 italic">"High overheads if you make them yourself."</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-500 shadow-2xl overflow-hidden relative scale-105 z-10 bg-white">
              <div className="bg-orange-500 text-white text-center py-2 text-xs font-bold uppercase tracking-widest">
                Our Wholesale Price
              </div>
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-orange-600">Momoshala</h3>
                  <ShoppingCart className="text-orange-500" />
                </div>
                <p className="text-sm text-gray-500 mb-4">Your Cost Price</p>
                <p className="text-4xl font-bold text-gray-900 mb-6">₹35-40 <span className="text-sm font-normal text-gray-500">/ 10 Momos</span></p>
                <Separator className="my-6" />
                <p className="text-sm text-green-600 font-semibold">Save 50% on costs. Maximize your margins!</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold">Restaurants</h3>
                  <TrendingUp className="text-red-500" />
                </div>
                <p className="text-sm text-gray-500 mb-4">Market Selling Price</p>
                <p className="text-3xl font-bold text-gray-900 mb-6">₹120-300 <span className="text-sm font-normal text-gray-500">/ Plate</span></p>
                <Separator className="my-6" />
                <p className="text-sm text-gray-600 italic">"Premium pricing for the same quality we provide."</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Options */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4">Our Popular Options</h2>
              <p className="text-gray-600">Freshly steamed or ready to fry.</p>
            </div>
            <Button asChild variant="ghost" className="text-orange-600 hover:text-orange-700">
              <Link to="/services">View All <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {momoTypes.map((momo, index) => (
              <motion.div
                key={momo.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3]">
                  <img 
                    src={momo.image} 
                    alt={momo.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-gray-900 backdrop-blur-sm border-none px-3 py-1">
                      {momo.price}
                    </Badge>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{momo.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{momo.description}</p>
                <Button asChild variant="outline" className="w-full rounded-full border-orange-200 text-orange-600 hover:bg-orange-50">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    Buy Now
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to grow your business?</h2>
          <p className="text-orange-100 text-xl mb-10 max-w-2xl mx-auto">
            Join dozens of successful food business owners in Dharamshala who trust Momoshala for their daily supply.
          </p>
          <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-orange-50 rounded-full px-12 h-16 text-xl font-bold">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Contact Abhishek Thapa
            </a>
          </Button>
          <p className="mt-6 text-orange-200 text-sm">
            Minimum Order: 10 Plates (100 Momos)
          </p>
        </div>
      </section>
    </div>
  );
}

function Separator({ className }: { className?: string }) {
  return <div className={`h-px bg-gray-200 ${className}`} />;
}
