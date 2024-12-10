import { Button } from '@/components/ui/button';

export function NavigationMenu() {
  return (
    <nav className="space-x-4">
      <Button variant="ghost">Dashboard</Button>
      <Button variant="ghost">Users</Button>
      <Button variant="ghost">Settings</Button>
    </nav>
  );
}