import React from 'react';

export default function StarField() {
  const stars = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 1,
    dur: `${3 + Math.random() * 6}s`,
    delay: `${Math.random() * 6}s`,
    op: 0.3 + Math.random() * 0.5,
  }));

  return (
    <div className="stars-bg" aria-hidden="true">
      {stars.map(s => (
        <div
          key={s.id}
          className="star"
          style={{
            left: s.left,
            top: s.top,
            width: `${s.size}px`,
            height: `${s.size}px`,
            '--dur': s.dur,
            '--delay': s.delay,
            '--op': s.op,
            animationDelay: s.delay,
          }}
        />
      ))}
    </div>
  );
}
