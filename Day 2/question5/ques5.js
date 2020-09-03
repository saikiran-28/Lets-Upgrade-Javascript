var arr=[]
var len=Number(prompt("Enter the length of array"));
for (let j=0;j<len;j++)
{
    num=Number(prompt(`Enter number ${j+1}`))
    arr.push(num)
}

var new_arr=[]
for (let i=arr.length-1;i>=0;i--)
{
    new_arr.push(arr[i])
}
var string=""
new_arr.forEach(element => {
    string+=" "+String(element)
});

document.getElementById("5").innerHTML="Reversed order of given array is:"+"["+string+" ]";