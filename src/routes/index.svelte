<script lang="ts">
  import Timer from '../components/timer.svelte';
  import { birthDate } from '../stores/store';
  import BirthDateForm from '../components/birth-date-form.svelte';
  import Calendar from '../components/calendar.svelte';
</script>

<svelte:head>
  <title>In Time Life Calendar</title>
  <meta
    name="description"
    content="A lifespan countdown timer and calendar which starts from your birth date to 80 years later."
  />
</svelte:head>

<section class="px-3 md:px-6 my-8">
  <h1 class="sr-only">In Time</h1>
  {#if $birthDate}
    <Timer />
  {:else}
    <BirthDateForm />
  {/if}
  <Calendar />
</section>
