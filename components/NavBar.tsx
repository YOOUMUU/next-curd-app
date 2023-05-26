import Link from 'next/link';
import NavLink from './NavLink';

const NavBar = () => {
  return (
    <nav className="bg-gray-950 text-white">
      <div className="container flex space-x-4 align-middle">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/notes">Notes</NavLink>
        <NavLink href="/create">Create</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
