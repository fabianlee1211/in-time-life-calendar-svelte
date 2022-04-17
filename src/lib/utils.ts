import { onDestroy } from 'svelte';

export function leftFillNum(num: number, targetLength = 2) {
  return num.toString().padStart(targetLength, '0');
}

export function onInterval(callback: () => void, milliseconds: number) {
  const interval = setInterval(callback, milliseconds);

  onDestroy(() => {
    clearInterval(interval);
  });
}
