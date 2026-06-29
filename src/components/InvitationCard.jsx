import React, { useState, useEffect, useMemo } from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import Timeline from './Timeline';

/** Read ?guest=... from URL, decode and prettify */
function getGuestName() {
  try {
    const raw = new URLSearchParams(window.location.search).get('guest');
    if (!raw) return null;
    const name = decodeURIComponent(raw).trim();
    return name || null;
  } catch {
    return null;
  }
}

const SPARKLES = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  left: `${5 + Math.random() * 90}%`,
  top: `${5 + Math.random() * 90}%`,
  dur: `${2 + Math.random() * 3}s`,
  delay: `${Math.random() * 4}s`,
}));

function pad(n) {
  return String(n).padStart(2, '0');
}

export default function InvitationCard({ isOpened }) {
  const guestName = useMemo(getGuestName, []);
  const target = useMemo(() => new Date('2026-07-05T07:30:00+07:00').getTime(), []);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = target - Date.now();
      if (diff <= 0) return setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      setTimeLeft({
        days:    Math.floor(diff / 86400000),
        hours:   Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  return (
    <div className={`card-reveal${isOpened ? ' visible' : ''}`}>
      <div className="card-shell">
        {/* Corner accents */}
        <div className="corner corner-tl" />
        <div className="corner corner-tr" />
        <div className="corner corner-bl" />
        <div className="corner corner-br" />

        {/* Dot texture */}
        <div className="card-texture" />

        {/* Floating sparkles */}
        <div className="sparkle-field" aria-hidden="true">
          {SPARKLES.map(s => (
            <div
              key={s.id}
              className="sp"
              style={{ left: s.left, top: s.top, '--dur': s.dur, '--delay': s.delay, animationDelay: s.delay }}
            />
          ))}
        </div>

        <div className="card-content">
          {/* ── TOP SECTION ── */}
          <p className="eyebrow">Đại Học Quốc Gia Hà Nội</p>

          <div className="divider-ornament">✦ ✦ ✦</div>

          <p className="invite-headline">Trân Trọng Kính Mời</p>

          {/* Guest name – dynamic via ?guest=Name */}
          <div className="guest-box">
            {guestName ? guestName : 'Quý vị và gia đình'}
          </div>

          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
            color: 'var(--text-muted)',
            lineHeight: 1.9,
            margin: '0.5rem 0 1.5rem',
          }}>
            tham dự lễ tốt nghiệp của cử nhân
          </p>

          <h1 className="invite-name">Vũ Đình Quang Huy</h1>

          <span className="grad-cap-icon">🎓</span>

          {/* Elegant italic quote */}
          <p className="invite-formal">
            <em>
              "Mỗi thành tựu đều bắt đầu bằng quyết tâm làm điều đó.<br />
              Sự hiện diện của bạn là niềm vui và vinh dự lớn lao nhất."
            </em>
          </p>

          <div className="divider-ornament">⚜</div>

          {/* ── COUNTDOWN ── */}
          <div className="countdown-row">
            {[
              { val: timeLeft.days,    lbl: 'Ngày' },
              { val: timeLeft.hours,   lbl: 'Giờ'  },
              { val: timeLeft.minutes, lbl: 'Phút'  },
              { val: timeLeft.seconds, lbl: 'Giây'  },
            ].map(({ val, lbl }) => (
              <div className="cdown-box" key={lbl}>
                <span className="cdown-val">{pad(val)}</span>
                <span className="cdown-lbl">{lbl}</span>
              </div>
            ))}
          </div>

          {/* ── DETAILS BAND ── */}
          <div className="details-band">
            <div className="detail-col">
              <Calendar className="detail-icon" size={26} strokeWidth={1.5} />
              <span className="detail-label">Thời Gian</span>
              <span className="detail-primary">07:30 – 11:45</span>
              <span className="detail-secondary">
                Chủ Nhật<br />
                Ngày 05 / 07 / 2026
              </span>
            </div>
            <div className="detail-col">
              <MapPin className="detail-icon" size={26} strokeWidth={1.5} />
              <span className="detail-label">Địa Điểm</span>
              <span className="detail-primary">Hội trường Nguyễn Văn Đạo</span>
              <span className="detail-secondary">
                ĐHQG Hà Nội<br />
                144 Xuân Thuỷ, Cầu Giấy, Hà Nội
              </span>
            </div>
          </div>

          {/* Map button */}
          <div style={{ textAlign: 'center', margin: '2rem 0' }}>
            <a
              className="map-btn"
              href="https://maps.google.com/?q=144+Xuân+Thuỷ,+Cầu+Giấy,+Hà+Nội"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={14} />
              Xem Bản Đồ Chỉ Đường
            </a>
          </div>

          {/* ── TIMELINE ── */}
          <div className="section-title">Chương Trình Buổi Lễ</div>
          <Timeline />

          {/* ── CLOSING ── */}
          <div className="closing-section">
            <p className="closing-text">
              Sự hiện diện của quý vị chính là món quà ý nghĩa nhất.<br />
              Chân thành cảm ơn và trân trọng kính mời.
            </p>
            <span className="closing-signature">Vũ Đình Quang Huy</span>

            <div className="divider-ornament" style={{ marginTop: '1.5rem' }}>✦ ⚜ ✦</div>
          </div>
        </div>
      </div>
    </div>
  );
}
