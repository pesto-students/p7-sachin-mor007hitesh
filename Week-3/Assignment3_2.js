// firstname = "hitesh";

// function print() {
//      var firstname = "Hitesh";
//     return this.firstname;
// } 

// const fun = print();
// console.log(fun); 

// var counter = {
//     count:0,
//     inc:function () {
//         console.log(this.count++);
//     }
// }
// counter.inc();

let details = {
    firstname:"Hitesh",
    lastname:"Mor"
}
function printname(hello,place) {
   console.log(hello+','+this.firstname +' '+this.lastname +' from '+place); 
}
function printname2() {
    console.log(','+this.firstname +' '+this.lastname); 
}
call_=printname.call(details,"hello","Sonipat");
// console.log(call_);
let bindss = printname2.bind(details);
bindss();
apply_=printname.apply(details,["hello","Sonipat"]);
// console.log(apply_);