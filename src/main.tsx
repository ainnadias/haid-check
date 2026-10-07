import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Inisialisasi tema dari localStorage saat aplikasi pertama kali dimuat
// Default adalah Light Mode (#FDF0F5) kecuali jika user secara eksplisit memilih dark mode
if (typeof window !== 'undefined') {
  const savedTheme = localStorage.getItem('fiqih-haid-theme');
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
    document.body.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
    document.body.classList.remove('dark');
  }
}

createRoot(document.getElementById('root')!).render(<App />);
