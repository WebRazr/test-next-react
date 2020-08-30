import React, { useEffect, useState } from "react";
import Router from "next/router";
import axios from "axios";
import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;
export default function Post({ data: serverPost, id }) {
  const [postData, usePostData] = useState(serverPost);
  const deletePost = (postDel) => {
     let del = confirm("действительно хотите удалить?");
     if(del){
         axios
             .delete(`https://simple-blog-api.crew.red/posts/${postDel}`)
             .then((res) => {
                 console.log(res);
                 Router.push("/");
             })
             .catch((err) => {
                 console.log(err);
             });
     }

  };


  return (
    <>
      <p>{postData.title}</p>
      <p>{postData.body}</p>
      <Button onClick={() => deletePost(id)}>delete</Button>
    </>
  );
}
