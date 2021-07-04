import { GET_USER } from '../../queries';
import { useState } from 'react';
import client from '../../apollo-client';
import Link from 'next/link';
import UserProfileCard from '../../components/UserProfileCard';
import RepoCard from '../../components/RepoCard';
import { useRouter } from 'next/router';
import Head from 'next/head';

const UserPage = ({ userData }) => {
  const totalRepo = userData.repositories.totalCount;
  const reposFull = userData.repositories.nodes;
  const pageInfo = userData.repositories.pageInfo;
  const [page, setPage] = useState(0);
  const [repos, setRepos] = useState(reposFull);
  const [searchTerm, setSearchTerm] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);
  const router = useRouter();

  const onSubmit = (event) => {
    event.preventDefault();
    setIsEmpty(false);
    const repoFiltered = reposFull.filter((repo) => {
      return repo.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    if (repoFiltered.length === 0) setIsEmpty(true);
    setRepos(repoFiltered);
  };

  return (
    <div className='flex flex-col sm:flex-row items-center sm:items-start m-0 sm:m-6'>
      <Head>
        <title>Explore {router.query.username}'s repos</title>
        <link rel='icon' href='/favicon.png' />
      </Head>

      <UserProfileCard user={userData} />
      <div className='flex flex-col w-full mx-4 '>
        <form onSubmit={onSubmit}>
          <input
            className='w-10/12 sm:w-full p-2 sm:px-4 my-4 mx-auto border-2 shadow-sm rounded-md outline-none hover:border-purple-400 focus:border-purple-400'
            placeholder='Type to filter and press'
            type='text'
            autoComplete='off'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
        {isEmpty ? (
          <h1 className='mx-auto font-semibold text-white bg-red-500 rounded-md shadow-md py-1 px-4'>
            None of the repos matched. Try again
          </h1>
        ) : null}
        {repos.slice(page, page + 10).map((repo) => {
          const mainLang = repo.languages.nodes.slice(0, 1)[0];
          return <RepoCard key={repo.id} repo={repo} mainLang={mainLang} />;
        })}
        <div className='self-center flex mt-4'>
          <button
            disabled={isEmpty | (page - 10 < 0) ? true : false}
            className='disabled:text-gray-400 disabled:cursor-default self-center py-1 px-5 text-purple-600 transition duration-200 hover:text-white hover:bg-purple-600 font-semibold bg-gray-50 disabled:bg-gray-100 border rounded-sm rounded-r-none shadow-sm'
            onClick={() => setPage((prev) => prev - 10)}>
            Previous
          </button>
          <button
            disabled={isEmpty | (page + 10 > totalRepo) ? true : false}
            className='self-center py-1 px-5 text-purple-600 transition duration-200 hover:text-white hover:bg-purple-600 font-semibold bg-gray-50 border rounded-sm shadow-sm rounded-l-none disabled:text-gray-400 disabled:cursor-default disabled:bg-gray-100'
            onClick={() => setPage((prev) => prev + 10)}>
            Next
          </button>
        </div>
        <Link href='/'>
          <a className='text-center sm:self-center m-4 mt-6 px-12 py-2 text-white font-semibold bg-purple-400 rounded-sm shadow-sm'>
            Back home
          </a>
        </Link>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  // Gets query and gives to the component as props
  let { data } = await client.query({
    query: GET_USER,
    variables: { username: context.query.username, after: null, before: null },
  });
  return {
    props: {
      // userData: data.user.followers.totalCount,
      userData: data.user,
    },
  };
}

export default UserPage;
