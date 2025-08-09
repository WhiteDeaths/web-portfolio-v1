import './SectionTabs.css';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'languages', label: 'Languages' },
];

export default function SectionTabs() {
  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <nav className="section-tabs">
      {sections.map((section) => (
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
