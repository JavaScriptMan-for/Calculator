//Начало
let scl = 1;
let str = "";
let isNotClick= true;
let anim;
if(isNotClick) {
    document.querySelectorAll('.calc').forEach(el => el.addEventListener('click', ()=>{
        setInterval(()=>{
            isClick = true
            document.querySelector('#tab').innerHTML = str;
            if(str == Infinity) {
                str = "∞"
            }
        },1)
        isNotClick = false;
        clearInterval(anim)
    }))
}
if(isNotClick) {
    document.addEventListener('keypress', ()=>{
        setInterval(()=>{
            isClick = true
            document.querySelector('#tab').innerHTML = str;
            if(str == Infinity) {
                str = "∞"
            }
        },10)
        isTrue = false;
        clearInterval(anim)
    })
}
if(isNotClick) {
    anim = setInterval(()=>{
      str = "0";
      setTimeout(()=>{
        str = ""
      },1000)
    },2000)
 
}


const AC = document.querySelector('#AC');
const sc = document.querySelector('#sc');
const pros = document.querySelector('#pros');
const del = document.querySelector('#del');

const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const umn = document.querySelector('#umn');

const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const minus = document.querySelector('#min');

const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const plus = document.querySelector('#plus');

const ziro = document.querySelector('#ziro');
const z = document.querySelector('#z');
const closee = document.querySelector('#close');
const result = document.querySelector('#res');

//Основа

AC.addEventListener('click', ()=>{
    str = ""
})
closee.addEventListener('click', ()=>{
    try {
        str = str.substring(0, str.length - 1);
    } catch (error) {
        alert('Результат нельзя стереть! Нажмите AC для записи нового примера!')
    }


})

sc.addEventListener('click', ()=>{
    if(scl == 1) {
        str+= "(";
        scl = 2
    } else {
        str+= ")";
        scl = 1
    }
})
pros.addEventListener('click', ()=>{
    str += '%'
})
z.addEventListener('click', ()=>{
    str+= "."
})
result.addEventListener('click', ()=>{
    calculete(str)
})


seven.addEventListener('click', ()=>{
    str+= "7"
})
six.addEventListener('click', ()=>{
    str+= "6"
})
eight.addEventListener('click', ()=>{
    str+= "8"
})
nine.addEventListener('click', ()=>{
    str+= "9"
})
five.addEventListener('click', ()=>{
    str+= "5"
})
four.addEventListener('click', ()=>{
    str+= "4"
})
three.addEventListener('click', ()=>{
    str+= "3"
})
two.addEventListener('click', ()=>{
    str+= "2"
})
one.addEventListener('click', ()=>{
    str+= "1"
})
ziro.addEventListener('click', ()=>{
    str+= "0"
})

del.addEventListener('click', ()=>{
    str+= "/"
})
umn.addEventListener('click', ()=>{
    str+= "*"
})
plus.addEventListener('click', ()=>{
    str+="+"
})
minus.addEventListener('click', ()=>{
    str+= "-"
})
function calculete(calcStr) {
    try {
        if(str.length >= 3)  {
            str = eval(calcStr);
            if(isNaN(str)) {
                str = "Неопределённость..."
            }
            if(str == undefined) {
                str = ""
            }
        }   
      return true;
    } catch (error) {
        alert("Ошибка")
        return false
    }
      
    } 
  

document.addEventListener('keydown', (e)=>{

if(e.key == 1) {
    str+= "1"
}
if(e.key == 2) {
    str += "2"
}
if(e.key == "3") {
    str+="3"
}
if(e.key == 4) {
    str+="4"
}
if(e.key == 5) {
    str+="5"
}
if(e.key == 6) {
    str+="6"
}
if(e.key == 7) {
    str += "7"
}
if(e.key == 8) {
    str += "8"
}
if(e.key == 9) {
    str+= "9"
}
if(e.key == 0) {
    str+= "0"
}
if(e.key == '*') {
    str+= "*"
}
if(e.key == "+") {
    str+= "+"
}
if(e.key == "-") {
    str+= "-"
}
if(e.key == "/") {
    str += "/"
}
if(e.key == ",") {
    str += "."
}
if(e.key == "(") {
    str+= "("
}
if(e.key == ")") {
    str+= ")"
}
if(e.key == "Backspace") {
    str = str.substring(0, str.length - 1);
}
if(e.key == "%") {
    str += "%"
}
if(e.key == "Delete") {
   str = ""
}
if(e.key == "Enter") {
    calculete(str)
}
})

