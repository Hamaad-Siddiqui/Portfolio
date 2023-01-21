'use client';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { AnimatedMoonIcon, AnimatedSunIcon } from './Icons';

export default function ThemeToggle() {
 const { resolvedTheme, setTheme } = useTheme();
 const [mounted, setMounted] = useState(false);

 useEffect(() => setMounted(true), []);

 return (
  <button
   aria-label='Toggle Theme'
   type='button'
   className='w-9 h-9 rounded-lg flex items-center justify-center transition-all'
   onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
  >
   {mounted &&
    (resolvedTheme === 'dark' ? <AnimatedMoonIcon /> : <AnimatedSunIcon />)}
  </button>
 );
}
