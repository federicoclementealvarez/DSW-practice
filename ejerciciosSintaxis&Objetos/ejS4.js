/*Crear una función que reciba un array y una cadena. La función debe revisar si la cadena ya se encuentra en el array y si no agregarla al final
y siempre debe devolver la posición del array donde se encuentra ya sea que existiera o si la agregó.*/

function checkAndInsert(array, value){
    let i=0;
    let flag=false;
    while (i<array.length && !flag){
        if(value==array[i]) flag=true;
        else i++;
    }
    //console.log(i===undefined);
    if(i==array.length) array.push(value);

    return(i);
}

let arr=['hola','xd',58,21,false,undefined];
console.log(index=checkAndInsert(arr,true));
console.log(arr);