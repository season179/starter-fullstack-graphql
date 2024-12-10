import { MainLayout } from '@/components/layout/MainLayout';
import { WelcomeSection } from '@/components/sections/WelcomeSection';

function App() {
  return (
    <MainLayout>
      <div className="space-y-8">
        <WelcomeSection />
      </div>
    </MainLayout>
  );
}

export default App;