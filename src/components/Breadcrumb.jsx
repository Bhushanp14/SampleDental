export default function Breadcrumb({ title }) {
  return (
    <div className="bg-[#1E3A8A] py-20 px-4 md:px-8 text-center relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#3B82F6] rounded-bl-full opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-tr-full pointer-events-none"></div>

      <h1 className="text-4xl md:text-6xl font-extrabold text-white font-nunito tracking-tight mb-6 relative z-10">{title}</h1>

    </div>
  );
}
