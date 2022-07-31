<script>
	export let url = '';
	export let name = '';
</script>

<div
	class="p-3 bg-purple-100 shadow-lg hover:scale-110 transition duration-300 shadow-gray-300 flex flex-col items-center sm:w-52 w-20"
>
	<img src={url} alt={name} class="w-52" />
	<h1 class="text-xs sm:text-lg text-center text-gray-800 uppercase">{name}</h1>
</div>
