import { FiUsers, FiStar, FiMail, FiMapPin } from 'react-icons/fi';
import { BiBuilding } from 'react-icons/bi';

const UserProfileCard = ({ user }) => {
  return (
    <div className='flex flex-col sticky'>
      <img
        src={user.avatarUrl}
        alt='User Avatar'
        className='rounded-full border-2 shadow-sm mb-2 sm:mb-4 after:'
      />
      <span className='font-bold text-xl sm:text-2xl'>{user.name}</span>
      <span className='text-gray-500'>{user.login}</span>
      <span className='mb-2 mt-2 sm:mb-4 text-sm'>{user.bio}</span>
      <div className='flex flex-row items-center space-x-2 text-sm'>
        <FiUsers />
        <p>
          <span className='font-semibold text-base mr-1'>
            {user.followers.totalCount}
          </span>
          Followers
        </p>
        <p>
          <span className='font-semibold text-base mr-1'>
            {user.following.totalCount}
          </span>
          Following
        </p>

        <div className='flex items-center space-x-1'>
          <FiStar size={15} />
          <span className='font-semibold text-base'>
            {user.starredRepositories.totalCount}
          </span>
        </div>
      </div>

      <div className='flex flex-col mt-4'>
        {user.email ? (
          <div className='flex items-center space-x-1'>
            <FiMail />
            <span>{user.email}</span>
          </div>
        ) : null}
        {user.location ? (
          <div className='flex items-center space-x-1'>
            <FiMapPin />
            <span>{user.location}</span>
          </div>
        ) : null}
        {user.company ? (
          <div className='flex items-center space-x-1'>
            <BiBuilding />
            <span>{user.company}</span>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default UserProfileCard;
