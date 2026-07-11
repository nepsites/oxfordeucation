// Reusable bottom-of-page call-to-action banner used across almost every
// route (heading + supporting text + one or two action buttons).
export default function CtaSection({ title, text, actions = [] }) {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-inner">
          <div className="cta-text">
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className="cta-actions">
            {actions.map((action, i) => (
              <a
                key={i}
                href={action.href}
                className={`btn ${action.variant === 'outline' ? 'btn-ol-primary' : action.variant === 'white' ? 'btn-white' : action.variant}`}
                {...(action.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {action.icon && <i className={action.icon}></i>}
                {action.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
