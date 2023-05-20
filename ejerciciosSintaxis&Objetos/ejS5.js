let frase="materias aprobadas 0 habiendo rendido 0 veces";
fraseSplit=frase.split(' ');
console.log(fraseSplit);

function turnToString(fraseSplit,fraseNw,index=0){
    if(index!=fraseSplit.length){
        fraseNw+=fraseSplit[index]+' ';
        return(turnToString(fraseSplit,fraseNw,index+1))
    }
    else return(fraseNw);
}

function reprobar(fraseSplit){
    fraseSplit[5]=Number(fraseSplit[5])+1;
    return(turnToString(fraseSplit,''));
}

function aprobar(fraseSplit){
    fraseSplit[2]=Number(fraseSplit[2])+1;
    return(reprobar(fraseSplit));
}

console.log(aprobar(fraseSplit));
console.log(reprobar(fraseSplit)+'\n'+aprobar(fraseSplit)+'\n'+aprobar(fraseSplit)+'\n'+reprobar(fraseSplit));


//console.log('0'+1)
/*Crear 2 funciones: aprobar y reprobar
Al invocar la función aprobar(), se debe aumentar el número de materias aprobadas y veces rendidas en 1.
Al invocar la función reprobar sólo se debe aumentar las veces rendidas. */