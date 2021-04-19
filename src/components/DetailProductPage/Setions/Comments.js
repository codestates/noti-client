// import axios from 'axios';
// import React, { useState, useContext } from 'react';
// import SingleComment from './SingleComment';
// import {userContext} from '../../../App';


// axios.defaults.withCredentials = true;


// export default function Comments(props) {
//   console.log("코멘트 props", props)

//   const [comment, setComment] = useState("")
   
//   const handleChange = (e) => {
//     setComment(e.target.value)
//   }

//   const onSubmit = (e) => {
//     e.preventDefault();

//       const variables = {
//       comment: comment,
//       _id: props.productId
//     }

//    console.log("댓글 보내는값", variables)

//     axios
//       .post("https://localhost:4000/products/writeComment", 
//       variables,
//       {
//         headers: { "Content-Type": "application/json" , "okCome": props.accessToken}, 
//       })
//       .then(response => {
//         console.log ("포스트", response.data.data)
//         if(response.data.success) {
//           setComment("")
//           props.updateComment(response.data.data)
        
//         } else {
//           alert('failed to save comment')
//         }
//        })

//   }

//   return (
//     <div>
//       <br />
//       <p> replies</p>
      
//       {/* root comment form */}
//       <form style={{ display: "flex" }} onSubmit={onSubmit}>
//         <textarea 
//           style={{ width: "100%", borderRadius: "5px"}}
//           onChange={handleChange}
//           value={comment}
//           placeholder="코멘트를 작성해 주세요."  
//         />
//         <br />
//         <button style={{ width:"20%", height:"52px"}} onClick={onSubmit}>Submit</button>

//       </form>
//       {/* comment lists */}
//       {props.commentLists && props.commentLists.map((comment, index) => (
//         // <React.Fragment>
//           <SingleComment 
//             comment={comment} 
//             productId={props.poductId} 
//            />
//         //</React.Fragment>
//       ))}



//     </div>
//   )
// }



import axios from 'axios';
import React, { useState, useContext } from 'react';
import SingleComment from './SingleComment';
import {userContext} from '../../../App';


axios.defaults.withCredentials = true;


export default function Comments(props) {
  console.log("코멘트 props", props)

  const [comment, setComment] = useState("")
   
  const handleChange = (e) => {
    setComment(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if(comment === "") {
      alert("내용을 입력해주세요")
      return
    }

    const variables = {
      comment: comment,
      _id: props.productId
    }

   console.log("댓글 보내는값", variables)

    axios
      .post("https://localhost:4000/products/writeComment", 
      variables,
      {
        headers: { "Content-Type": "application/json" , "okCome": props.accessToken}, 
      })
      .then(response => {
        console.log ("포스트", response.data)
        if(response.data.success) {
          setComment("")
          props.updateComment(response.data.data)
        
        } else {
          alert('failed to save comment')
        }
       })

  }

  return (
    <div>
      <br />
      <p> replies</p>
      
      {/* root comment form */}
      <form style={{ display: "flex" }} onSubmit={onSubmit}>
        <textarea 
          style={{ width: "100%", borderRadius: "5px"}}
          onChange={handleChange}
          value={comment}
          placeholder="코멘트를 작성해 주세요."  
        />
        <br />
        <button style={{ width:"20%", height:"52px"}} onClick={onSubmit}>Submit</button>

      </form>
      {/* comment lists */}
      {props.commentLists && props.commentLists.map((comment, index) => (
        // <React.Fragment>
          <SingleComment 
            key={index}
            comment={comment} 
            productId={props.productId} 
            accessToken={props.accessToken}
           />
        //</React.Fragment>
      ))}



    </div>
  )
}















