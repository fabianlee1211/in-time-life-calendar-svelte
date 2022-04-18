<script>
  export let week = 0;
  export let progress = 0;
</script>

<div class="w-2 h-2 sm:w-4 sm:h-4 relative">
  <p class="sr-only">{`Week ${week}`}</p>
  <div
    class={`w-full h-full relative border overflow-hidden ${
      progress === 0 ? 'border-digit/20' : 'border-digit'
    }`}
  >
    <div
      class={`absolute left-0 top-0 bg-digit h-2 sm:h-4 transition-all`}
      style={`width: ${progress * 100}%`}
    />
  </div>
</div>
