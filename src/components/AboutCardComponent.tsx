import type { AboutData } from "../data/aboutData";

const AboutCardComponent = ({ title, desc, icon }: AboutData) => {
  return (
    <div
      className="flex items-center gap-5 p-4 rounded-xl
     hover:bg-brand-light/40 hover:scale-105 transition-all duration-300"
    >
      <div
        className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 shrink-0
       bg-brand-light rounded-2xl"
      >
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold text-brand-navy mb-2">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
};

export default AboutCardComponent;
