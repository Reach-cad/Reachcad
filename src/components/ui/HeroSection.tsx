
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  bgImage?: string;
  className?: string;
}

const HeroSection = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  bgImage,
  className,
}: HeroSectionProps) => {
  return (
    <div
      className={cn(
        "relative bg-gradient-to-r from-fashion-dark to-fashion-dark/80 text-white py-20 md:py-32",
        className
      )}
      style={
        bgImage
          ? {
              backgroundImage: `linear-gradient(to right, rgba(30, 41, 59, 0.2), rgba(30, 41, 59, 0.2)), url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mt-12">
          <div className="bg-white/60 backdrop-blur-sm p-5 mb-6 inline-block border-l-4 border-fashion-rtred">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              <span className="text-fashion-rtblack">Welcome to </span>
              <span className="text-fashion-rtred">REACH</span>
              <br />
              <span className="text-fashion-rtblack">Fashion Studio!</span>
            </h1>
          </div>
          <p className="text-sm md:text-base mb-8 text-white font-semibold">{subtitle}</p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-fashion-primary hover:bg-fashion-primary/90 rounded-full py-6 px-8 text-lg" asChild>
              <a href={ctaLink}>{ctaText}</a>
            </Button>
            {secondaryCtaText && secondaryCtaLink && (
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white/10" 
                asChild
              >
                <a href={secondaryCtaLink}>{secondaryCtaText}</a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
