
let myLst = [
  {
    id: 1,
    name: "ASUS VivoBook Ultra",
    brand: "ASUS",
    size: "15.6 inch",
    color: "White",
    price: 60900,
    image: "./img/asus.jpg",
   description:
   "With standout colors and a color-blocking Enter key, ASUS VivoBook 15 adds flair and dynamism to daily computing.\
    With the latest AMD Ryzen 5 4500U Mobile Processor, VivoBook 15 provides the power you need to get things done."
    
  },
  {
    id: 2,
    name: "HP 15 Ryzen",
    brand: "HP",
    size: "15.6 inch",
    color: "Grey",
    price: 34810,
    image: "./img/hplaptop.jpg",
    description: 
  "Stay connected to what matters most with long-lasting battery life and a thin micro-edge bezel design.\
  Built to keep you productive and entertained from anywhere, the HP 15 Laptop features reliable performance and an expansive display."
  },

  {
    id: 3,
    name: "Lenovo IdeaPad S145",
    brand: "Lenovo",
    size: "15.6 inch",
    color: "White",
    price: 41990,
    image: "./img/lenovolap.jpg",
    description: "Engineered for long-lasting performance, the IdeaPad S145 delivers, powerful, smooth processing in a stylish,\
    light design. Perfect for everyday computing, this durable 15.6-inch laptop boasts exceptional audio and has fast,\
    secure storage options.",
  },

   {
    id: 4,
    name: "Mi TV 4X ",
    brand: "Mi",
    size: "50 inches",
    color: "black",
    price: 30999,
    image: "./img/mitv1.jpg",
    description: "The Mi TV 4X 50 features a 4K display. \
    Dolby Audio.Entertainment unlimited with upto 20+ content partners deeply integrated in Mi TV and 5000+ apps \
    and games available on Play Store. ",
  },
  {
    id: 5,
    name: "Smart LED TV 32LM563BPTC",
    brand: "LG ",
    size: "32 inches ",
    color: "Dark Iron Gray",
    price: 14990,
    image: "./img/lg1.jpg",
    description: "Enjoy movies, TV series, news, sports or any other entertainment on your favorite OTT apps \
    Key Features Include: Flat type display, Wide Viewing Angle, Active HDR, AI Launcher (with preview),\
     Home Dashboard, Magic Mobile Connection, Quad Core Processor, Cloud Photo & Video ",
  },
  
  {
    id: 6,
    name: "OnePlus TV 43Y1",
    brand: "OnePlus",
    size: "43 inches",
    color: "Black",
    image: "./img/oneplus1.jpg",
    price: 24999,
    description: "Treat your eyes to vivid imagery with a high colour range of 93% DCI-P3 \
     cinematic colour with the OnePlus TV 43Y1, get access to content online through Oxygeon Play, \
     enjoy thousands of movies, videos and music with all the popular content provider APP preinstalled. ",
  },
  {
    id: 7,
    name: "Sennheiser Momentum True Wireless",
    brand: "Sennheiser",
    size: "M",
    color: "Black",
    price: 24900,
    image: "./img/momentum.jpg",
    description: "Bluetooth Earbuds with Active Noise Cancellation, Smart Pause,\
     Customizable Touch Control and 28-Hour Battery Life - Black ",
  },

  {
    id: 8,
    name: "Bose SoundSport Free",
    brand: "Bose",
    size: "M",
    color: "Midnight Blue/Citron ",
    price: 18990,
    image:"./img/bose.jpg",
    description: " Truly wireless sport headphones for total freedom of movement, \
    packed full of technology that makes music sound clear and powerful\
    Earbuds are sweat and weather resistant (with an IPX4 rating) and come with 3 different pairs of stay\
     hear + sport tips (in sizes S/M/L) that provide a comfortable and secure fit ",
  },

  {
    id: 9,
    name: "Samsung Galaxy A51",
    brand: "Samsung",
    size: "128GB",
    color: "Metallic Silver",
    price: 25999,
    image: "./img/samsungmob.jpg",
    description: "The Samsung galaxy A51 is a complete device that provides for a onscreen fingerprint sensor \
    along with the Quad Camera Setup - 48MP (F1.8) Main Camera +12MP (F2.2) Ultra Wide Camera +5MP(F2.2) \
    Depth Camera +5MP(F2.4) Macro Camera and 32MP (F2.0) front facing Punch Hole Camera",
  },
  {
    id: 10,
    name: "Redmi K20 PRO",
    brand: "Xiaomi",
    size: "128GB",
    color: "Flame Red",
    price: 23000,
    image: "./img/redmi.jpg",
    description: "Qualcomm Snapdragon 855, 2.84 GHz processor. 4000mAh battery capacity. 16.23 cm (6.39\") \
    FHD+ Horizon AMOLED Display,. 6GB+128GB/8GB +256GB Flash Memory. Android Pie 9.0,.\
    48MP + 13MP + 8MP Triple Rear camera with 20MP Pop up camera.",
  },
  {
    id: 11,
    name: "OnePlus Nord 5G",
    brand: "OnePlus",
    size: "128GB",
    color: "Blue Marble",
    price: 27999,
    image: "./img/oneplus.jpg",
    description: "Nord, the latest product line by the Number 1 premium smartphone in India - OnePlus, \
    Nord comes with the same 48 MP Sony IMX586 sensor as the OnePlus 8 to reduce blur and shakiness from photos and video clips. \
    OnePlus' legacy of smooth experience is also passed to Nord with 90Hz fluid AMOLED display and Oxygen OS.\
    OnePlus Nord Pretty much everything you could ask for"
  },
  {
    id: 12,
    name: "Apple iPhone 11",
    brand: "Apple",
    size: "64Gb",
    color: "Black",
    price: 66990,
    image: "./img/apple.jpg",
    description: "Active noise Cancellation with Transparency mode, sweat and water resistance and a customaisable fit.",
  },
];

 let cart=[];
 let count=0;
 function displayproducts (newLst, checktype){
    
    let products = "";
    
    newLst.forEach((value) => {
      let {id, name, brand, size, color, price, description, image} = value
        
          products += `<div class="col-md-4 col-10 mx-auto">
            <div className="card border-primary mb-5 " style="width: 28rem; height: auto;" >
                        <img class="card-img-top" src=${image} alt="Card image cap" />
                          <div class="card-body">
                            <h5 class="card-title">${name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${brand} </h6>
                            <p> <strong>Size</strong>: ${size} <br/>
                                <strong>Color</strong>: ${color} <br/>
                                <strong>Price</strong>: ${price} <br/>
                              <strong>Description</strong>: ${description}
                            </p>`;
                            if (checktype === undefined) 
                             { products +=`<button onclick="addCart(${id})" 
                                class="btn btn-dark">add to cart</button>    
                               </div>
                              </div>
                            </div>` }
                            else
                           { products +=`<button onclick="removeCart(${id})" 
                                class="btn btn-outline-primary">remove</button>
                                </div>
                                </div>
                                </div>`}
    });   
    if (checktype === undefined) 
      document.getElementById("bCard").innerHTML = products 
      else
      document.getElementById("cart").innerHTML = products
   
      document.getElementById("cartimg").innerHTML = `<img src="./img/cart.png" alt="cart" class="src"> <span style="color:black;">${count} </span>`;
    
}
displayproducts(myLst);




//search 
function searchprod (srch) {

  let searchLst = myLst.filter(ele => {
      return (ele.name.toUpperCase().indexOf(srch.toUpperCase()) != -1) ||
              (ele.brand.toUpperCase().indexOf(srch.toUpperCase()) != -1) ||
              (ele.color.toUpperCase().indexOf(srch.toUpperCase()) != -1) ||
              (ele.description.toUpperCase().indexOf(srch.toUpperCase()) != -1);
  });
  displayproducts(searchLst);
}



//add to cart
function productid (id) {
   myLst.find(ele => { 
     return ele.id == id 
    });
  }

function cartCheck (id) {
   cart.filter(ele => {
     return ele.id == id ? true : false 
    });
}

function addCart (id)  {   
    
    let product = productid(id)
       
    if(cartCheck(id) == false){
        cart.push(product);
        count++;
    }
    else alert("product already in cart");
    displayproducts(cart, "cart");
}

//remove from cart
function removeCart (id)   {
    let index = cart.findIndex(ele => {
        return ele.id == id;
    });
    cart.splice(index, 1);
    count--;
    displayproducts(cart, "cart");
}


//search products by minimum to maximum values
function filterpro (event)  {

    event.preventDefault();
    let min = (document.getElementById("min").value != 0)? document.getElementById("min").value : 1000;
    let max = (document.getElementById("max").value != 0)? document.getElementById("max").value : 100000;
    let filterLst = myLst.filter(ele => {
        return (ele.price>=min && ele.price<=max);
    });
     
    displayproducts(filterLst);
    document.getElementById("min").value=""; document.getElementById("max").value=""
}
