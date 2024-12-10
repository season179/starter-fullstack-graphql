import { Button } from '@/components/ui/button';

export function WelcomeSection() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-4">Welcome to Modern Stack App</h2>
      <p className="text-gray-600 mb-4">
        Built with React 18, GraphQL, and modern tools for the best development experience.
      </p>
      <div className="space-x-4">
        <Button>Get Started</Button>
        <Button variant="outline">Learn More</Button>
      </div>
    </section>
  );
}