import { useEffect, useState } from 'react';

export default function Vector() {
  const [direction, setDirection] = useState({ x: 100, y: 200, z: 300, w: 400 });

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection({ x: Math.random() * 500, y: Math.random() * 500, z: Math.random() * 500, w: Math.random() * 500 });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
      <svg width="500" height="500" className="bg-white rounded shadow">
        <text x="0" y="0" style={{ fontFamily: 'Verdana', fontSize: 24 }}>
          퇴근하고 싶다.
          <animateMotion
            path={`M ${direction.x} -10 L ${direction.x < 250 ? 600 : -100} 600`}
            dur={`${Math.random() * 5000 + direction.x}ms`}
            fill="freeze"
            repeatCount="indefinite"
          />
        </text>
        <text x="0" y="0" style={{ fontFamily: 'Verdana', fontSize: 24 }}>
          현재 시간 : {new Date().toLocaleTimeString()}
          <animateMotion
            path={`M ${direction.y} -10 L ${direction.y < 250 ? 600 : -100} 600`}
            dur={`${Math.random() * 5000 + direction.y}ms`}
            fill="freeze"
            repeatCount="indefinite"
          />
        </text>
        <text x="0" y="0" style={{ fontFamily: 'Verdana', fontSize: 24 }}>
          코딩 잘하고싶다.
          <animateMotion
            path={`M ${direction.z} -10 L ${direction.z < 250 ? 600 : -100} 600`}
            dur={`${Math.random() * 4000 + direction.z}ms`}
            fill="freeze"
            repeatCount="indefinite"
          />
        </text>
        <text x="0" y="0" style={{ fontFamily: 'Verdana', fontSize: 24 }}>
          오늘 저녁 뭐 먹지...
          <animateMotion
            path={`M ${direction.w} -10 L ${direction.w < 250 ? 600 : -100} 600`}
            dur={`${Math.random() * 5000 + direction.w}ms`}
            fill="freeze"
            repeatCount="indefinite"
          />
        </text>
        Sorry, your browser does not support inline SVG.
      </svg>
    </>
  );
}
