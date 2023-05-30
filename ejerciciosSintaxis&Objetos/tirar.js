v="abaaacbdeiiioeeaaabbcduaabbbbbbcbecdabdddioeuaaaiiiibebeeecdbdddciiioeuee";
cont=0;
arreglo=[];
v.split('').forEach((elemento)=>{
    if(elemento) cont++;
    //if(!arreglo.includes(elemento)) arreglo.push(elemento);
})
console.log(cont);
console.log(arreglo);