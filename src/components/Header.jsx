function initials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0].toUpperCase())
    .join('');
}

export default function Header({ resume }) {
  const { name, headline, location, email, phone, indeedUrl, links, openTo, desiredPay } = resume;
  return (
    <header className="card header">
      <div className="avatar" aria-hidden="true">{initials(name)}</div>
      <div className="header-main">
        <h1>{name}</h1>
        <p className="headline">{headline}</p>
        <ul className="meta">
          {location && <li>📍 {location}</li>}
          {email && <li>✉️ <a href={`mailto:${email}`}>{email}</a></li>}
          {phone && <li>📞 <a href={`tel:${phone.replace(/[^\d+]/g, '')}`}>{phone}</a></li>}
        </ul>
        {openTo?.length > 0 && (
          <div className="chips" aria-label="Open to">
            {openTo.map((o) => (
              <span key={o} className="chip">{o}</span>
            ))}
            {desiredPay && <span className="chip">{desiredPay}</span>}
          </div>
        )}
      </div>
      <div className="header-actions no-print">
        {indeedUrl && (
          <a className="btn btn-primary" href={indeedUrl} target="_blank" rel="noreferrer">
            View on Indeed
          </a>
        )}
        <button className="btn btn-outline" onClick={() => window.print()}>
          Download PDF
        </button>
        {links?.map((l) => (
          <a key={l.url} className="link" href={l.url} target="_blank" rel="noreferrer">
            {l.label} ↗
          </a>
        ))}
      </div>
    </header>
  );
}
