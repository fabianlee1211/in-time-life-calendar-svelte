<script context="module">
  export const prerender = false;
</script>

<script lang="ts">
  import Timer from '../components/timer.svelte';
  import { birthDate } from '../stores/store';
  import BirthDateForm from '../components/birth-date-form.svelte';
  import Tiles from '../components/tiles.svelte';
</script>

<svelte:head>
  <title>In Time - Lifespan Countdown Timer</title>
  <meta
    name="description"
    content="A simple countdown timer starting from your birth date to the average human lifespan of 80 years later."
  />
</svelte:head>
<section class="px-3 md:px-6 my-8">
  <h1 class="sr-only">In Time</h1>
  {#if $birthDate}
    <Timer />
  {:else}
    <BirthDateForm />
  {/if}
  <Tiles />
</section>
