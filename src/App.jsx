import resume from './data/resume.js';
import Header from './components/Header.jsx';
import Section from './components/Section.jsx';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
import Skills from './components/Skills.jsx';
import Certifications from './components/Certifications.jsx';
import Languages from './components/Languages.jsx';

export default function App() {
  return (
    <main className="page">
      <Header resume={resume} />
      <div className="columns">
        <div className="col-main">
          {resume.summary && (
            <Section title="Summary">
              <p>{resume.summary}</p>
            </Section>
          )}
          {resume.experience?.length > 0 && <Experience items={resume.experience} />}
          {resume.education?.length > 0 && <Education items={resume.education} />}
        </div>
        <aside className="col-side">
          {resume.skills?.length > 0 && <Skills items={resume.skills} />}
          {resume.certifications?.length > 0 && <Certifications items={resume.certifications} />}
          {resume.languages?.length > 0 && <Languages items={resume.languages} />}
        </aside>
      </div>
      <footer className="footer no-print">
        © {new Date().getFullYear()} {resume.name}
      </footer>
    </main>
  );
}
