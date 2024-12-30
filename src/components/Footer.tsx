import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <Shield className="h-10 w-10 text-[#FFD700] mb-4" />
          <p className="text-gray-400 text-sm mb-2">Where Vigilance Meets Brilliance</p>
          <p className="text-gray-500 text-sm mb-4">Company No.: 13428156</p>
          <p className="text-gray-600 text-sm">© 2024 Kairo Security. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}