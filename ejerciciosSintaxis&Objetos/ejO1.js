function busqueda(element, avArray){
    let i=0;
    while(i<avArray.length && avArray[i].id!=element.id) i++;
    if(i==avArray.length) return false;
    else return true;
}

function getAv(array){
    let avArray=[];
    let i=0;
    while(i<array.length){
        if(avArray.length==0 || !busqueda(array[i],avArray)){
            let cont=0;
            let gradeAcum=0;
            array.forEach((element) => {
                if (element.id==array[i].id) {
                    cont++;
                    gradeAcum+=element.grade;
                    //console.log('sese'+cont+''+gradeAcum+''+element.id)
                }
            });
            avArray.push({id:array[i].id, average: (gradeAcum/cont)})
            //console.log(JSON.stringify(avArray[i]));
        };
        i++;
    }
    //console.log("ysi")
    return(avArray);
}

grades = [
	{ id: 66666, grade: 6 },
	{ id: 12345, grade: 9 },
	{ id: 66666, grade: 8 },
	{ id: 12345, grade: 1 },
    {id: 49186, grade: 10},
    {id: 49186, grade: 10},
    {id: 49186, grade: 9.5},
    {id: 49000, grade: 7.5}
]

console.log(JSON.stringify(getAv(grades)));
