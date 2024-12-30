import { useState } from 'react';
import { Users } from 'lucide-react';

const positions = [
  {
    title: 'Security Officer',
    description: 'Join our front-line team providing exceptional security services.',
    requirements: ['SIA License', 'Excellent communication skills', 'Flexible schedule'],
  },
  {
    title: 'Event Security Lead',
    description: 'Lead and coordinate security teams at high-profile events.',
    requirements: ['3+ years experience', 'Leadership skills', 'Event security background'],
  },
];

export default function Team() {
  const [activePosition, setActivePosition] = useState<number | null>(null);

  return (
    <section id="team" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Users className="w-12 h-12 text-[#FFD700] mx-auto mb-4" />
          <h2 className="text-4xl font-display font-bold text-white mb-4">Join Our Team</h2>
          <p className="text-xl text-gray-300">A team committed to excellence and professionalism</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {positions.map((position, index) => (
            <div
              key={position.title}
              className="bg-zinc-900 rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={() => setActivePosition(activePosition === index ? null : index)}
            >
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold text-white mb-2">{position.title}</h3>
                <p className="text-gray-400 mb-4">{position.description}</p>
                
                <div className={`space-y-2 transition-all duration-300 ${
                  activePosition === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <h4 className="text-[#FFD700] font-semibold">Requirements:</h4>
                  <ul className="list-disc list-inside text-gray-300">
                    {position.requirements.map((req) => (
                      <li key={req}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 border border-[#FFD700] text-base font-medium rounded-md text-[#FFD700] hover:bg-[#FFD700] hover:text-black hover:scale-105 transform transition-all duration-300"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
}