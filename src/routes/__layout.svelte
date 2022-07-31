<script>
	import '../app.css';
	import Navbar from '../components/navbar.svelte';
</script>

<Navbar />
<div class="container mx-auto sm:max-w-full px-6 pt-3 mb-20">
	<slot />
</div>
