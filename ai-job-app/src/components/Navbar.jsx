import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">SmartHire</h1>
      <div className="space-x-4">
        <Link to="/upload" className="hover:text-blue-600">Upload CV</Link>
        <Link to="/matches" className="hover:text-blue-600">My Matches</Link>
        <Link to="/login" className="hover:text-blue-600">Logout</Link>
      </div>
    </nav>
  );
}
