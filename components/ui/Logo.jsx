export default function Logo({ className = "" }) {
  const letters = [
    { char: 'A', color: 'bg-blue-600' },
    { char: 'G', color: 'bg-indigo-600' },
    { char: 'A', color: 'bg-purple-600' },
    { char: 'L', color: 'bg-pink-600' },
  ];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex gap-1.5">
        {letters.map((item, index) => (
          <div 
            key={index}
            className={`flex items-center justify-center w-8 h-8 rounded-lg ${item.color} text-white font-bold text-lg shadow-sm transform hover:-translate-y-1 transition-transform duration-200`}
          >
            {item.char}
          </div>
        ))}
      </div>
      <span className="text-2xl font-bold tracking-tighter text-zinc-900 hidden sm:block">
        APPS
      </span>
    </div>
  );
}
