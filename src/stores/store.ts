import { writable } from 'svelte/store';
import { browser } from '$app/env';
import { sub, format } from 'date-fns';

const defaultDate = sub(new Date(), { days: 1 });
export const defaultDateString = format(defaultDate, 'yyyy-LL-dd');

export const birthDate = writable(
  browser ? localStorage?.getItem('birthDate') : defaultDateString
);

birthDate.subscribe((value) => {
  browser && localStorage?.setItem('birthDate', value);
});
