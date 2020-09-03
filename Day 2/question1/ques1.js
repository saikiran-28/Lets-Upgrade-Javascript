// Program to find whether a given character is found in a string or not.
var string=prompt("Please enter the string","sai kiran");

var char=prompt("Please enter the character you want to search for","a");
let index;
var flag=0;
for (let i=0;i<string.length;i++){
    if(char == string[i])
    {
    flag=1;
    index=i
    }
}
if (flag === 1)
{
found_string=`character ${char} was found in the given string ${string}`
document.getElementById("1").innerHTML=found_string
}
else
{
notfound_string=`character ${char} was not found in the given string ${string}`
document.getElementById("1").innerHTML=notfound_string
}