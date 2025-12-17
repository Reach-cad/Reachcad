
import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
}

const FeatureCard = ({ title, description, icon, className }: FeatureCardProps) => {
  return (
    <Card className={cn(
      "transition-all duration-300 hover:shadow-lg group overflow-hidden border-2 border-transparent hover:border-fashion-secondary/40",
      className
    )}>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-fashion transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
      <CardHeader className="pb-2">
        {icon && (
          <div className="mb-3 text-fashion-secondary group-hover:text-fashion-primary transform group-hover:scale-110 transition-all duration-300">
            {icon}
          </div>
        )}
        <CardTitle className="text-xl group-hover:text-fashion-primary transition-colors duration-300">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
