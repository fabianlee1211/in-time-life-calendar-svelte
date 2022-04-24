<script context="module">
  export function load({ error, status }) {
    return {
      props: {
        status,
        error
      }
    };
  }
</script>

<script>
  export let status;
  export let error;
</script>

<section
  class="flex justify-center flex-col items-center max-w-screen-lg my-14"
>
  <h1 class="text-7xl font-semibold">{status}</h1>
  <p class="text-lg mt-2">{error.message}</p>
  <a
    href="/"
    class="mt-8 px-4 py-2 rounded-lg font-semibold border-green-500 bg-green-500 border-2 cursor-pointer flex-shrink-0"
    >Back to Home</a
  >
</section>
