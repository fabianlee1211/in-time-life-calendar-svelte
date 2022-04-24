<script context="module">
  const weeks = Array.from({ length: 52 }, (_, i) => i + 1);
  const years = Array.from({ length: 80 }, (_, i) => i + 1);

  const getWeek = (week = 1, year = 1) => {
    return week + 52 * (year - 1);
  };
</script>

<script lang="ts">
  import { leftFillNum } from '$lib/utils';
  import {
    parseISO,
    differenceInSeconds,
    differenceInYears,
    add
  } from 'date-fns';
  import Tile from './week-tile.svelte';
  import { birthDate } from '../stores/store';
  import { onDestroy } from 'svelte';

  $: bornAt = parseISO($birthDate);

  let maxFillYear = 0;
  let remainingWeeksInInteger = 0;
  let remainingWeeksFraction = 0;
  let interval;

  const updateTileSettings = () => {
    const now = new Date();
    maxFillYear = differenceInYears(now, bornAt);
    const remaining = add(bornAt, { years: maxFillYear });
    const remainingMaxFillSecond = differenceInSeconds(now, remaining);
    const remainingMaxFillWeek = remainingMaxFillSecond / (7 * 24 * 60 * 60);
    remainingWeeksInInteger = Math.floor(remainingMaxFillWeek);
    remainingWeeksFraction = remainingMaxFillWeek - remainingWeeksInInteger;
  };

  const reset = () => {
    maxFillYear = 0;
    remainingWeeksInInteger = 0;
    remainingWeeksFraction = 0;
    clearInterval(interval);
  };

  $: {
    if ($birthDate) {
      updateTileSettings();
      clearInterval(interval);
      interval = setInterval(updateTileSettings, 1000 * 60);
    } else {
      reset();
    }
  }

  onDestroy(() => {
    reset();
  });
</script>

<div class="max-w-screen-2xl mx-auto overflow-x-auto my-4 md:my-8">
  {#each years as year}
    <div
      id={`year-${year}`}
      class={`grid grid-cols-1 xl:grid-cols-2  gap-1 sm:gap-2 xl:gap-12 mx-auto relative w-max ${
        year % 10 === 0 ? 'mb-10' : 'mb-2'
      }`}
    >
      <div class="grid gap-1 md:gap-2 grid-flow-col grid-rows-1">
        {#each weeks.slice(0, 26) as week}
          {#if year <= maxFillYear}
            <Tile week={getWeek(week, year)} progress={1} />
          {:else if year > maxFillYear + 1}
            <Tile week={getWeek(week, year)} progress={0} />
          {:else if week === remainingWeeksInInteger + 1}
            <Tile
              week={getWeek(week, year)}
              progress={remainingWeeksFraction}
            />
          {:else if remainingWeeksInInteger >= week}
            <Tile week={getWeek(week, year)} progress={1} />
          {:else}
            <Tile week={getWeek(week, year)} progress={0} />
          {/if}
        {/each}
      </div>
      <div class="grid gap-1 md:gap-2 grid-flow-col grid-rows-1">
        {#each weeks.slice(26, 52) as week}
          {#if year <= maxFillYear}
            <Tile week={getWeek(week, year)} progress={1} />
          {:else if year > maxFillYear + 1}
            <Tile week={getWeek(week, year)} progress={0} />
          {:else if remainingWeeksInInteger >= 26 && week === remainingWeeksInInteger + 1}
            <Tile
              week={getWeek(week, year)}
              progress={remainingWeeksFraction}
            />
          {:else if remainingWeeksInInteger > 26 && remainingWeeksInInteger >= week}
            <Tile week={getWeek(week, year)} progress={1} />
          {:else}
            <Tile week={getWeek(week, year)} progress={0} />
          {/if}
        {/each}
      </div>
      <span
        class="absolute -right-6 top-1/2 -translate-y-1/2 tabular-nums text-xs text-center opacity-40"
        >{leftFillNum(year, 2)}</span
      >
    </div>
  {/each}
</div>
