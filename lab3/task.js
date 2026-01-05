var a=0
var total=0
const discount=10
function order(){
    document.getElementById("hi").style.display="block";
}
function close(){
    document.getElementById("hi").style.display="none";
}
function confirm(){
    var a=document.querySelector("input").value;
    if (a==0||a>7){
        alert("number of plates must be (1-7)");
        return;
    }
    alert("you have ordered "+a+" plates");
    cal();
    document.getElementById("hi").style.display="none";
    var ob={
        nofi:a
    };
    console.log(a)
}
function cal(){
    let b=document.getElementById("dosa").dataset.price;
    let a=document.querySelector("input").value;
    var total=(a*b)-((a*b)*(discount/100));
    alert("Your total cost is ₹"+(a*b)+"\nYour total cost after applying discount is ₹"+total);
    var ob={
        cost:total
    };
    console.log(total)
}
