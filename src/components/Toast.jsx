export default function Toast({ message }) {
  return (
    <div className={`toast no-print${message ? ' show' : ''}`} role="status" aria-live="polite">
      {message}
    </div>
  );
}
