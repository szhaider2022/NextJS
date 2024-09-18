<<<<<<< HEAD
import { client } from "@/sanity/lib/client";
import Image from "next/image";

export default async function Home() {
  let query=`*[_type=="book"] {
  book_name
  
}`;
  let res= await client.fetch(query);
  console.log(res);
  return (
    < >

         </>
  );
}
=======
<<<<<<< HEAD
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
=======
import OrderButton from "./OrderButton"

interface IBook {
  id: number,
  name: string,
  type: string,
  available: boolean
}

async function Homepage() {

  let baseUrl = "https://simple-books-api.glitch.me"

  let res = await fetch(`${baseUrl}/books`)

  let books: IBook[] = await res.json()


  return (
    <div> 
      <h1>Books</h1>
      <ul>
        {books.map((b) => {
            return (
              <li key={b.id} className="p-3 text-lg border" >
                {b.name}
                <OrderButton />
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Homepage
>>>>>>> 28670b236975ad38c35c01fd572b22001068d679
>>>>>>> dbeb70bc2e2052cbb3232c18cd930bb33338aaa0
