import Section from './Section.jsx';

export default function Education({ items }) {
  return (
    <Section id="education" title="Education">
      {items.map((ed, i) => (
        <div key={i} className="entry">
          <h3>{ed.degree}</h3>
          <p className="sub">
            {ed.school}
            {ed.location && <> · {ed.location}</>}
          </p>
          <p className="dates">{ed.start ? `${ed.start} – ${ed.end}` : ed.end}</p>
          {ed.bullets?.length > 0 && (
            <ul className="bullets">
              {ed.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
          )}
        </div>
      ))}
    </Section>
  );
}
