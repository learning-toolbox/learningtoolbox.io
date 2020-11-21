<template>
	<div class="min-h-screen flex flex-col p-4 bg-gray-200">
		<header class="mb-12 pt-4 md:pl-2">
			<h1 class="font-medium text-4xl">
				<a class="relative z-20 hide-underline" href="/">The Learning Toolbox</a>
			</h1>
		</header>

		<div class="prose-sm md:prose 2xl:prose-xl flex-1 mx-auto flex flex-col">
			<main class="flex-1">
				<Content />
			</main>

			<footer class="mt-12 pt-1 border-t-2 border-gray-400 text-right">
				©<span class="font-light">TheLearningToolbox</span><span class="font-extrabold">2020</span>
			</footer>
		</div>
	</div>
</template>
