const inputDecimal=document.getElementById('decimal');
const convertBtn=document.getElementById('convert');
const binaryOutput=document.getElementById('binary')
const decimalToBinary=(number)=>{
    
    if(number==0 || number==1)
    {
        return String(number)
    }
    else
    {
       return  decimalToBinary(Math.floor(number/2))+(number%2)
    }
}
convertBtn.addEventListener('click',()=>{
    const decimal=parseInt(inputDecimal.value)
    if(decimal<0)
    {
        alert("Please insert positive number")
        return
    }

    inputDecimal.value=""
    binaryOutput.innerText=decimalToBinary(decimal)
})
inputDecimal.addEventListener('keydown',(e)=>{
    const decimal=parseInt(inputDecimal.value)

if(e.key=='Enter')
{   
    inputDecimal.value=""
    binaryOutput.innerText=decimalToBinary(decimal)
}
})
pa