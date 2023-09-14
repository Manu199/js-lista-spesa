/* 

creare una lista della spesa della.
stampare la lista della spesa sul html con un ciclo while.

 */

const lista = ['mele', 'pere', 'melanzane', 'latte', 'sugo', 'pasta'];

let i = 0;


while (i < lista.length) {
  console.log(lista[i])
  i++;
  
}


  document.getElementById('list').innerHTML = lista + ' ' + i;





