import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to a backend
    const whatsappMsg = `Hi Abhishek, I'm ${formData.name}. I have a ${formData.businessType} and I'm interested in bulk momos. Message: ${formData.message}`;
    window.open(`https://wa.me/916280167160?text=${encodeURIComponent(whatsappMsg)}`, '_blank');
  };

  return (
    <div className="pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Get In Touch</h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Have questions about pricing or delivery? Send us an inquiry and we'll get back to you immediately.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold mb-8 text-brand-brown">Contact Information</h2>
            
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-brand-orange/10 text-brand-orange rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-brand-brown">Call or WhatsApp</h3>
                <p className="text-brand-brown/70">6280 167160</p>
                <p className="text-sm text-brand-brown/40">Available 9:00 AM - 8:00 PM</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-brand-orange/10 text-brand-orange rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-brand-brown">Email Us</h3>
                <p className="text-brand-brown/70">hello@momoshala.com</p>
                <p className="text-sm text-brand-brown/40">We reply within 24 hours</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-brand-orange/10 text-brand-orange rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-brand-brown">Visit Us</h3>
                <p className="text-brand-brown/70">Yol Cant, Dharamshala, India</p>
                <p className="text-sm text-brand-brown/40">Himachal Pradesh - 176052</p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="rounded-3xl overflow-hidden h-64 bg-brand-brown/5 relative">
              <img 
                src="https://picsum.photos/seed/dharamshala-map/800/400" 
                alt="Map Location" 
                className="w-full h-full object-cover opacity-20"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white px-6 py-3 rounded-full shadow-lg flex items-center">
                  <MapPin className="text-brand-orange mr-2" />
                  <span className="font-bold text-brand-brown">Yol Cant, Dharamshala</span>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <Card className="border-none shadow-2xl rounded-3xl overflow-hidden bg-white">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl font-bold mb-8 flex items-center text-brand-brown">
                <MessageSquare className="mr-3 text-brand-orange" />
                Send an Inquiry
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-brand-brown/70">Full Name</label>
                    <Input 
                      required
                      placeholder="Abhishek Thapa" 
                      className="rounded-xl border-brand-brown/10 focus:border-brand-orange focus:ring-brand-orange"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-brand-brown/70">Phone Number</label>
                    <Input 
                      required
                      placeholder="6280 167160" 
                      className="rounded-xl border-brand-brown/10 focus:border-brand-orange focus:ring-brand-orange"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-brand-brown/70">Business Type</label>
                  <Input 
                    placeholder="e.g. Food Cart, Restaurant, Cafe" 
                    className="rounded-xl border-brand-brown/10 focus:border-brand-orange focus:ring-brand-orange"
                    value={formData.businessType}
                    onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-brand-brown/70">Message</label>
                  <Textarea 
                    required
                    placeholder="Tell us about your requirements..." 
                    className="rounded-xl border-brand-brown/10 focus:border-brand-orange focus:ring-brand-orange min-h-[150px]"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                <Button type="submit" className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white rounded-xl h-14 text-lg font-bold">
                  Send Message via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
