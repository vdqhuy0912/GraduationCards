import React from 'react';

export default function Envelope({ isOpened, onOpen }) {
  return (
    <div className="scene">
      {!isOpened && (
        <p className="envelope-hint">✦ Nhấn vào dấu niêm phong để mở ✦</p>
      )}

      <div
        className={`envelope-wrap${isOpened ? ' opened' : ''}`}
        onClick={!isOpened ? onOpen : undefined}
        role={!isOpened ? 'button' : undefined}
        aria-label="Mở thiệp mời"
        tabIndex={!isOpened ? 0 : -1}
      >
        {/* SVG Envelope Body */}
        <svg className="env-body" viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Envelope back */}
          <rect width="480" height="300" rx="3" fill="#0f2643" />
          {/* Inner shadow lines */}
          <rect x="1" y="1" width="478" height="298" rx="2" stroke="#c9a84c" strokeOpacity="0.3" strokeWidth="1" />

          {/* Bottom-left flap */}
          <path d="M0 300 L240 160 L480 300 Z" fill="#0d1f3a" />
          {/* Bottom-right flap */}
          <path d="M0 0 L0 300 L240 160 Z" fill="#112034" />
          {/* Left flap */}
          <path d="M480 0 L480 300 L240 160 Z" fill="#112034" />

          {/* Top flap (will rotate on open) */}
          <path className="flap-top" d="M0 0 L240 145 L480 0 Z" fill="#0a192f" />

          {/* Gold border on top edge */}
          <path d="M0 0 L480 0" stroke="#c9a84c" strokeOpacity="0.5" strokeWidth="1" />
          <path d="M0 300 L480 300" stroke="#c9a84c" strokeOpacity="0.5" strokeWidth="1" />
          <path d="M0 0 L0 300" stroke="#c9a84c" strokeOpacity="0.5" strokeWidth="1" />
          <path d="M480 0 L480 300" stroke="#c9a84c" strokeOpacity="0.5" strokeWidth="1" />

          {/* Center fold line gold hint */}
          <path d="M0 0 L240 145 L480 0" stroke="#c9a84c" strokeOpacity="0.15" strokeWidth="1" />
          <path d="M0 300 L240 160" stroke="#c9a84c" strokeOpacity="0.15" strokeWidth="1" />
          <path d="M480 300 L240 160" stroke="#c9a84c" strokeOpacity="0.15" strokeWidth="1" />
        </svg>

        {/* Paper preview */}
        <div className="env-paper">
          <span className="env-paper-title">THIỆP MỜI</span>
          <span className="env-paper-sub">Trân trọng kính mời</span>
        </div>

        {/* Wax seal */}
        <div className="wax-seal" aria-hidden="true">
          <span style={{ fontSize: '1.4rem' }}>H</span>
        </div>
      </div>
    </div>
  );
}
