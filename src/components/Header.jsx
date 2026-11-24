function initials(name) {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map((p) => p[0].toUpperCase()).join('');
}

function CopyButton({ value, label, notify }) {
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      notify(`${label} copied to clipboard`);
    } catch {
      notify(`Couldn't copy — ${value}`);
    }
  };
  return (
    <button className="copy-btn no-print" onClick={copy} aria-label={`Copy ${label.toLowerCase()}`} title={`Copy ${label.toLowerCase()}`}>
      ⧉
    </button>
  );
}

export default function Header({ resume, notify }) {
  const { name, headline, location, email, phone, indeedUrl, links, openTo, desiredPay } = resume;
  return (
    <header id="top" className="card header reveal">
      <div className="avatar" aria-hidden="true">{initials(name)}</div>
      <div className="header-main">
        <h1>{name}</h1>
        <p className="headline">{headline}</p>
        <ul className="meta">
          {location && <li>📍 {location}</li>}
          {email && (
            <li>✉️ <a href={`mailto:${email}`}>{email}</a><CopyButton value={email} label="Email" notify={notify} /></li>
          )}
          {phone && (
            <li>📞 <a href={`tel:${phone.replace(/[^\d+]/g, '')}`}>{phone}</a><CopyButton value={phone} label="Phone number" notify={notify} /></li>
          )}
        </ul>
        {openTo?.length > 0 && (
          <div className="chips" aria-label="Open to">
            {openTo.map((o) => <span key={o} className="chip">{o}</span>)}
            {desiredPay && <span className="chip">{desiredPay}</span>}
          </div>
        )}
      </div>
      <div className="header-actions no-print">
        {indeedUrl && (
          <a className="btn btn-primary" href={indeedUrl} target="_blank" rel="noreferrer">View on Indeed</a>
        )}
        <a className="btn btn-outline" href="#contact">Contact me</a>
        <button className="btn btn-ghost" onClick={() => window.print()}>Download PDF</button>
        <div className="header-links">
          {links?.map((l) => (
            <a key={l.url} className="link" href={l.url} target="_blank" rel="noreferrer">{l.label} ↗</a>
          ))}
        </div>
      </div>
    </header>
  );
}
