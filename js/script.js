/* 

creare una lista della spesa della.
stampare la lista della spesa sul html con un ciclo while.

 */

const lista = ['mele', 'pere', 'melanzane', 'latte', 'sugo', 'pasta'];

const listaEl = document.getElementById('list');

let i = 0;

while (i < lista.length) {
  const item = lista[i];
  
  listaEl.innerHTML = <li>${item}</li>
  
  // document.getElementById('list').innerHTML = lista;
}







