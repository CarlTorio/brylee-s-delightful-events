interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

const SectionHeader = ({ title, subtitle, light = false }: SectionHeaderProps) => {
  return (
    <div className="text-center mb-12">
      <div className="section-accent-line" />
      <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 ${light ? "text-white" : "text-foreground"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base sm:text-lg max-w-2xl mx-auto ${light ? "text-white/80" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
