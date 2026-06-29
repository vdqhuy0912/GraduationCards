import React from 'react';
import { Camera, Users, Award, GraduationCap } from 'lucide-react';

const events = [
  {
    time: '07:30 – 09:30',
    title: 'Đón Tiếp Khách & Chụp Ảnh Lưu Niệm',
    desc: 'Đón tiếp quý khách tại sảnh hội trường. Chụp ảnh kỷ niệm cùng cử nhân tại khu vực check-in được trang trí trang trọng.',
    icon: Camera,
  },
  {
    time: '09:45 – 10:00',
    title: 'Ổn Định & Khai Mạc Buổi Lễ',
    desc: 'Mời quý khách vào hội trường an tọa. Mở đầu chương trình lễ tốt nghiệp chính thức với các nghi thức trọng thể.',
    icon: Users,
  },
  {
    time: '10:00 – 11:45',
    title: 'Lễ Trao Bằng Tốt Nghiệp',
    desc: 'Khoảnh khắc vinh danh đặc biệt nhất – các cử nhân tiến lên bục lễ đường để nhận bằng tốt nghiệp từ Ban Giám hiệu.',
    icon: Award,
  },
  {
    time: 'Sau Lễ',
    title: 'Chụp Ảnh Tập Thể & Tung Mũ',
    desc: 'Tung mũ cử nhân tạo nên khoảnh khắc kỷ niệm đáng nhớ. Chụp ảnh lưu niệm cùng gia đình, bạn bè và thầy cô.',
    icon: GraduationCap,
  },
];

export default function Timeline() {
  return (
    <div className="timeline">
      {events.map((ev, i) => {
        const Icon = ev.icon;
        return (
          <div className="tl-item" key={i}>
            <div className="tl-dot">
              <Icon size={20} strokeWidth={1.5} />
            </div>
            <div className="tl-content">
              <span className="tl-time">{ev.time}</span>
              <h4 className="tl-title">{ev.title}</h4>
              <p className="tl-desc">{ev.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
