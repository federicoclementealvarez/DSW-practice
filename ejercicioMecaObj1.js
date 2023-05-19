class Example {
    skill="skl";
}

class Son extends Example{
    #hability="hab";
    getHability(){
        return(this.#hability);
    }
}

let s = new Son();

console.log(s.skill+" y "+s.getHability(),"\n");

function printProto (s){
    console.log("Prototype path:");
    while((s=s.__proto__)!=null){
        console.log(s);
    }
    if (s==null){console.log(s)}
}

printProto(s);
console.log(s==null);