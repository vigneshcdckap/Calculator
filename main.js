// function che(val){
//     document.getElementById('result').value+=val;
// }
// function solve(){
//     var value1= document.getElementById('result').value;
//     let value2 = eval(value1);
//     document.getElementById('result').value=value2;	
// }
function cleard(){
document.getElementById('result').value="";
}
function delet() {
    document.getElementById('result').value= document.getElementById('result').value.slice(0,-1);  
}


var numb = document.getElementById("result");

function che(a)
{
    numb.value += a;
}


function check()
{
    var result = [];
    if(numb.value.includes("+"))
    {
        result = numb.value.split("+");
        return parseFloat(result[0]) + parseFloat(result[1]);
    }
    
    else if (numb.value.includes("-"))
    {
        result = numb.value.split("-");
        return parseFloat(result[0]) - parseFloat(result[1]);
    }
    else if (numb.value.includes("*"))
    {
        result = numb.value.split("*");
        return parseFloat(result[0]) * parseFloat(result[1]);
    } 
    else if (numb.value.includes("/"))
    {
        result = numb.value.split("/");
        return parseFloat(result[0]) / parseFloat(result[1]);
    }
    else if(numb.value.includes("%"))
    {
        result = numb.value.split("%");
        return parseFloat(result[0]) % parseFloat(result[1]);
    }
    else{
        return alert("Invalid")
    }
}
function solve()
{
    a = check();
    document.getElementById("result").value = a;
}