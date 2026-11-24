export default function Section({ id, title, actions, children }) {
  return (
    <section id={id} className="card reveal">
      <div className="card-head">
        <h2 className="card-title">{title}</h2>
        {actions}
      </div>
      {children}
    </section>
  );
}
