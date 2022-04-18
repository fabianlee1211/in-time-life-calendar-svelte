import { writable } from 'svelte/store';
import { browser } from '$app/env';
import { sub, format } from 'date-fns';

const defaultDate = sub(new Date(), { days: 1 });
export const defaultDateString = format(defaultDate, 'yyyy-LL-dd');

const localStorageStore = (key, initial) => {
  const stored = browser ? localStorage?.getItem(key) : '';

  if (!stored) {
    if (browser) {
      try {
        localStorage?.setItem(key, initial);
      } catch (e) {
        console.error(e);
      }
    }
  }

  const store = writable(stored);

  return store;
};

export const birthDate = localStorageStore('birthDate', '');

birthDate.subscribe((value) => {
  if (browser) {
    try {
      localStorage?.setItem('birthDate', value);
    } catch (e) {
      console.error(e);
    }
  }
});
