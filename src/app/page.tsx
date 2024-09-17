'use client'
import { Button } from "@/components/ui/button"
import { Bold } from "lucide-react";
import { useCallback } from "react";

function MyButton() {
  //function MyButton() {
    function handleClick() {
      alert('You clicked me!');
    }
  
    return (
      <Button variant="outline" onClick={handleClick} >
        I'm a button
      </Button>
    );
  }
  

export default function myApp() {
  return (
      <div>
          <h1>Welcome to my app</h1>
          
                <MyButton/>
      </div>
  )
}

// const Products=[
//   {title: "Cabbage", isFruit: false, id:1},
//   {title: "Garlac", isFruit: false, id:2},
//   {title: "Apple", isFruit: true, id:3},
// ]

// export default function ShoppingList() {
//   const listItems=Products.map(product => 
//     <li
//     key={product.id}
//     style={{
//       color: product.isFruit? 'magenta': 'darkgreen'
//     }}
//     >
//       {product.title}
//     </li>
//   );
//   return  (
//     <ul>{listItems}</ul>
//   );
// }