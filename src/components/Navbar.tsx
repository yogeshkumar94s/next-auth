import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className='bg-gray-800 text-white max-w-[1920px] mx-auto p-4'>
        <ul className='flex gap-5'>
          <li className='text-xl font-semibold'>
            <Link href='/' className='cursor-pointer'>
              Home
            </Link>
          </li>
          <li>
            <Link href='/trending' className='cursor-pointer'>
              trending news
            </Link>
          </li>
          <li>
            <Link href='/breaking' className='cursor-pointer'>
              breaking news
            </Link>
          </li>
          <li>
            <Link href='/login' className='cursor-pointer'>
              Login Page
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
