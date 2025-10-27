import Hero3D from './components/Hero3D';
import AuthPanel from './components/AuthPanel';
import LottieShowcase from './components/LottieShowcase';
import StudyResources from './components/StudyResources';
import FooterSimple from './components/FooterSimple';

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-slate-900">
      <Hero3D />
      <AuthPanel />
      <LottieShowcase />
      <StudyResources />
      <FooterSimple />
    </div>
  );
}

export default App;
