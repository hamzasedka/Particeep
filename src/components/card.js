import React, { useState } from 'react';
import {
  DeleteFilled,
  DislikeOutlined,
  EditOutlined,
  EllipsisOutlined,
  LikeOutlined,
  SettingOutlined
} from '@ant-design/icons';
import { Avatar, Badge, Card } from 'antd';
import { useDispatch } from 'react-redux';
import {
  DisLikeMovie,
  LikeMovie,
  RemoveLikeMovie
} from '../redux/actions/likeDislike';
import { updateMoviesState } from '../redux/actions/movie';
const { Meta } = Card;
function MovieCard(props) {
  const { movie, movies } = props;
  const dispatch = useDispatch();
  const [isLiked, setisLiked] = useState(false);
  const [isDisLiked, setisDisLiked] = useState(false);
  const likeMovie = () => {
    let updatedMovie = movie;
    if (!isLiked) {
      updatedMovie.likes = updatedMovie.likes + 1;
      dispatch(LikeMovie(updatedMovie));
    } else {
      updatedMovie.likes = updatedMovie.likes - 1;
      dispatch(RemoveLikeMovie(updatedMovie));
    }
    setisLiked(!isLiked);
  };

  const disLikeMovie = () => {
    let updatedMovie = movie;
    if (isDisLiked) {
      updatedMovie.dislikes = updatedMovie.dislikes - 1;
      dispatch(DisLikeMovie(updatedMovie));
    } else {
      updatedMovie.dislikes = updatedMovie.dislikes + 1;
      dispatch(DisLikeMovie(updatedMovie));
    }
    setisDisLiked(!isDisLiked);
  };
  const onDelete = () => {
    const state = movies && movies.filter((item) => item !== movie);
    dispatch(updateMoviesState(state));
  };
  return (
    <Card
      style={{
        width: 300
      }}
      actions={[
        <Badge
          onClick={() => likeMovie()}
          color='blue'
          size='large'
          count={movie.likes}
          overflowCount={movie.likes}
        >
          <Avatar
            style={{ backgroundColor: 'transparent', verticalAlign: 'middle' }}
            icon={<LikeOutlined style={{ fontSize: '16px', color: '#08c' }} />}
            size='small'
          />
        </Badge>,
        <Badge
          onClick={() => disLikeMovie()}
          color='red'
          size='large'
          count={movie.dislikes}
          overflowCount={movie.dislikes}
        >
          <Avatar
            style={{ backgroundColor: 'transparent', verticalAlign: 'middle' }}
            icon={
              <DislikeOutlined style={{ fontSize: '16px', color: 'red' }} />
            }
            size='small'
          />
        </Badge>
      ]}
    >
      <Meta
        avatar={
          <DeleteFilled
            onClick={() => onDelete()}
            style={{ fontSize: '16px', cursor: 'pointer' }}
          />
        }
        title={movie.title}
        description={movie.category}
      />
    </Card>
  );
}

export default MovieCard;
