import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-indigo-500 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">BaToko</h1>
      <div className="space-x-6">
        <Link to="/">Home</Link>
        <Link to="/product">Products</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link> 
        <Link to="register">Register</Link>    
      </div>
    </nav>
  );
}
