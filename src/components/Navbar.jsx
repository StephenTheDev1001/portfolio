import { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [animate, setAnimate] = useState({
    animation: 'animate-none',
    count: 0
  })

  const animateArr = ['animate-spin', 'animate-ping', 'animate-pulse', 'animate-bounce']

  const onClick = () => {
    setAnimate({
      ...animate,
      animation: animateArr[animate.count % 4]
    })
    setTimeout(() => {
      setAnimate({
        count: animate.count + 1,
        animation: 'animate:none'
      })
    }, "4000")

  }

  return (
    <nav className='flex justify-center sm:justify-between bg-gray-800 items-center sticky w-full mt-0 h-auto'>
      <i id='logo' className={`text-3xl sm:text-7xl p-7 text-white hidden sm:block ${animate.animation}`} onClick={onClick}>SS</i>
      <ul className="flex text-white text-xl space-x-11 m-5">
        <li><Link to='#'>Projects</Link></li>
        <li><Link to='#'>Contact</Link></li>
        <li><Link to='#'>Github</Link></li>
      </ul>
      <i id='logo' className={`text-7xl p-7 text-white hidden sm:block ${animate.animation}`} onClick={onClick}>SS</i>

    </nav>
  )
}
export default Navbar