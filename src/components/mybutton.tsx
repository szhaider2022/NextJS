'use client';
{/*Update the Count Seperately*/}

import { Button } from "@/components/ui/button"
import { Bold } from "lucide-react";
import { useState } from "react";


// function MyButton() {
//   const [count, setCount]=useState(0);
//      function handleClick() {
//       setCount(count + 1);
//       //alert('You clicked me!');
    
//     }
  
//     return (
//       <Button variant="outline" onClick={handleClick} className={`px-4 py-2  text-white  rounded-lg my-2 
        
//         ${count > 10 ? "bg-red-500" : "bg-blue-500" }
        
//         `}>

//         Clicked {count} times
//       </Button>
//     );
//   }
  
//   export default MyButton;
{/** Update the counter Together */}
//import myApp from "@/app/page";
//import { useState } from "react";
function MyButton ({count, onClick}) {
  return (
    <Button onClick={onClick}>
      Clicked {count} times
    </Button>
  );
}
export default MyButton;