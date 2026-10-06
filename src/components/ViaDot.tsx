interface ViaDotProps {
  filled?: boolean;
}

export function ViaDot({ filled = false }: ViaDotProps) {
  return (
    <span
      className={`inline-block w-2.5 h-2.5 rounded-full shrink-0 ${
        filled ? "bg-accent" : "bg-transparent border-2 border-border"
      }`}
    />
  );
}
