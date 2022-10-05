import { Pagination } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../redux/actions/movie';

function Paginations() {
  const [page, setPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.moviesData.movies);
  const [posts, setPosts] = useState(movies ? movies : []);
  const [total, setTotal] = useState(movies ? movies.length : '');
  const indexofLastPage = page * postPerPage;
  const indexOfFirstPage = indexofLastPage - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPage, indexofLastPage);
  const onshowSizechange = (current, pagesize) => {
    setPostPerPage(pagesize);
  };
  console.log(currentPosts);
  useEffect(() => {
    dispatch(fetchMovies());
  }, []);
  const itemRender = (current, type, originalElement) => {
    if (type === 'prev') {
      return <a> Previous </a>;
    }
    if (type === 'next') {
      return <a> Next </a>;
    }
    return originalElement;
  };

  return (
    <div className='App'>
      {currentPosts.map((post) => (
        <h3 key={post.id}>{post.body}</h3>
      ))}
      <Pagination
        onChange={(value) => setPage(value)}
        pageSize={postPerPage}
        total={total}
        current={page}
        showSizeChanger
        showQuick
        Jumper
        onShowSizeChange={onshowSizechange}
        itemRender={itemRender}
        pageSizeOptions={['4', '8', '12']}
      />
    </div>
  );
}

export default Paginations;
