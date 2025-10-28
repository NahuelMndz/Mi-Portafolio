import "./AnimatedBackground.css";

export default function AnimatedBackground() {
  return (
    <div className="area">
      <ul className="circles">
        {Array.from({ length: 12 }).map((_, i) => (
          <li key={i}></li>
        ))}
      </ul>
    </div>
  );
}
