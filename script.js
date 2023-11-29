// Dato l'oggetto { name: "John", age: 30 } crea una funzione che simula un'operazione asincrona, come il recupero dei dati da un'API. -Implementare una callback per gestire i dati recuperati. -Utilizzare setTimeout per simulare il ritardo dell'operazione.


function fetchDataFromAPI(callback) {
  console.log("Sto cercando i dati")
  const oggetto = {
    name: "John",
    age: 30
}
  setTimeout(()=>{
    return callback(oggetto)
  }, 3000)

}

function handleData(data) {
  console.log(data)
}

fetchDataFromAPI(handleData);