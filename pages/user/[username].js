import { useRouter } from 'next/router';
import { GET_USER } from '../../queries';
import client from '../../apollo-client';
import Link from 'next/link';
import { FiUsers, FiStar } from 'react-icons/fi';

const UserPage = ({ userData }) => {
  const router = useRouter();
  const { username } = router.query;
  const user = userData.user;
  return (
    <div className='flex flex-col sm:flex-row items-center m-0 sm:m-6'>
      <div className='flex flex-col'>
        <img
          src={userData.user.avatarUrl}
          alt='User Avatar'
          className='rounded-full border-2 shadow-sm mb-2 sm:mb-4'
        />
        <span className='font-bold text-xl sm:text-2xl'>{user.name}</span>
        <span className='text-gray-500'>{user.login}</span>
        <span className='mb-2 mt-2 sm:mb-4 text-sm'>{user.bio}</span>
        <div className='flex flex-row items-center space-x-2 text-sm'>
          <FiUsers />
          <p>
            <span className='font-semibold text-base'>
              {user.followers.totalCount}
            </span>{' '}
            Followers |
          </p>
          <span>{user.following.totalCount} Following</span>
          <div className='flex items-center space-x-1'>
            <FiStar />
            <span>{user.starredRepositories.totalCount}</span>
          </div>
        </div>

        <p> {user.email}</p>
        <p>Location: {user.location}</p>
        <p>Company: {user.company}</p>
        <p>Github Star: {user.isGitHubStar ? 'star' : 'not star'}</p>
      </div>
      <Link href='/'>
        <a className='m-4 p-4 text-white font-semibold bg-purple-400 rounded-sm shadow-sm'>
          Back home
        </a>
      </Link>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { data } = await client.query({
    query: GET_USER,
    variables: { username: context.query.username },
  });

  return {
    props: {
      // userData: data.user.followers.totalCount,
      userData: data,
    },
  };
}

export default UserPage;
