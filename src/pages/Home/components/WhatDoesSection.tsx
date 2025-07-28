export const WhatDoesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          What does REACH CAD do?
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Carrying out Apparel Pattern Engineering, Grading and Marker Planning manually is a 
            notoriously inefficient and cumbersome process. REACH CAD effects significant time 
            and labor savings by automating this process.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            REACH CAD streamlines and improves efficiency of the fashion product development 
            team by safeguarding against people turnover, eliminating manual errors, building a 
            knowledge base that can be used to create and re-create garment patterns and garment 
            markers and by enabling collaborative team working. Manual patterns of garments get 
            worn-out and torn and cannot be re-used to create even slightly different fashion styles.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            REACH CAD uses apparel specific intuitive and user-friendly tools to engineer garment 
            patterns, grade the base garment pattern to various other sizes and to tightly pack these 
            garment patterns to form the most efficient garment markers. Figuring out optimal 
            layout of clothing patterns to form tight clothing markers needs the application of spatial 
            visualization skills: this is best done on a computer monitor and not by going back and 
            forth on a table.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatDoesSection;