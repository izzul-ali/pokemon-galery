<script>
	import { goto } from '$app/navigation';

	let open = false;
</script>

<header class="w-full p-5 relative bg-purple-50">
	<div class="left-0 top-0 flex justify-between sm:justify-around items-center h-full">
		<h1 class="text-lg sm:text-lg md:text-xl lg:text-2xl font-bold">Pokemon</h1>

		<div class="w-1/2 sm:flex sm:justify-end space-x-8 hidden text-gray-700 text-sm">
			<a href="/">Home</a>
			<a href="/">About</a>
			<a href="/">Contact</a>
		</div>

		<div
			on:click={() => {
				open = !open;
			}}
			class="flex flex-col h-full justify-between sm:hidden"
		>
			<span class="w-5 h-[3px] mb-1 bg-slate-800 rounded-md" />
			<span class="w-5 h-[3px] mb-1 bg-slate-800 rounded-md" />
			<span class="w-5 h-[3px] mb-1 bg-slate-800 rounded-md" />
		</div>
	</div>

	{#if open}
		<div
			class="mt-4 text-xs shadow-lg shadow-gray-500 sm:hidden left-1/2 w-full -translate-x-1/2 top-10 py-4 absolute text-center bg-purple-50 text-gray-700"
		>
			<ul class="space-y-3">
				<li>
					<div
						on:click={() => {
							open = false;
							goto('/');
						}}
						class="cursor-pointer hover:text-purple-700"
					>
						Home
					</div>
				</li>
				<li>
					<div
						on:click={() => {
							open = false;
							goto('/');
						}}
						class="cursor-pointer hover:text-purple-700"
					>
						About
					</div>
				</li>
				<li>
					<div
						on:click={() => {
							open = false;
							goto('/');
						}}
						class="cursor-pointer hover:text-purple-700"
					>
						Contact
					</div>
				</li>
			</ul>
		</div>
	{/if}
</header>
