import React from 'react'
import Likes from './Likes'

export default function SingleComment(props) {
console.log("싱글코멘트", props)
  return (
    <div>
      <li className="contents" style={{listStyle: "none"}}>
        <div className="nickName" style={{fontWeight:"500"}}>{props.comment.nickName}</div> 
        <div className="content">{props.comment.content}</div> 
        <Likes 
          accessToken={props.accessToken}
          commentId={props.comment._id}
          productId={props.productId}
          updateLikes={props.updateLikes}
          />
      </li>
    </div>
  )
}
