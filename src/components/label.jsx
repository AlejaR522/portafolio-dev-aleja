function SectionLabel({ n, label }) {
  return (
    <div className="mb-10 flex items-baseline gap-4 border-b border-border pb-4">
      <span className="font-mono-tag text-accent">{n}</span>
      <span className="font-mono-tag text-muted-foreground">{label}</span>
    </div>
  );
}
export default SectionLabel;