import React from "react";

function Food({name, picture}){
  return (
    <div>
      <h1>I Like {name}</h1>
      <img src={picture} alt={name}/>
    </div>
  ); 
}

const foodILike = [
  {
    id : 1,
    name : "Kimchi",
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqK-cBtC5sx63M_1i6ory_-71fETqEYRZNdX3Oa1aH7bJ6iaUId_h6qyUCjA0&usqp=CAc"  
  },
  {
    id : 2,
    name : "Samgyeopsal",
    image : "https://t1.daumcdn.net/cfile/tistory/9942B3395A3501C304" 
   },
  {
    id : 3,
    name : "Bibimbap",
    image : "https://mblogthumb-phinf.pstatic.net/MjAxNzA0MjRfMjI3/MDAxNDkzMDIzMjc4MjU2.L-3Vv9r0XjeRGGncaB0p0II6mw9-NoBfu2k4PMCrTdgg.jP8wA64wrWrXrH3ZTP4UBCPR6ZWppqqnhXkS8FPpYMQg.JPEG.estelle926/151435979-56a57a083df78cf772888a61.jpg?type=w800"
  },
  {
    id : 4,
    name : "sukiyaki",
    image : "http://homecuisine.co.kr/files/attach/images/142/718/035/46becc97dfd3c6403fd2700dcaa4ab7d.JPG"
  },
  {
    id : 5,
    name : "bulgogi",
    image : "https://recipe1.ezmember.co.kr/cache/recipe/2019/03/03/11baafbe81803965b17c3ab42a5992cb1.jpg"
  }


]

function App() {
  return (
    <div >
      <h1>hello!</h1>
      {foodILike.map(dish=>(
        <Food key ={dish.id} name={dish.name} picture ={dish.image}/>
      ))}  
    </div> 
  );
}

export default App;
