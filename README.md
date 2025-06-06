# Div-ine UI

<p align="center">
  <strong>A magical, component-driven UI system for modern React applications (Coming Soon)</strong>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#installation">Installation</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#components">Components</a> •
  <a href="#customization">Customization</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#license">License</a>
</p>

## Introduction

Div-ine UI is a meticulously crafted React component library (currently in development) designed to bring magical experiences to your web applications. Built with modern technologies and a focus on developer experience, Div-ine UI will offer a comprehensive set of customizable components that are both beautiful and functional.

### Philosophy

At the core of Div-ine UI is a belief that UI development should be:

- **Magical yet practical** - Components that delight users while solving real problems
- **Composable and flexible** - Building blocks that work seamlessly together
- **Beautiful by default** - Thoughtfully designed with attention to detail
- **Accessible for everyone** - Following best practices for inclusivity
- **Developer-friendly** - Easy to use, customize, and extend

## Features

- ✨ **Modern Design System** - Contemporary aesthetics with magical touches
- 🧩 **Composable Components** - Mix and match to build complex interfaces
- 🎨 **Customizable Theming** - Easily adapt to your brand's identity
- 📱 **Responsive by Default** - Optimized for all screen sizes
- ♿ **Accessibility Built-in** - WCAG compliance and keyboard navigation
- 🚀 **Performance Focused** - Optimized for speed and efficiency
- 🌙 **Dark Mode Support** - Seamless light and dark theme switching
- 📦 **Modular Architecture** - Import only what you need
- 🛠️ **TypeScript Ready** - Full type definitions for enhanced development

## Installation

> **Note**: Div-ine UI is currently in development and not yet published to npm. The installation instructions below are for future reference.

### Prerequisites

- Node.js 14.0 or later
- npm, yarn, or pnpm

### Using npm/yarn/pnpm

```bash
# Using npm
npm install @div-ine/ui

# Using yarn
yarn add @div-ine/ui

# Using pnpm
pnpm add @div-ine/ui
```

### Using the CLI (Recommended)

Our CLI tool offers an interactive setup experience:

```bash
# Install the CLI
npm install -g divine-wand-cli

# Create a new project
divine-wand conjure my-app

# Or add to existing project
cd my-existing-project
divine-wand enchant
```

## Getting Started

### Basic Setup

1. **Import the CSS**

```jsx
// In your main file (e.g., App.tsx, main.tsx)
import '@div-ine/ui/styles.css';
```

2. **Use components**

```jsx
import { Button } from '@div-ine/ui/button';

function App() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  );
}
```

### Theme Setup

Div-ine UI comes with a theme provider that controls the visual appearance:

```jsx
import { ThemeProvider } from '@div-ine/ui/theme';

function App() {
  return (
    <ThemeProvider>
      {/* Your app here */}
    </ThemeProvider>
  );
}
```

### Next.js Setup

For Next.js applications, we recommend using our dedicated Next.js integration:

```jsx
// pages/_app.tsx
import { DivineNextProvider } from '@div-ine/ui/next';
import '@div-ine/ui/styles.css';

function MyApp({ Component, pageProps }) {
  return (
    <DivineNextProvider>
      <Component {...pageProps} />
    </DivineNextProvider>
  );
}

export default MyApp;
```

## Components

Div-ine UI offers a rich set of components to build your interfaces. Each component is designed with flexibility and composability in mind.

### Button Component

The `Button` component is one of our most versatile offerings, supporting multiple variants, sizes, and states.

#### Basic Usage

```jsx
import { Button } from '@div-ine/ui/button';

function ButtonDemo() {
  return (
    <div>
      <Button>Default Button</Button>
      <Button variant="outline">Outline Button</Button>
      <Button variant="destructive">Destructive Button</Button>
    </div>
  );
}
```

#### Button Variants

The Button component comes with a wide range of style variants:

- `default` - Primary action button with gradient
- `outline` - Secondary action with transparent background
- `solid` - Solid colored button
- `destructive` - For destructive actions
- `success` - For positive outcomes
- `secondary` - Alternative styling
- `ghost` - Minimal styling
- `link` - Appears as a hyperlink
- `soft` - Subtle, low-contrast appearance
- `glossy` - Modern glossy effect with backdrop blur

#### Button Sizes

Available size options:

- `default` - Standard size
- `sm` - Small button
- `lg` - Large button
- `xl` - Extra large button
- `icon` - Square button for icons
- `pill` - Rounded pill shape
- `sm-pill` - Small pill
- `lg-pill` - Large pill
- `xl-pill` - Extra large pill

#### With Icons

```jsx
import { Button } from '@div-ine/ui/button';
import { Mail } from 'lucide-react';

function IconButtonExample() {
  return (
    <Button icon={<Mail className="h-4 w-4" />}>
      Send Email
    </Button>
  );
}
```

#### Loading State

```jsx
import { Button } from '@div-ine/ui/button';
import { useState } from 'react';

function LoadingButtonExample() {
  const [isLoading, setIsLoading] = useState(false);
  
  return (
    <Button 
      loading={isLoading} 
      onClick={() => {
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 2000);
      }}
    >
      Save Changes
    </Button>
  );
}
```

#### API Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'outline' \| 'solid' \| 'destructive' \| 'success' \| 'secondary' \| 'ghost' \| 'link' \| 'soft' \| 'glossy'` | `'default'` | Visual style variant |
| `size` | `'default' \| 'sm' \| 'lg' \| 'xl' \| 'icon' \| 'pill' \| 'sm-pill' \| 'lg-pill' \| 'xl-pill'` | `'default'` | Button size |
| `icon` | `ReactNode` | `undefined` | Optional icon to display |
| `iconPosition` | `'left' \| 'right'` | `'left'` | Position of the icon |
| `loading` | `boolean` | `false` | Shows loading spinner when true |
| `animation` | `'none' \| 'pulse' \| 'bounce' \| 'glow'` | `'none'` | Animation effect |
| `disabled` | `boolean` | `false` | Disables the button |
| `asChild` | `boolean` | `false` | Merge props onto child element |

### Other Core Components

Div-ine UI includes many other components including but not limited to:

- **Layout** - Container, Grid, Box, Flex
- **Navigation** - Navbar, Sidebar, Tabs, Breadcrumbs
- **Data Display** - Card, Table, List, Badge
- **Feedback** - Alert, Toast, Progress, Skeleton
- **Forms** - Input, Select, Checkbox, Radio, Switch
- **Overlays** - Modal, Drawer, Popover, Tooltip
- **Media** - Avatar, Image, Icon

## Customization

### Theming

Div-ine UI uses a powerful theming system to customize the visual appearance:

```jsx
import { ThemeProvider, createTheme } from '@div-ine/ui/theme';

// Create a custom theme
const myTheme = createTheme({
  colors: {
    primary: {
      default: '#6366f1',
      foreground: '#ffffff',
    },
    // Other color customizations...
  },
  borderRadius: {
    md: '0.5rem',
    // Other radius values...
  },
  // Additional theme settings...
});

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      {/* Your app here */}
    </ThemeProvider>
  );
}
```

### CSS Variables

You can override CSS variables for quick adjustments:

```css
:root {
  --divine-primary: #6366f1;
  --divine-primary-foreground: #ffffff;
  --divine-radius-md: 0.5rem;
  /* Other variables... */
}
```

### Component Customization

All components accept a `className` prop for direct styling:

```jsx
<Button className="my-custom-button">
  Custom Styled
</Button>
```

For deeper customization, component variants can be extended:

```jsx
import { buttonVariants } from '@div-ine/ui/button';
import { cn } from '@div-ine/ui/utils';

// Create a custom variant
const customButtonClass = cn(
  buttonVariants({ variant: 'default' }),
  'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600'
);

<button className={customButtonClass}>
  Custom Gradient Button
</button>
```

## Development

### Local Development

1. Clone the repository
```bash
git clone https://github.com/your-org/div-ine-ui.git
cd div-ine-ui
```

2. Install dependencies
```bash
pnpm install
```

3. Start the development server
```bash
pnpm dev
```

4. Visit `http://localhost:5173` to view the demo application

### Building

```bash
pnpm build
```

## Development Status

Div-ine UI is currently in active development. While the documentation and design system are being finalized, the actual package is not yet available for installation. We're working hard to bring this magical UI system to life, and we'll announce its release soon!

### Current Status
- ✅ Design System Documentation
- ✅ Component Architecture Planning
- ✅ API Design
- 🚧 Package Development
- 🚧 Testing Infrastructure
- 🚧 Documentation Site
- 🚧 Example Applications

### Roadmap
1. Complete core component development
2. Implement comprehensive testing
3. Create documentation site
4. Build example applications
5. Initial npm release
6. Community feedback and improvements

Stay tuned for updates on our progress and the official release!

## Acknowledgements

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [class-variance-authority](https://cva.style/docs)
- [Lucide Icons](https://lucide.dev/)
- [Radix UI Primitives](https://www.radix-ui.com/) 

## Contributing

While Div-ine UI is not yet open for contributions, we're excited to welcome contributors once we reach our initial release. Please check back later for contribution guidelines and development setup instructions.

## License

This project is currently in development. License information will be provided upon release.
