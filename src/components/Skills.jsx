import Section from './Section.jsx';

export default function Skills({ items, experience, skill, onSkill }) {
  const usage = (name) => experience.filter((j) => j.tags?.includes(name)).length;
  return (
    <Section id="skills" title="Skills">
      <p className="hint no-print">Click a skill to see where I used it.</p>
      {items.map((group) => (
        <div key={group.category} className="skill-group">
          <h3>{group.category}</h3>
          <div className="chips">
            {group.items.map((s) => {
              const n = usage(s);
              return (
                <button key={s} className={`chip chip-btn${skill === s ? ' active' : ''}`}
                        aria-pressed={skill === s} disabled={n === 0}
                        title={n ? `Used in ${n} role${n > 1 ? 's' : ''}` : 'Not tied to a listed role'}
                        onClick={() => onSkill(skill === s ? null : s)}>
                  {s}
                  {n > 0 && <span className="count">{n}</span>}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </Section>
  );
}
