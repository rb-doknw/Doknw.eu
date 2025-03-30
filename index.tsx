import { motion } from "framer-motion";

const agents = [
  { name: "Kalp", role: "Core AI Brain", color: "from-indigo-500 to-purple-500" },
  { name: "Mohomaya", role: "Quant Finance AI", color: "from-pink-500 to-red-500" },
  { name: "Vishva", role: "CAD + Infrastructure AI", color: "from-green-500 to-emerald-500" },
  { name: "Vimana", role: "Aerospace Design AI", color: "from-yellow-500 to-orange-500" },
  { name: "Rsayan", role: "Chemistry & Materials AI", color: "from-blue-400 to-cyan-500" },
  { name: "Visthar", role: "Circuits & Mech Engg AI", color: "from-rose-500 to-fuchsia-500" },
  { name: "Bramhi", role: "AI Video & Visual Agent", color: "from-purple-500 to-pink-500" },
  { name: "SUP", role: "Execution Tracker AI", color: "from-teal-500 to-lime-500" },
  { name: "Omnis", role: "Swarm Intelligence AI", color: "from-gray-500 to-slate-600" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white">
      <header className="flex flex-wrap items-center justify-between px-6 py-4 border-b border-gray-800">
        <h1 className="text-2xl font-bold tracking-tight">Doknw</h1>
        <nav className="space-x-4 text-sm mt-2 sm:mt-0">
          <a href="#how" className="hover:text-blue-400">How It Works</a>
          <a href="#agents" className="hover:text-blue-400">AI Agents</a>
          <a href="#features" className="hover:text-blue-400">Features</a>
          <a href="#contact" className="hover:text-blue-400">Join</a>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center text-center px-4 py-32">
        <motion.h2 
          initial={{ opacity: 0, y: -40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent"
        >
          Welcome to Doknw
        </motion.h2>
        <p className="mt-4 max-w-xl text-gray-300">
          Conscious Blockchain. Quantum AI. Future-Ready Ecosystem.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="#how" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl shadow-md">Explore Blockchain</a>
          <a href="#features" className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-xl shadow-md">AI SEO + SMO</a>
        </div>
      </main>
    </div>
  );
}
