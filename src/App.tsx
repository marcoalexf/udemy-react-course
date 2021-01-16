import React from 'react';
import './App.css';
import { CommentDetail } from './components';

export const App = () => {
  const comments = [
    {
      author: 'Marco Francisco',
      comment: 'This is was great!',
      time: '12:32'
    },
    {
      author: 'Carolina Catarino',
      comment: 'It was! I want one for me also..',
      time: '12:47'
    },
    {
      author: 'Gonçalo Pratas',
      comment: 'So do i!',
      time: '13:45'
    },
  ]

  return (
    <div className="ui container comments">
      <CommentDetail comment={comments[0]}/>
      <CommentDetail comment={comments[1]}/>
      <CommentDetail comment={comments[2]}/>
    </div>
  );
}
