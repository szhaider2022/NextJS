import Link from "next/link";


const Navbar = (props: {name: string}) => {
  return (
    <div>
       
      <Link href='/'>Home</Link>
      <br/>
      <Link href='/about'>About</Link>
      <br/>
      <Link href='/contact'>Contact</Link>
      <h1>{props.name}</h1>
    </div>
  );
};
export default Navbar