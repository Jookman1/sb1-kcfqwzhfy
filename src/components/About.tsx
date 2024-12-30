import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-500 ${isExpanded ? 'translate-x-0' : 'translate-x-[-100%]'}`}>
          <h2 className="text-4xl font-display font-bold text-white mb-8">Leadership at Kairo Security</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-300 mb-8">
              With over a decade of experience, Kairo Security delivers superior security services 
              tailored precisely to client needs. Trust us for professionalism, reliability, and excellence.
            </p>
          </div>
        </div>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="group flex items-center space-x-2 text-[#FFD700] hover:text-[#F0C800]"
        >
          <span>{isExpanded ? 'Show Less' : 'Learn More About Us'}</span>
          <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'group-hover:translate-x-1'}`} />
        </button>
      </div>
    </section>
  );
}