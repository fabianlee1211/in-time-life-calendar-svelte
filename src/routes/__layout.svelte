<script>
  import '../app.css';
  import Nav from '../components/nav.svelte';
  import Footer from '../components/footer.svelte';
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400;600&amp;display=swap"
    rel="stylesheet"
  />
</svelte:head>

<Nav />
<slot />
<Footer />
