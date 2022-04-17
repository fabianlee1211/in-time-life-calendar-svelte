<script lang="ts">
  import { format, subDays, subYears } from 'date-fns';
  import { birthDate } from '../stores/store';
  import { fade } from 'svelte/transition';

  let error = false;
  let value = '';

  const handleSubmit = () => {
    if (!value) {
      error = true;
    } else {
      error = false;
      birthDate.set(value);
    }
  };

  $: if (value) {
    error = false;
  }

  const now = new Date();
  const maxDate = subDays(now, 1);
  const minDate = subYears(now, 81);
</script>

<div class="max-w-xl mx-auto flex flex-col items-center py-4" in:fade>
  <span class="opacity-50 mb-1">Welcome</span>
  <p class="font-semibold tracking-tight text-5xl text-center mb-2">
    Start With Your Birth Date
  </p>
  <div class="flex space-x-2 w-full mt-2">
    <div class="flex-1 relative">
      <input
        placeholder="Date"
        type="date"
        bind:value
        class={`rounded-md border-2 px-4 py-2 w-full text-center bg-transparent focus:border-white ${
          error ? 'border-red-400' : 'border-gray-600'
        }`}
        max={format(maxDate, 'yyyy-MM-dd')}
        min={format(minDate, 'yyyy-MM-dd')}
      />
      {#if error}
        <span class="text-red-400 text-sm absolute -bottom-6 left-0"
          >Please enter your birth date.</span
        >
      {/if}
    </div>
    <button
      class="px-4 py-2 rounded-lg font-semibold border-green-500 bg-green-500 border-2 cursor-pointer flex-shrink-0"
      on:click={handleSubmit}>Start Now</button
    >
  </div>
</div>
