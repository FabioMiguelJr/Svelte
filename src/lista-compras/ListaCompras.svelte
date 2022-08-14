<script>
	import ListaItem from "./ListaItem.svelte";

	let itens = [
		{ comprado: false, descricao: "Pão de forma" },
		{ comprado: true, descricao: "manteiga" },
	];

	// let lerDescricao = "";
	let inputEl = null;
	//function handleInput(e) {
	//	lerDescricao = e.target.value;
	//}

	function adicionarItem() {
		//itens = [...itens, { comprado: false, descricao: lerDescricao }];
		itens = [...itens, { comprado: false, descricao: inputEl.value }];
		//lerDescricao = "";
		inputEl.value = "";
	}

	function removerItem(item) {
		itens = itens.filter((i) => i !== item);
	}
</script>

<h2>Lista de Compras</h2>
<!-- <input value={lerDescricao} on:input={handleInput} /> -->
<!-- <input id="fillIn" bind:value={lerDescricao} /> -->
<form on:submit|preventDefault={adicionarItem}>
	<input id="fillIn" bind:this={inputEl} />
	<button type="submit">Adicionar</button>
</form>

{#if itens.length === 0}
	<div>A lista está vazia</div>
{:else}
	{#each itens as item, i}
		<ListaItem bind:comprado={item.comprado} descricao={item.descricao} on:itemremovido={() => removerItem(item)} />
		<!-- <div id="divItens">
			<label>
				<input type="checkbox" bind:checked={item.comprado} />
				{item.descricao}
			</label>
		</div> -->
	{/each}
{/if}

<div>Itens pendentes: {itens.filter((item) => !item.comprado).length}</div>
