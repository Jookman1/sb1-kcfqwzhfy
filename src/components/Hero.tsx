export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80"
          alt="Security background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70" />
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="hero-title text-4xl sm:text-6xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight">
          Welcome to Kairo Security
        </h1>
        <p className="hero-subtitle text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-display">
          Where Vigilance Meets Brilliance
        </p>
        <p className="hero-subtitle text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          Customized security solutions tailored to your needs
        </p>
        <a
          href="#contact"
          className="hero-cta inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-[#FFD700] hover:bg-[#F0C800] hover:scale-105 transform transition-all duration-300"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}