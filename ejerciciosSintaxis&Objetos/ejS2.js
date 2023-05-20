//Crear una función que reciba un array de palabras y una cadena e indique cuantas veces se encuentra la palabra en el array.

function countAps (array, string){
    let count=0;
    array.forEach(element => {
        count+=((element.toUpperCase().split(string.toUpperCase()).length)-1);
    })
    console.log(count);
}

countAps(['hola aahola o o hol a holaa','hola     ho la holalala','hOLa'],'HOLA'); //debería mostrar 6