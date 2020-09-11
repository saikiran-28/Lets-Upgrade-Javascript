let arr=[
    {
        name:"Sai Kiran",age:21,country:"India",hobbies:["reading books","playing cricket"]
    },
    {
        name:"Sai Krishna",age:23,country:"India",hobbies:["reading books"]
    },
    {
        name:"Sai Aditya",age:35,country:"Australia",hobbies:["reading books","playing badminton"]
    },
    {
        name:"Tanuj",age:20,country:"USA",hobbies:["reading novels","playing games"]
    },
    {
        name:"Muralidhar",age:45,country:"India",hobbies:["playing games"]
    }   
]

function display()
{
    arr.forEach(element => {
       console.log(element) 
    });
}
function ages()
{
    arr.forEach(element => {
        if(element.age < 30)
        console.log(element)
        
     
    });
}
function country()
{
    arr.forEach(element => {
        if(element.country =="India")
        console.log(element)
        
     
    });
}
