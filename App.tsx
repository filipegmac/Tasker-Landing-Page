
import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { WhyUseSection } from './components/WhyUseSection';
import { OrganizationSection } from './components/OrganizationSection';
import { DarkFeatureSection } from './components/DarkFeatureSection';
import { FooterCTASection } from './components/FooterCTASection';
import { CalendarIcon, CheckCircleIconSolid, ChevronRightIcon, RocketLaunchIcon, SparklesIconSolid, ArrowDownTrayIcon, LightBulbIcon, UsersIcon, DevicePhoneMobileIcon, LockClosedIconSolid, PresentationChartLineIcon, AcademicCapIcon } from './constants';


const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <WhyUseSection />
        <OrganizationSection
          title="A organização é o primeiro passo para a liberdade."
          buttonText="QUERO MINHA AGENDA!"
          features={[
            {
              icon: <PresentationChartLineIcon className="w-16 h-16 text-brand-teal-600 mx-auto" />,
              title: 'Tarefas com contexto',
              description: 'Organize projetos, prioridades e tarefas. Tudo em um só lugar.',
            },
            {
              icon: <DevicePhoneMobileIcon className="w-16 h-16 text-brand-teal-600 mx-auto" />,
              title: 'Personalização Completa',
              description: 'Configure a agenda para o seu jeito e para as suas necessidades.',
            },
            {
              icon: <UsersIcon className="w-16 h-16 text-brand-teal-600 mx-auto" />,
              title: 'Projetos colaborativos',
              description: 'Trabalhe com sua equipe, defina permissões e compartilhe o progresso.',
            },
          ]}
        />
        <DarkFeatureSection />
         <OrganizationSection
          title="A organização é o primeiro passo para a liberdade."
          buttonText="QUERO MINHA AGENDA!"
          className="pb-24 pt-12"
          features={[
            {
              icon: <PresentationChartLineIcon className="w-16 h-16 text-brand-teal-600 mx-auto" />,
              title: 'Tarefas com contexto',
              description: 'Organize projetos, prioridades e tarefas. Tudo em um só lugar.',
            },
            {
              icon: <DevicePhoneMobileIcon className="w-16 h-16 text-brand-teal-600 mx-auto" />,
              title: 'Personalização Completa',
              description: 'Configure a agenda para o seu jeito e para as suas necessidades.',
            },
            {
              icon: <UsersIcon className="w-16 h-16 text-brand-teal-600 mx-auto" />,
              title: 'Projetos colaborativos',
              description: 'Trabalhe com sua equipe, defina permissões e compartilhe o progresso.',
            },
          ]}
        />
      </main>
    </div>
  );
};

export default App;