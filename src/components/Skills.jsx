import Section from './Section.jsx';

export default function Skills({ items }) {
  return (
    <Section title="Skills">
      <ul className="skills">
        {items.map((s) => (
          <li key={s.name} className="skill">
            <span>{s.name}</span>
            {s.years != null && (
              <span className="years">{s.years} {s.years === 1 ? 'year' : 'years'}</span>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
