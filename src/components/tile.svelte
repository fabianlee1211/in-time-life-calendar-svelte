<script>
  export let week = 0;
  export let progress = 0;
</script>

<div class="w-2 h-2 sm:w-4 sm:h-4 relative">
  <p class="sr-only">{`Week ${week}`}</p>
  <div class="w-full h-full relative border border-neon/70 overflow-hidden">
    <div
      class={`absolute left-0 top-0 bg-neon/70 h-4 transition-all`}
      style={`width: ${progress * 100}%`}
    />
  </div>
</div>
