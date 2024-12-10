# Modern Stack App

A modern full-stack application built with React 18, GraphQL, NestJS, and Cloudflare D1, featuring a clean architecture and best practices for scalable web applications.

## 🚀 Tech Stack

- **Frontend:**
  - React 18
  - Apollo Client
  - TypeScript
  - Tailwind CSS
  - shadcn/ui Components
  - Vite (Build Tool)

- **Backend:**
  - NestJS
  - GraphQL
  - Cloudflare D1 (Database)

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── layout/          # Layout components (Header, MainLayout, etc.)
│   ├── sections/        # Page sections and feature-specific components
│   └── ui/              # Base UI components (buttons, inputs, etc.)
├── features/            # Feature-specific code
│   ├── posts/          # Posts feature
│   └── users/          # Users feature
├── graphql/            # GraphQL related code
│   ├── mutations.ts    # GraphQL mutations
│   └── queries.ts      # GraphQL queries
├── lib/                # Shared utilities and configurations
│   ├── apollo.ts       # Apollo Client configuration
│   └── utils.ts        # Utility functions
├── server/             # Backend NestJS code
│   ├── modules/        # NestJS modules
│   └── main.ts         # Server entry point
├── types/              # TypeScript type definitions
└── main.tsx            # Application entry point
```

## 🚦 Getting Started

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd modern-stack-app
   ```

2. **Install dependencies:**
   ```bash
   bun install
   ```

3. **Start the development server:**
   ```bash
   bun run dev
   ```

4. **Open your browser:**
   The application will be available at `http://localhost:5173`

## 🌩️ Deploying to Cloudflare

### Prerequisites

1. **Install Wrangler CLI:**
   ```bash
   npm install -g wrangler
   ```

2. **Authenticate with Cloudflare:**
   ```bash
   wrangler login
   ```

3. **Initialize D1 Database:**
   ```bash
   # Create a new D1 database
   wrangler d1 create modern-stack-db
   
   # Add the database binding to wrangler.toml
   wrangler d1 create-binding modern-stack-db DB
   ```

### Deploy Backend to Cloudflare Workers

1. **Configure wrangler.toml:**
   ```toml
   name = "modern-stack-api"
   main = "src/server/worker.ts"
   compatibility_date = "2023-01-01"

   [[d1_databases]]
   binding = "DB"
   database_name = "modern-stack-db"
   database_id = "your-database-id"
   ```

2. **Deploy the Worker:**
   ```bash
   wrangler deploy
   ```

### Deploy Frontend to Cloudflare Pages

1. **Configure build settings:**
   - Build command: `bun run build`
   - Build output directory: `dist`
   - Framework preset: `Vite`

2. **Deploy via GitHub:**
   - Connect your GitHub repository to Cloudflare Pages
   - Configure environment variables:
     ```
     VITE_API_URL=https://your-worker.workers.dev
     ```

3. **Deploy manually:**
   ```bash
   # Build the project
   bun run build

   # Deploy to Pages
   wrangler pages deploy dist
   ```

4. **Configure Custom Domain (Optional):**
   - Go to Cloudflare Pages dashboard
   - Select your project
   - Navigate to Custom Domains
   - Add your domain and follow the DNS configuration steps

### Environment Variables

Create a `.dev.vars` file for local development:
```env
DATABASE_URL="your-d1-connection-string"
JWT_SECRET="your-jwt-secret"
```

For production, set these in the Cloudflare dashboard:
1. Go to Workers & Pages
2. Select your application
3. Navigate to Settings > Environment Variables
4. Add your production variables

## 🛠 Development Guidelines

### Code Organization
- Keep components small and focused
- Place shared components in the `components/ui` directory
- Feature-specific components go in their respective feature directories
- Use TypeScript for type safety
- Follow the established project structure

### Styling
- Use Tailwind CSS for styling
- Utilize shadcn/ui components when available
- Follow the design system and maintain consistency

### Best Practices
- Write meaningful component and variable names
- Add TypeScript types for all props and data structures
- Keep components pure when possible
- Use hooks for shared logic
- Follow the single responsibility principle

## 🧪 Testing

```bash
# Run unit tests
bun test

# Run e2e tests
bun test:e2e
```

## 📦 Building for Production

```bash
# Create production build
bun run build

# Preview production build
bun run preview
```

## 🤝 Contributing

1. **Create a new branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes:**
   - Follow the code organization guidelines
   - Ensure all tests pass
   - Add new tests for new features

3. **Commit your changes:**
   ```bash
   git commit -m "feat: add new feature"
   ```
   Follow [Conventional Commits](https://www.conventionalcommits.org/) for commit messages

4. **Push and create a pull request:**
   ```bash
   git push origin feature/your-feature-name
   ```
   - Fill out the PR template
   - Request reviews from team members

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [NestJS Documentation](https://docs.nestjs.com)
- [GraphQL Documentation](https://graphql.org/learn)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Cloudflare D1 Documentation](https://developers.cloudflare.com/d1/)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.