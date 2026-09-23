const accents = ["#f5c242", "#147d8a", "#ffe08a", "#c2660b"];
const rotations = ["-2deg", "1.5deg", "-1deg", "2deg"];

export function TiltTag({ children, index = 0 }: { children: React.ReactNode; index?: number }) {
  const accent = accents[index % accents.length];
  return (
    <span
      style={{
        backgroundColor: `${accent}26`,
        borderColor: `${accent}55`,
        transform: `rotate(${rotations[index % rotations.length]})`,
      }}
      className="inline-flex items-center rounded-md border px-3 py-1.5 text-[12.5px] font-semibold text-foreground shadow-[0_2px_6px_-2px_rgba(22,33,62,0.15)] transition-transform hover:rotate-0"
    >
      {children}
    </span>
  );
}
