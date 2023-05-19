class Example {
    skill="un capo";
}

class Son extends Example{
    #hability="crack";
    getHability(){
        return(this.#hability);
    }
}

s = new Son();

console.log(s.skill+" y "+s.getHability(),"\n");

function printProto (s){
    console.log("Prototype path:");
    while((s=s.__proto__)!=null){
        console.log(s);
    }
    if (s==null){console.log(s)}
}

printProto(s);