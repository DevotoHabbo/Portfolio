import { useCallback, useRef, useState } from 'react';
import resume from './data/resume.js';
import NavBar from './components/NavBar.jsx';
import Header from './components/Header.jsx';
import Section from './components/Section.jsx';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
import Skills from './components/Skills.jsx';
import Certifications from './components/Certifications.jsx';
import Languages from './components/Languages.jsx';
import Contact from './components/Contact.jsx';
import Toast from './components/Toast.jsx';
import useTheme from './hooks/useTheme.js';
import useScrollSpy from './hooks/useScrollSpy.js';
import useReveal from './hooks/useReveal.js';

const SECTIONS = [
  { id: 'summary', label: 'Summary' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export default function App() {
  const [theme, toggleTheme] = useTheme();
  const [active, selectSection] = useScrollSpy(SECTIONS.map((s) => s.id));
  const [skill, setSkill] = useState(null);
  const [toast, setToast] = useState('');
  const timer = useRef();
  useReveal();

  const notify = useCallback((msg) => {
    setToast(msg);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(''), 2200);
  }, []);

  const pickSkill = (s) => {
    setSkill(s);
    if (s && window.innerWidth <= 760) {
      document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <NavBar name={resume.name} sections={SECTIONS} active={active} onSelect={selectSection} theme={theme} onToggleTheme={toggleTheme} />
      <main className="page">
        <Header resume={resume} notify={notify} />
        <div className="columns">
          <div className="col-main">
            {resume.summary && (
              <Section id="summary" title="Summary">
                <p>{resume.summary}</p>
              </Section>
            )}
            {resume.experience?.length > 0 && (
              <Experience items={resume.experience} skill={skill} onSkill={pickSkill} />
            )}
            {resume.education?.length > 0 && <Education items={resume.education} />}
          </div>
          <aside className="col-side">
            {resume.skills?.length > 0 && (
              <Skills items={resume.skills} experience={resume.experience} skill={skill} onSkill={pickSkill} />
            )}
            {resume.certifications?.length > 0 && <Certifications items={resume.certifications} />}
            {resume.languages?.length > 0 && <Languages items={resume.languages} />}
          </aside>
        </div>
        <Contact email={resume.email} name={resume.name} />
        <footer className="footer no-print">© {new Date().getFullYear()} {resume.name}</footer>
      </main>
      <Toast message={toast} />
    </>
  );
}
