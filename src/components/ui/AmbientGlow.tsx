export default function AmbientGlow({ variant = "light" }: { variant?: "light" | "dark" }) {
  const tone = variant === "dark" ? "rgba(171,138,87,0.16)" : "rgba(171,138,87,0.22)";
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute -left-[10%] top-[-15%] h-[55vw] w-[55vw] max-w-[700px] max-h-[700px] animate-[drift-a_22s_ease-in-out_infinite] rounded-full blur-[110px]"
        style={{ background: tone }}
      />
      <div
        className="absolute -right-[15%] bottom-[-20%] h-[45vw] w-[45vw] max-w-[600px] max-h-[600px] animate-[drift-b_26s_ease-in-out_infinite] rounded-full blur-[110px]"
        style={{ background: tone }}
      />
      <style>{`
        @keyframes drift-a {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(4%, 6%) scale(1.08); }
        }
        @keyframes drift-b {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-5%, -4%) scale(1.1); }
        }
      `}</style>
    </div>
  );
}
