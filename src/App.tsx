import { createThemeState } from '@/signals/theme.ts';

createThemeState('system', 'demo-ui-theme');

export default function App() {
  return (
    <div className="prose container">
      <h1>F12 - Console</h1>
      <ul className="h-[200vh]">
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
        <li><a href="">link to me</a></li>
      </ul>
    </div>
  );
}
