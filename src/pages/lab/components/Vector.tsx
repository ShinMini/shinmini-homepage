export default function Vector() {
  return (
    <>
      <h1 className="text-lg">This is D3 Component</h1>
      <svg>
        <path
          d="M 10 75 Q 50 10 100 75 T 190 75"
          stroke="black"
          stroke-linecap="round"
          stroke-dasharray="5,10,5"
          fill="none"
        />
        <path
          d="M 10 75 L 190 75"
          stroke="red"
          stroke-linecap="round"
          stroke-width="1"
          stroke-dasharray="5,5"
          fill="none"
        />
        <line x1="0" x2="120" y1="10" y2="20" stroke="blue" strokeWidth={10} stroke-strokeLinecap="butt" />
        <line x1="40" x2="160" y1="40" y2="90" stroke="green" strokeWidth={10} stroke-strokeLinecap="square" />
        <line x1="120" x2="130" y1="30" y2="10" stroke="red" strokeWidth={10} stroke-strokeLinecap="round" />
      </svg>
    </>
  );
}
