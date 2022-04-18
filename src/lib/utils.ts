import { onDestroy } from 'svelte';
import { browser } from '$app/env';

export function leftFillNum(num: number, targetLength = 2) {
  return num.toString().padStart(targetLength, '0');
}

export function onInterval(callback: () => void, milliseconds: number) {
  const interval = setInterval(callback, milliseconds);

  onDestroy(() => {
    clearInterval(interval);
  });
}

export function isLocalStorageAvailable() {
  if (browser) {
    try {
      const testKey = '__storage_test__';
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }
}
