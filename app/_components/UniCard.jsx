import UniversityLogo from './UniversityLogo';

// One card in a "Top Universities" grid — used identically across every
// country page, just with different school data.
export default function UniCard({ href, abbr, logo, name, rank }) {
  return (
    <a className="u-txt-inherit uni-card" href={href} rel="noopener noreferrer" target="_blank">
      <div className="u-card-p22 uni-logo">
        <UniversityLogo className="u-img-icon" alt={abbr} src={logo} />
      </div>
      <div>
        <div className="uni-name">{name}</div>
        <div className="uni-rank">{rank}</div>
      </div>
    </a>
  );
}
