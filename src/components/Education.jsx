import Section from './Section.jsx';

export default function Education({ items }) {
  return (
    <Section title="Education">
      {items.map((ed, i) => (
        <div key={i} className="entry">
          <h3>{ed.degree}</h3>
          <p className="sub">
            {ed.school}
            {ed.location && <> · {ed.location}</>}
          </p>
          <p className="dates">{ed.start} – {ed.end}</p>
        </div>
      ))}
    </Section>
  );
}
