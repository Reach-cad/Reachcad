import { Clock, Users, TrendingUp, Star } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Speed Up Product Development",
      description: "Shorten design cycles with AI-powered tools that automate repetitive tasks and streamline workflows."
    },
    {
      icon: Users,
      title: "Enhance Collaboration",
      description: "Work seamlessly across departments to ensure cohesive results and reduce miscommunication in the design process."
    },
    {
      icon: TrendingUp,
      title: "Boost Productivity",
      description: "Create detailed technical flats, fabric designs, and color palettes effortlessly with specialized tools."
    },
    {
      icon: Star,
      title: "Stay Ahead of Trends",
      description: "Adapt quickly to changing consumer preferences with advanced customization options and design flexibility."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
          Benefits of REACH CAD
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          REACH CAD isn't just another design tool; it's a game-changer for the fashion industry.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;