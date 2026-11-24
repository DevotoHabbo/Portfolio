export default function NavBar({ name, sections, active, onSelect, theme, onToggleTheme }) {
  return (
    <nav className="nav no-print" aria-label="Sections">
      <div className="nav-inner">
        <a href="#top" className="nav-brand">{name}</a>
        <ul className="nav-links">
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} onClick={() => onSelect(s.id)} className={active === s.id ? 'active' : undefined}
                 aria-current={active === s.id ? 'true' : undefined}>
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <button className="icon-btn" onClick={onToggleTheme}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
}
