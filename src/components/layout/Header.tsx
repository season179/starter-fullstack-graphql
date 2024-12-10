import { Button } from '@/components/ui/button';
import { NavigationMenu } from './NavigationMenu';

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Modern Stack App</h1>
        <NavigationMenu />
      </div>
    </header>
  );
}