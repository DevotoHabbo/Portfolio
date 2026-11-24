import Section from './Section.jsx';

export default function Languages({ items }) {
  return (
    <Section title="Languages">
      <ul className="skills">
        {items.map((l) => (
          <li key={l.name} className="skill">
            <span>{l.name}</span>
            <span className="years">{l.level}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
