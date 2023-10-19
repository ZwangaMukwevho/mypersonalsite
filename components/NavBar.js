import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import Link from 'next/link'
import headerNavLinks from '@/data/headerNavLinks'

const NavBar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen)
  }

  return (
    <div className="block md:hidden">
      <div className="bg-primary absolute right-0 top-0 mr-1 mt-6 p-4">
        <button onClick={toggleDropdown}>
          <FaBars size={30} />
        </button>
      </div>

      {isDropdownOpen && (
        <div className="border-primary absolute left-0 right-0 top-16 bg-white p-2 opacity-95 shadow-md duration-300 ease-in-out">
          <ul className="text-black">
            {headerNavLinks.map((link) => (
              <li
                key={link.title}
                className="border-primary border-b py-2 text-2xl font-bold tracking-widest"
              >
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default NavBar
