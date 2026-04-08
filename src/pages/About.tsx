import { motion } from 'motion/react';
import { Badge } from '@/components/ui/badge';
import { History, Users, Target, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge className="mb-4 bg-brand-orange/10 text-brand-orange border-brand-orange/20 px-4 py-1">
              Our Story
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-brand-brown">The Heart of Dharamshala's <br />Momo Culture</h1>
            <p className="text-brand-brown/70 max-w-3xl mx-auto text-lg">
              Momoshala isn't just a business; it's a passion project by Abhishek Thapa to bring the most authentic and high-quality momos to every corner of our beautiful town.
            </p>
          </motion.div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <motion.img 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            src="/images/kitchen.png" 
            alt="Our Kitchen" 
            className="rounded-3xl shadow-xl aspect-[4/3] object-cover"
            referrerPolicy="no-referrer"
          />
          <motion.img 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            src="/images/preparation.jpg" 
            alt="Momo Preparation" 
            className="rounded-3xl shadow-xl aspect-[4/3] object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div className="text-center">
            <div className="w-16 h-16 bg-brand-orange/10 text-brand-orange rounded-2xl flex items-center justify-center mx-auto mb-6">
              <History className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-xl mb-2 text-brand-brown">Established 2024</h3>
            <p className="text-brand-brown/60 text-sm">Started with a small kitchen and a big dream in Yol Cant.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-brand-orange/10 text-brand-orange rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-xl mb-2 text-brand-brown">Community First</h3>
            <p className="text-brand-brown/60 text-sm">Supporting local cart owners and small food businesses.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-brand-orange/10 text-brand-orange rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-xl mb-2 text-brand-brown">Quality Focus</h3>
            <p className="text-brand-brown/60 text-sm">Every single momo is checked for quality and taste.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-brand-orange/10 text-brand-orange rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-xl mb-2 text-brand-brown">Handmade Love</h3>
            <p className="text-brand-brown/60 text-sm">No machines, just skilled hands making every fold.</p>
          </div>
        </div>

        {/* Founder Section */}
        <div className="bg-brand-orange/5 rounded-3xl p-12 md:p-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-brand-brown">A Message from Abhishek</h2>
              <p className="text-brand-brown/80 text-lg leading-relaxed italic mb-6">
                "I saw many talented food cart owners struggling with the time-consuming process of making momos daily. I wanted to take that burden off their shoulders so they could focus on selling and growing. At Momoshala, we treat every order as if it's for our own family."
              </p>
              <p className="font-bold text-brand-brown">— Abhishek Thapa, Founder</p>
            </div>
            <div className="relative">
              <img 
                src="/images/momoshala-founder.jpeg" 
                alt="Abhishek Thapa" 
                className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover mx-auto border-8 border-white shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
