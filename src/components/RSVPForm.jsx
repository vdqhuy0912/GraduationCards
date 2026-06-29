import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

export default function RSVPForm() {
  const [form, setForm] = useState({
    name: '',
    relationship: 'friend',
    status: 'yes',
    guests: '1',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    
    // Simulate RSVP submission
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="success-message">
        <CheckCircle size={48} className="success-icon" style={{ display: 'block', margin: '0 auto 15px' }} />
        <h4>Xác Nhận Thành Công!</h4>
        <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', marginBottom: '10px' }}>
          Cảm ơn bạn đã phản hồi thiệp mời.
        </p>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          {form.status === 'yes' 
            ? 'Rất mong được đón tiếp bạn tại buổi lễ!' 
            : 'Huy rất tiếc vì bạn không thể tham dự, hẹn gặp bạn vào dịp khác nhé!'}
        </p>
        <button 
          className="btn-gold" 
          style={{ marginTop: '20px', padding: '8px 20px', fontSize: '0.8rem' }}
          onClick={() => {
            setSubmitted(false);
            setForm({ name: '', relationship: 'friend', status: 'yes', guests: '1', message: '' });
          }}
        >
          Gửi phản hồi khác
        </button>
      </div>
    );
  }

  return (
    <form className="rsvp-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="rsvp-name">Họ & Tên của bạn *</label>
        <input 
          type="text" 
          id="rsvp-name" 
          className="form-control" 
          placeholder="Nhập họ và tên..." 
          required 
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </div>

      <div className="form-group">
        <label>Mối quan hệ</label>
        <div className="radio-group">
          <label className="radio-label">
            <input 
              type="radio" 
              name="relationship" 
              value="family"
              checked={form.relationship === 'family'}
              onChange={(e) => setForm({ ...form, relationship: e.target.value })}
            />
            Gia đình
          </label>
          <label className="radio-label">
            <input 
              type="radio" 
              name="relationship" 
              value="friend"
              checked={form.relationship === 'friend'}
              onChange={(e) => setForm({ ...form, relationship: e.target.value })}
            />
            Bạn bè
          </label>
          <label className="radio-label">
            <input 
              type="radio" 
              name="relationship" 
              value="teacher"
              checked={form.relationship === 'teacher'}
              onChange={(e) => setForm({ ...form, relationship: e.target.value })}
            />
            Thầy cô
          </label>
        </div>
      </div>

      <div className="form-group">
        <label>Bạn sẽ tham dự chứ?</label>
        <div className="radio-group">
          <label className="radio-label">
            <input 
              type="radio" 
              name="status" 
              value="yes"
              checked={form.status === 'yes'}
              onChange={(e) => setForm({ ...form, status: e.target.value })}
            />
            Chắc chắn tham dự
          </label>
          <label className="radio-label">
            <input 
              type="radio" 
              name="status" 
              value="no"
              checked={form.status === 'no'}
              onChange={(e) => setForm({ ...form, status: e.target.value })}
            />
            Rất tiếc không thể đến
          </label>
        </div>
      </div>

      {form.status === 'yes' && (
        <div className="form-group">
          <label htmlFor="rsvp-guests">Số lượng người tham dự</label>
          <select 
            id="rsvp-guests" 
            className="form-control"
            value={form.guests}
            onChange={(e) => setForm({ ...form, guests: e.target.value })}
          >
            <option value="1">1 người</option>
            <option value="2">2 người</option>
            <option value="3">3 người</option>
            <option value="4">4 người hoặc nhiều hơn</option>
          </select>
        </div>
      )}

      <div className="form-group">
        <label htmlFor="rsvp-message">Lời chúc gửi tới Huy</label>
        <textarea 
          id="rsvp-message" 
          className="form-control" 
          rows="3" 
          placeholder="Nhập lời chúc hoặc lời nhắn của bạn gửi tới cử nhân..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        ></textarea>
      </div>

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <button type="submit" className="btn-gold">Gửi Phản Hồi RSVP</button>
      </div>
    </form>
  );
}
