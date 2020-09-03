var arr=["javascript","C++","C","python","perl","ruby","java"];
var string=" "
for (var i=0;i<arr.length;i++)
{ 
    if( arr[i].search("a") !=-1)
    {
        string+="  " +arr[i]
    }
}

document.getElementById("4").innerHTML=string+" are the languages which have 'a' in them among the languages in an array";