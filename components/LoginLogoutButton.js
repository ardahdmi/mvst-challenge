import Link from 'next/link';

const LoginLogoutButton = ({ endpoint }) => {
  const firstLetter = endpoint.slice(0, 1).toUpperCase();
  const buttonVal = `${firstLetter}${endpoint.slice(1)}`;
  return (
    <Link href={`/api/auth/${endpoint}`}>
      <a className='py-1 px-6 bg-black shadow-sm rounded-lg text-white m-4 font-bold'>
        {buttonVal}
      </a>
    </Link>
  );
};

export default LoginLogoutButton;
