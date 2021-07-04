import { FiStar } from 'react-icons/fi';
import { BiGitRepoForked } from 'react-icons/bi';
import { GiPlainCircle } from 'react-icons/gi';

const RepoCard = ({ mainLang, repo }) => {
  return (
    <ul className='mx-4 sm:mx-2'>
      <li
        key={repo.id}
        className='flex w-full bg-gray-50 p-2 sm:p-4 border hover:border-gray-300 my-2 rounded-md shadow-sm'>
        <div className='flex flex-col'>
          <a
            href={repo.url}
            className='font-semibold text-lg text-blue-600 hover:underline'>
            {repo.name}
          </a>
          <span className='text-sm text-gray-500 my-2'>{repo.description}</span>
          <div className='flex space-x-6'>
            <div className='flex items-center space-x-1'>
              <GiPlainCircle style={{ color: `${mainLang.color}` }} />
              <span className='font-light text-sm text-gray-500'>
                {mainLang.name}
              </span>
            </div>
            <div className='flex items-center space-x-1'>
              <FiStar className='text-gray-500' />
              <span className='font-light text-sm text-gray-500'>
                {repo.stargazerCount}
              </span>
            </div>
            <div className='flex items-center space-x-1'>
              <BiGitRepoForked className='text-gray-500' />
              <span className='font-light text-sm text-gray-500'>
                {repo.forkCount}
              </span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default RepoCard;
