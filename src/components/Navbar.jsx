import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="flex justify-center sm:justify-between bg-gray-800 items-center">
      <i id='logo' className="text-7xl p-7 text-white hidden sm:block">SS</i>
      <ul className="flex text-white text-xl space-x-11 m-7">
        <li><Link to='#'>Home</Link></li>
        <li><Link to='#'>Projects</Link></li>
        <li><Link to='#'>Contact</Link></li>
      </ul>
      <i id='logo' className="text-7xl p-7 text-white hidden sm:block">SS</i>
    </nav>
  )
}
export default Navbar