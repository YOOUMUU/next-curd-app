'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  href: string;
  children: string;
}

const NavLink = ({ href, children }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={` rounded px-4 py-2 font-medium ${
        isActive
          ? ' text-gray-950 bg-white'
          : ' hover:text-gray-950 hover:bg-white'
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
