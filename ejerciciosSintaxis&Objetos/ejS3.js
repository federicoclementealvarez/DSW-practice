/*Crear una función que reciba 2 parámetros: un array con valores de múltiples tipos y una cadena indicando el tipo
(boolean, number, string, object, function, etc) y devuelva un nuevo array sólo con los elementos de ese tipo*/

function generateByTypes(array, value){
    let nwArray=[];
    array.forEach((element)=>{ if(typeof(element)===typeof(value)) nwArray.push(element); });
    return (nwArray);
}

console.log(generateByTypes([true, false, '', 54, 'yes', undefined, true], (1==1)));

