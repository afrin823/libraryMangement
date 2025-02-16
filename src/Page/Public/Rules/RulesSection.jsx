const indexStyle = "flex-shrink-0 w-8 h-8 bg-secondary text-natural rounded-full flex items-center justify-center text-sm font-bold";

const RulesSection = ({ title, rules }) => (
  <div className="bg-natural p-6 transition-transform duration-300 ease-in-out transform hover:scale-105">
    <h6 className="font-bold text-black mb-6">{title}</h6>
    <div className="space-y-4">
      {Array.isArray(rules) &&
        rules.map((rule, index) => (
          <div key={index} className="flex items-start space-x-4">
            <span className={indexStyle}>{index + 1}</span>
            <p className="text-lg text-justify leading-relaxed">{rule}</p>
          </div>
        ))}
    </div>
  </div>
);

export default RulesSection;
