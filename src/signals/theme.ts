import { effect, signal } from '@preact/signals-react';

export type Theme = 'dark' | 'light' | 'system';

export const theme = signal(undefined as unknown as Theme);

let STORAGE_KEY: string;

/**
 * 创建主题数据 Signal。
 *
 * @param defaultTheme 默认主题
 * @param storageKey Local Storage 中的 key，默认为 `app-ui-theme`
 */
export function createThemeState(
  defaultTheme: Theme,
  storageKey = 'app-ui-theme'
) {
  if (theme.value !== undefined) return;

  STORAGE_KEY = storageKey;
  theme.value = (localStorage.getItem(STORAGE_KEY) as Theme) || defaultTheme;

  effect(() => {
    localStorage.setItem(STORAGE_KEY, theme.value);

    if (theme.value !== 'system') {
      applyTheme(theme.value);
      return;
    }

    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const selectedTheme = darkQuery.matches ? 'dark' : 'light';

    applyTheme(selectedTheme);

    darkQuery.addEventListener('change', handleToggleTheme);

    function handleToggleTheme() {
      if (darkQuery.matches) {
        applyTheme('dark');
        return;
      }

      applyTheme('light');
    }

    return () => darkQuery.removeEventListener('change', handleToggleTheme);
  });
}

function resetTheme() {
  document.documentElement.classList.remove('light', 'dark');
}

function applyTheme(theme: Theme) {
  resetTheme();
  document.documentElement.classList.add(theme);
}

