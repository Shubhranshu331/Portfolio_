import Link from 'next/link';

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-1 px-2 text-[#222222] text-sm font-lato hover:text-[#9c8f75] transition-colors duration-300"
    >
      {title}
    </Link>
  );
};

export default NavLink;