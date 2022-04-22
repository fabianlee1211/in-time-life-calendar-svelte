<script context="module">
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;
  const year = week * 52;
  const startingTimeLeft = {
    years: '0000',
    weeks: '00',
    days: '0',
    hours: '00',
    minutes: '00',
    seconds: '00'
  };
</script>

<script lang="ts">
  import { leftFillNum, onInterval } from '$lib/utils';
  import { add, parseISO, format } from 'date-fns';
  import { birthDate } from '../stores/store';
  import { fade } from 'svelte/transition';

  let timeLeft = startingTimeLeft;

  const calculateTimeLeft = (expectedDeath) => {
    const difference = expectedDeath
      ? expectedDeath.getTime() - new Date().getTime()
      : 0;

    if (difference > 0) {
      timeLeft = {
        years: leftFillNum(Math.floor(difference / year), 4),
        weeks: leftFillNum(Math.floor((difference % year) / week)),
        days: leftFillNum(Math.floor((difference % week) / day), 1),
        hours: leftFillNum(Math.floor((difference % day) / hour)),
        minutes: leftFillNum(Math.floor((difference % hour) / minute)),
        seconds: leftFillNum(Math.floor((difference % minute) / second))
      };
    }
  };

  $: expectedDeath = $birthDate ? add(parseISO($birthDate), { years: 80 }) : 0;
  $: formattedStart = $birthDate
    ? format(parseISO($birthDate), 'd MMM yyyy')
    : '';
  $: formattedEnd = expectedDeath ? format(expectedDeath, 'd MMM yyyy') : '';

  onInterval(() => calculateTimeLeft(expectedDeath), 1000);
</script>

<div
  class="sticky py-4 top-0 bg-zinc-900 z-50 flex flex-col items-center"
  in:fade
>
  <p class="text-center mb-2 text-digit">
    {`${formattedStart} - ${formattedEnd}`}
  </p>
  <div class="flex justify-center items-center">
    {#each Object.values(timeLeft) as time, index}
      <div class="flex items-center text-center justify-around">
        <p
          class="text-digit neon-shadow text-3xl sm:text-5xl font-thin tabular-nums md:text-7xl tracking-tighter"
        >
          {time}
        </p>
      </div>
      {#if index !== Object.values(timeLeft).length - 1}
        <span
          class="mx-2 w-1 h-1 sm:h-2 sm:w-2 rounded-full bg-digit shadow-neon"
        />
      {/if}
    {/each}
  </div>
  <button
    on:click={() => birthDate.set('')}
    class="underline mt-2 text-sm hover:opacity-100 opacity-30 transition-opacity"
    >Change Date</button
  >
</div>
