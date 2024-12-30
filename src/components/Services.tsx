import { Shield, Users, Building2, FileSearch } from 'lucide-react';

const services = [
  {
    title: 'Festival and Event Security',
    description: 'Comprehensive security solutions for events of any scale',
    icon: Users,
  },
  {
    title: 'Nightclub and Venue Security',
    description: 'Professional security services for entertainment venues',
    icon: Building2,
  },
  {
    title: 'Tailored Security Solutions',
    description: 'Custom security plans designed for your specific needs',
    icon: Shield,
  },
  {
    title: 'Security Planning and Logistics',
    description: 'Expert consultation and strategic security planning',
    icon: FileSearch,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-display font-bold text-white mb-16">What We Offer</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.title} className="service-card bg-zinc-900 p-6 rounded-lg">
              <service.icon className="h-12 w-12 text-[#FFD700] mb-4" />
              <h3 className="text-xl font-display font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 border border-[#FFD700] text-base font-medium rounded-md text-[#FFD700] hover:bg-[#FFD700] hover:text-black hover:scale-105 transform transition-all duration-300"
          >
            Explore Our Services
          </a>
        </div>
      </div>
    </section>
  );
}