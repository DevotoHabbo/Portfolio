import { useState } from 'react';
import Section from './Section.jsx';

export default function Contact({ email, name }) {
  const [form, setForm] = useState({ from: '', subject: '', message: '' });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const subject = form.subject || `Opportunity for ${name}`;
    const body = `${form.message}\n\n— ${form.from}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Section id="contact" title="Contact">
      <p className="hint">Hiring or have a question? Send me a message — it opens in your email app.</p>
      <form className="contact-form no-print" onSubmit={submit}>
        <label>
          Your name
          <input required value={form.from} onChange={set('from')} autoComplete="name" />
        </label>
        <label>
          Subject
          <input value={form.subject} onChange={set('subject')} placeholder={`Opportunity for ${name}`} />
        </label>
        <label className="full">
          Message
          <textarea required rows={4} value={form.message} onChange={set('message')} />
        </label>
        <button className="btn btn-primary" type="submit">Send email</button>
      </form>
    </Section>
  );
}
