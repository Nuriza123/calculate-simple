let num1= document.getElementById('num1')
let num2= document.getElementById('num2')




const PLUS =()=>{
let plus = (parseInt(n1.value)+parseInt(n2.value))
document.getElementById('result').innerHTML=plus
}

const minus =()=>{
    let minus = (parseInt(n1.value)-parseInt(n2.value))
    document.getElementById('result').innerHTML=minus
}
const delenie=()=>{
    let delenie = (parseInt(n1.value)/parseInt(n2.value))
    document.getElementById('result').innerHTML=delenie
}
const umnoj=()=>{
    let umnoj= (parseInt(n1.value)*parseInt(n2.value))
    document.getElementById('result').innerHTML=umnoj
}