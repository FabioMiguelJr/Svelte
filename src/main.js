import './app.css'
//import Contador from './contador/Contador.svelte'
import ListaCompras from "./lista-compras/ListaCompras.svelte";

const app = new ListaCompras({
  target: document.getElementById('app')
});

export default app
