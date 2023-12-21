let num=document.querySelector("#Enumber");
let check=document.querySelector("#check");
let tries=document.querySelector("#tries");
let vpos=document.querySelector("#vrai");
let fpos=document.querySelector("#faux");
let nom=document.querySelector(".name");
let alea=Math.floor(Math.random()*9000+1000);
let tr=10;

//check if x and y are equals
function verif(x,y){

    if(x==y)return 1;
    else return 0;
}

//count the number of wrong position
function verif2(x, y) {
    var count=0;
    let aleastring=y.toString();
    let numstring=x.toString();
        for (let i=0; i<4; i++) {
            // Check if the digit is in the target number but not in the same position
            if (aleastring[i] !== numstring[i] && numstring.includes(aleastring[i])) {
              count++;
            }
          }
    return count;
}
//mod et div
console.log(alea);
let x=alea%10;
//console.log(x);
let y=Math.floor(alea%100/10);
//console.log(y);
let z=Math.floor(alea%1000/100);
//console.log(z);
let v=Math.floor(alea/1000);
//console.log(v);

//new game
let neo=document.querySelector("#new").addEventListener("click",()=>{
    num.value="";
    tries.textContent="10";
    vpos.textContent="0";
    fpos.textContent="0";
    nom.textContent="Enter a number";
    tr=10;
    check.disabled=false;
})

//check button
check.addEventListener("click",()=>{

    //check if the user number is <9999
    if(Number(num.value)>9999){
        nom.textContent="Le nombre et > a 9999";
    }
    else{
        //check if the user number is >1000
        if(Number(num.value)<1000){
            nom.textContent="The integer must be entered between 1000 and 9999";
        }
        else{
            nom.textContent="Enter a number between 1000 and 9999";
            tr--;
            tries.textContent=tr.toString();
            if(tr>=1){
                //mod and div for the user number 
                let x2=Number(num.value)%10;
                let y2=Math.floor(Number(num.value)%100/10);
                let z2=Math.floor(Number(num.value)%1000/100);
                let v2=Math.floor(Number(num.value)/1000);
                //number of the right positions
                let s=verif(x,x2)+verif(y,y2)+verif(z,z2)+verif(v,v2);
                vpos.textContent=s;
                //check if the user number is equal to the secret code
                if(s==4) {
                    nom.textContent="WIN 💃";
                    check.disabled=true;}
                //number of the wrong position
                let s2=verif2(num.value,alea);
                fpos.textContent=s2;
            }
            else{
                nom.textContent="Lose🤦‍♀️The secret code is: "+alea;
                check.disabled=true;
            }
        }   
    }
})

