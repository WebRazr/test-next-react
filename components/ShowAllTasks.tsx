import React, { useState, useEffect } from "react";
import ListPosts from "./ListPosts";
import { MyPost } from "../interfaces/post";
import styled from "styled-components";
interface PostPageProps {
  post: MyPost[];
}
const GridPost = styled.div`
  margin: auto;
  display: grid;
  width: 90%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2vw;
`;
export default function ShowAllTasks({ post }: PostPageProps) {
  let [postsD, setPostsD] = useState(post);

  const list = postsD.map((el) => {
    return <ListPosts key={el.id} dataPosts={el} />;
  });
  return <GridPost>{list}</GridPost>;
}
