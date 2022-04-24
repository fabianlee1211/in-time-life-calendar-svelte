<script>
  export let week = 0;
  export let progress = 0;
</script>

<svg
  class="w-2 h-2 sm:w-4 sm:h-4"
  width="100%"
  height="100%"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect
    class="h-2 sm:h-4 stroke-digit fill-digit stroke-2 transition-all"
    width={`${progress * 100}%`}
    height="100%"
    data-week={week}
  />
  <rect
    class={`w-2 h-2 sm:h-4 sm:w-4 stroke-2 fill-transparent ${
      progress === 0 ? 'stroke-digit/20' : 'stroke-digit'
    }`}
    width="100%"
    height="100%"
    data-week={week}
  />
</svg>
