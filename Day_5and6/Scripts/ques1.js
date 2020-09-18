let array=[
    {
        name:"Sai Kiran",age:21,city:"Gajwel",salary:30000
    },
    {
        name:"Sai Krishna",age:23,city:"Hyderabad",salary:35000
    },
    {
        name:"Sai Aditya",age:35,city:"Bachupally",salary:40000
    },
    {
        name:"Tanuj",age:20,city:"Jeedimetla",salary:30000
    },
    {
        name:"Muralidhar",age:45,city:"Gajwel",salary:50000
    }   
]

function display(arrays)
{
    let tabledata = "";

    arrays.forEach(function (arr, index) {
      let currentrow = `<tr>
      <td>${index + 1}</td>
      <td>${arr.name}</td>
      <td>${arr.age}</td>
      <td>${arr.city}</td>
      <td>${arr.salary}</td>
      <td>
      <button onclick='deleteRecord(${index})'>delete</button>
      </td>
      </tr>`;
  
      tabledata += currentrow;
    });
  
    document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
   

}
display(array)
function deleteRecord(index)
{    
    array.splice(index,1);
    display(array)
}

function searchByName() {
    let searchValue = document.getElementById("searchName").value;
  
    let newdata = array.filter(function (array) {
      return (
        // array.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
        array.name.toUpperCase().startsWith(searchValue.toUpperCase()) != false
      );
    });
  
    display(newdata);
  }

  function searchByCity() {
    let searchValue = document.getElementById("searchCity").value;
    let newdata = array.filter(function (array) {
      return (
        // array.city.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
        array.city.toUpperCase().startsWith(searchValue.toUpperCase()) != false
      );
      
    });
  
    display(newdata);
  }