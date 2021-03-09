import React from 'react';
import './App.css';
import { CommentDetail, ApprovalCard } from './components';

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
      <ApprovalCard>
        <div>
          <h2>Warning!</h2>
          Are you sure you want to continue?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail comment={comments[0]}/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail comment={comments[1]}/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail comment={comments[2]}/>
      </ApprovalCard>
    </div>
  );
}
