import './SectionTabs.css';

export default function SectionTabs({ tabs }) {
  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <nav className="section-tabs">
      {tabs.map((section) => (
        <button
          key={section.id}
          className="section-tab-btn"
          onClick={() => handleClick(section.id)}
        >
          {section.label}
        </button>
      ))}
    </nav>
  );
}
