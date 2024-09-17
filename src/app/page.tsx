'use client'
import MyButton from "@/components/mybutton";
import { useState } from "react";
{/* Update counter seperately*/}
// export default function myApp() {
//   return (
//       <div>
//           <h1>Counters that update seperately</h1>
          
//                 <MyButton/>
//                 <MyButton/>
//       </div>
//   )
// }
{/* Update counter together*/}
export default function myApp() {
  const [count, setCount]=useState(0);
  function handleClick(){
    setCount(count+1);
  }
  return (
      <div>
          <h1>Counters that update together</h1>
          
                <MyButton count={count} onClick={handleClick}/><br/>
                <MyButton count={count} onClick={handleClick}/>
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