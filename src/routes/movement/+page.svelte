<script lang="ts">
	import { Svelvet, Node } from '$lib';

	let position = { x: 300, y: 300 };
</script>

<div class="movement-page">
	<Svelvet minimap title="test">
		<Node bgColor="red" inputs="{4}" bind:position="{position}">
			<div class="node-body">
				<p>{JSON.stringify(position)}</p>
				<button
					on:click="{() => {
						position = { x: 200, y: 100 };
					}}">Move</button
				>
			</div>
		</Node>
	</Svelvet>
</div>

<style>
	.node-body {
		width: 200px;
		height: 300px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		cursor: grab;
	}

	:global(html),
	:global(body) {
		margin: 0;
		width: 100%;
		height: 100%;
	}

	.movement-page {
		width: 100vw;
		height: 100vh;
	}

	.node-body:active {
		cursor: grabbing;
	}
</style>
