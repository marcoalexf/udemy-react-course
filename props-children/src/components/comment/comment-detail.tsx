import React from 'react'
import { TutComment } from '../../models';

export const CommentDetail = (props: {comment: TutComment}) => {
    const image = 'https://source.unsplash.com/random';
    console.log(props);

    return (
    <div className="comment">
        <a href="/" className="avatar">
            <img src={image}></img>
        </a>
        <div className="content">
          <a href="/" className="author">
            {props.comment.author}
          </a>
          <div className="metadata">
            <span className="date">{props.comment.time}</span>
          </div>
          <div className="comment">
              {props.comment.comment}
          </div>
        </div>
    </div>

    )
}
