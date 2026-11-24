import Section from './Section.jsx';

export default function Skills({ items }) {
  return (
    <Section title="Skills">
      {items.map((group) => (
        <div key={group.category} className="skill-group">
          <h3>{group.category}</h3>
          <div className="chips">
            {group.items.map((s) => (
              <span key={s} className="chip">{s}</span>
            ))}
          </div>
        </div>
      ))}
    </Section>
  );
}
