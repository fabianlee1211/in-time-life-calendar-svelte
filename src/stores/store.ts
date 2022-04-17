import { writable } from 'svelte/store';
import { browser } from '$app/env';

export const birthDate = writable(
  browser ? localStorage?.getItem('birthDate') : ''
);

birthDate.subscribe((value) => {
  browser && localStorage?.setItem('birthDate', value);
});
