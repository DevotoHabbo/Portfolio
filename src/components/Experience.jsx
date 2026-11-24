import { useMemo, useState } from 'react';
import Section from './Section.jsx';

const MONTHS = { jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5, jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11 };

function toNumber(d) {
  if (!d || /present/i.test(d)) return Infinity;
  const m = d.match(/([A-Za-z]{3})?[a-z]*\s*(\d{4})/);
  if (!m) return 0;
  return Number(m[2]) * 12 + (m[1] ? MONTHS[m[1].toLowerCase()] ?? 0 : 11);
}

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'tech', label: 'Tech & Engineering' },
  { id: 'other', label: 'Other' },
];

export default function Experience({ items, skill, onSkill }) {
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('relevance');
  const [open, setOpen] = useState(() => new Set(items.map((_, i) => i)));

  const list = useMemo(() => {
    let rows = items.map((job, i) => ({ job, i }));
    if (filter !== 'all') rows = rows.filter(({ job }) => (job.category ?? 'other') === filter);
    if (skill) rows = rows.filter(({ job }) => job.tags?.includes(skill));
    if (sort === 'recent') {
      rows = [...rows].sort(
        (a, b) => toNumber(b.job.end) - toNumber(a.job.end) || toNumber(b.job.start) - toNumber(a.job.start)
      );
    }
    return rows;
  }, [items, filter, sort, skill]);

  const toggle = (i) =>
    setOpen((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  const allOpen = list.every(({ i }) => open.has(i));
  const setAll = () => setOpen(allOpen ? new Set() : new Set(items.map((_, i) => i)));

  return (
    <Section
      id="experience"
      title="Work Experience"
      actions={
        <button className="text-btn no-print" onClick={setAll}>
          {allOpen ? 'Collapse all' : 'Expand all'}
        </button>
      }
    >
      <div className="toolbar no-print">
        <div className="segmented" role="group" aria-label="Filter roles">
          {FILTERS.map((f) => (
            <button key={f.id} className={filter === f.id ? 'on' : ''} aria-pressed={filter === f.id}
                    onClick={() => setFilter(f.id)}>
              {f.label}
            </button>
          ))}
        </div>
        <label className="select">
          Sort
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="relevance">Most relevant</option>
            <option value="recent">Most recent</option>
          </select>
        </label>
      </div>

      {skill && (
        <div className="filter-banner no-print">
          <span>Showing roles that use <strong>{skill}</strong></span>
          <button className="text-btn" onClick={() => onSkill(null)}>Clear ✕</button>
        </div>
      )}

      {list.length === 0 && <p className="empty">No roles match this filter.</p>}

      <ol className="timeline">
        {list.map(({ job, i }) => {
          const isOpen = open.has(i);
          return (
            <li key={i} className={`job${isOpen ? ' open' : ''}`}>
              <button className="job-head" onClick={() => toggle(i)} aria-expanded={isOpen}
                      aria-controls={`job-${i}`}>
                <span className="job-titles">
                  <span className="job-title">{job.title}</span>
                  <span className="sub">{job.company}{job.location && <> · {job.location}</>}</span>
                  <span className="dates">
                    {job.start} – {job.end}
                    {job.end === 'Present' && <span className="badge">Current</span>}
                  </span>
                </span>
                <span className="chevron" aria-hidden="true">▾</span>
              </button>
              <div id={`job-${i}`} className="job-body" hidden={!isOpen}>
                {job.bullets?.length > 0 && (
                  <ul className="bullets">{job.bullets.map((b, j) => <li key={j}>{b}</li>)}</ul>
                )}
                {job.tags?.length > 0 && (
                  <div className="chips tags">
                    {job.tags.map((t) => (
                      <button key={t} className={`chip chip-btn${skill === t ? ' active' : ''}`}
                              onClick={() => onSkill(skill === t ? null : t)}>
                        {t}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
