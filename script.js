let displayresult=document.querySelector("#display-result");
let result=document.querySelector("#result");
let ageinput=document.querySelector("#ageinput");
let calbtn=document.querySelector("#calbtn");
let resetbtn=document.querySelector("#resetbtn");
let refresh=document.querySelector(".refresh");

let mytimer;
let age;

calbtn.addEventListener('click',function(){
    age = ageinput.value.trim();

    if(age == ""){

        clearInterval(mytimer);

        let alert1=document.querySelector(".alert1");
        alert1.classList.add('active');

        mytimer=setInterval(() => {
        alert1.classList.remove('active');
        }, 3000);
    }else if(isNaN(age) == true){

        clearInterval(mytimer);

        let alert2=document.querySelector(".alert2");
        alert2.classList.add('active');

        mytimer=setInterval(() => {
        alert2.classList.remove('active');
        }, 3000);
    } else {
        let answer = document.querySelector(".answer");
        answer.classList.add('active');

        let remaining_years=90 - age;
        let remaining_weeks=remaining_years*52;

        result.innerHTML=seprateNumberWithComma(remaining_weeks);
        ageinput.value=""
    }
})

function seprateNumberWithComma(weeks) {
    return weeks.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

resetbtn.addEventListener('click',function(){
   refresh.click();
})
