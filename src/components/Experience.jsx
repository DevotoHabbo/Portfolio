import Section from './Section.jsx';

export default function Experience({ items }) {
  return (
    <Section title="Work Experience">
      <ol className="timeline">
        {items.map((job, i) => (
          <li key={i} className="entry">
            <h3>{job.title}</h3>
            <p className="sub">
              {job.company}
              {job.location && <> · {job.location}</>}
            </p>
            <p className="dates">{job.start} – {job.end}</p>
            {job.bullets?.length > 0 && (
              <ul className="bullets">
                {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
