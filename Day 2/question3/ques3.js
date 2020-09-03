var arr=["javascript","java","C++","C","python","perl","ruby"];
var search=prompt("Enter the language you want to search among programming languages","")
var flag = 0;
for (let i=0;i<=arr.length;i++)
{
    if(search == arr[i])
    {
    flag=1;
    break
}
}
if (flag === 1)
{
foundstring=`${search} is found in the given array`;
document.getElementById("3").innerHTML=foundstring
}
else
{
notfoundstring=`${search} is not found in the given array`;
document.getElementById("3").innerHTML=notfoundstring
}
