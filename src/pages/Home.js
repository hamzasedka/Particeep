import React, { useEffect, useState } from 'react';
import { List, Pagination } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../redux/actions/movie';
import MovieCard from '../components/card';
import Filter from '../components/Filter';

function Home() {
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.moviesData.movies);

  const [category, setCategory] = useState('');
  const [page, setPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);
  const indexofLastPage = page * postPerPage;
  const indexOfFirstPage = indexofLastPage - postPerPage;
  const currentPosts = movies.slice(indexOfFirstPage, indexofLastPage);
  const [filtredMovies, setFiltredMovies] = useState();
  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  useEffect(() => {
    if (category === 'all') {
      setFiltredMovies(movies && movies);
      setPostPerPage(12);
    } else
      setFiltredMovies(
        category.length > 0 &&
          currentPosts.filter((post) => post.category === category)
      );
  }, [category, page, postPerPage]);

  const onshowSizechange = (current, pagesize) => {
    console.log(pagesize);
    setPostPerPage(pagesize);
  };

  const callback = (searchTerm) => {
    setCategory(searchTerm);
  };

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
    <div className='container'>
      <Filter movies={movies} callback={callback} />

      <List
        style={{ margin: '5%' }}
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 3,
          xl: 4,
          xxl: 4
        }}
        dataSource={filtredMovies ? filtredMovies : currentPosts}
        renderItem={(movie) => (
          <List.Item>
            <MovieCard movie={movie} movies={movies} />
          </List.Item>
        )}
      />
      <div>
        {currentPosts.map((post) => (
          <h3 key={post.id}>{post.body}</h3>
        ))}
        <Pagination
          onChange={(value) => setPage(value)}
          pageSize={postPerPage}
          total={movies.length}
          current={page}
          showSizeChanger
          showQuick
          Jumper
          onShowSizeChange={onshowSizechange}
          itemRender={itemRender}
          pageSizeOptions={['4', '8', '12']}
        />
      </div>
    </div>
  );
}

export default Home;
