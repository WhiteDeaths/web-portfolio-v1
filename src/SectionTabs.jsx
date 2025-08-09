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
      <button
        className="section-tab-btn"
        onClick={() => handleClick('contact')}
        style={{ background: 'linear-gradient(90deg, #a259ff 60%, #6d28d9 100%)', color: '#fff', marginLeft: 8 }}
      >
        Connect
      </button>
    </nav>
  );
}
