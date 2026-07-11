// A left-aligned icon + heading + text card, used in "Why Study X" style
// reason lists across the country pages.
export default function InfoCard({ icon, iconVariant = 'blue', title, text }) {
  return (
    <div className="info-card">
      <div className="u-flex-start14">
        <div className={`icon-box icon-${iconVariant}`}>
          <i className={icon}></i>
        </div>
        <div>
          <h4 className="u-h1-primary">{title}</h4>
          <p className="u-txt-sm-555c">{text}</p>
        </div>
      </div>
    </div>
  );
}
