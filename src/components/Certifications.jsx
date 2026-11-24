import Section from './Section.jsx';

export default function Certifications({ items }) {
  return (
    <Section title="Certifications & Licenses">
      {items.map((c, i) => (
        <div key={i} className="entry">
          <h3>{c.name}</h3>
          <p className="sub">{c.issuer}{c.date && <> · {c.date}</>}</p>
        </div>
      ))}
    </Section>
  );
}
