const express = require('express');
const app = express();

app.set("view engine","ejs");

const RESTAURANT = {
  name:'The Green Byte Bistro',
  isOpen:true,
  address:'742 Evergreen Rd, Mapleview, OS 45502',
  phone:'555-321-9876',
  menu:[
  {id:1,name:'Quantum Quinoa Mushroom Burger',price:13,rating:4,category:'mains',details:'Vegetarian quinoa mushroom burger'},
  {id:2,name:'Binary Berry Cheesecake',price:10.11,rating:3,category:'desserts',details:'Creamy berry cheesecake'},
  {id:3,name:'Recursive Rigatoni',price:17,rating:5,category:'mains',details:'Rigatoni pasta with tomato sauce'},
  {id:4,name:'Pumpkin Pi Squared',price:3.14,rating:5,category:'desserts',details:'Pumpkin dessert'},
  {id:5,name:'Fibonacci String Bean Fries',price:11.23,rating:5,category:'sides',details:'Crispy string bean fries'}
  ]
}

app.get("/",(req,res)=>{
res.render("home",{restaurant:RESTAURANT})
})

app.get("/menu",(req,res)=>{
res.render("menu",{menu:RESTAURANT.menu})
})

app.get("/menu/:category",(req,res)=>{

const category=req.params.category

const menuItems=RESTAURANT.menu.filter(
item=>item.category===category
)

res.render("category",{menuItems,category})

})

app.listen(3000,()=>{
console.log("Server running on port 3000")
})