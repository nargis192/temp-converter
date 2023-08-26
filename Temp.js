// get all the inputs and button
let cels=document.getElementById("celsinput");
// console.log(cels);
let fer=document.getElementById("ferhninput");
// console.log(fer);
let kel=document.getElementById("kelvininput");
// console.log(kel);

let celsbtn=document.getElementById("btnC");
let ferbtn=document.getElementById("btnF");
let kelsbtn=document.getElementById("btnK");
// console.log(celsbtn);
// console.log(ferbtn);
// console.log(kelsbtn);

let clearbtn=document.getElementById("btnclear");
// console.log(btnclear);

// with the use of change event of addeventlistener we are tryig to add fucntionality
cels.addEventListener("change" , () => {
    let input = cels.value;      // assigning input value
    let numinput=parseFloat(input); //converting into int as by default it is in string
    // console.log(numinput);   

    let Fformula = (1.8*numinput + 32).toFixed(2); //formula to convert into ferhaniet // using tofixed to fixed the length of decimal
    // console.log(Fformula);
    // let intfformula = parseInt(Fformula);
    // fer.value.innerHTML=intfformula;
    // console.log(intfformula);
    fer.value=Fformula;   

    let Kformula=(numinput+ 273.15).toFixed(2);//formula to convert into kelvin // using tofixed to fixed the length of decimal
    // console.log(Kformula);
    kel.value=Kformula;
})

fer.addEventListener("change" , () => {
    let input = fer.value;      // assigning input value
    let numinput=parseFloat(input);//converting into int as by default it is in string
    // console.log(numinput);

    let Cformula =  ((numinput - 32) * 5/9).toFixed(2);//formula to convert into celsius// using tofixed to fixed the length of decimal
    // console.log(Cformula);
    cels.value=Cformula;

    let Kformula = ((numinput - 32)* 5 / 9 + 273.15).toFixed(2);//formula to convert into kelvin// using tofixed to fixed the length of decimal
    // console.log(Kformula);
    kel.value=Kformula;
})

kel.addEventListener("change" , () => {
    let input = kel.value;     // assigning input value
    let numinput=parseFloat(input);//converting into int as by default it is in string
    // console.log(numinput);

    let Cformula =  (numinput - 273.15).toFixed(2);//formula to convert into celsious// using tofixed to fixed the length of decimal
    // console.log(Cformula);
    cels.value=Cformula;

    let Fformula = ((numinput - 273.15) * 9/5 + 32 ).toFixed(2);//formula to convert into ferhaniet // using tofixed to fixed the length of decimal
    // console.log(Fformula);
    fer.value=Fformula;
})

// to clear all the value into zero we are using click event of all clear button
clearbtn.addEventListener("click" , () => {
    cels.value=0;
    fer.value=0;
    kel.value=0;
})

