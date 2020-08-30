import MainLayout from "../components/MainLayout";
import ShowAllTasks from "../components/ShowAllTasks";
import HeaderLayout from "../components/HeadLayout";
import axios from "axios";
import {MyPost} from "../interfaces/post";
import styled from 'styled-components';
interface PostPageProps {
    posts: MyPost[]
}
const TitlePost = styled.h1`
   margin-left: 100px;
`
export default function Index({posts: serverPost}:PostPageProps) {
    console.log(serverPost)
  return (
    <>
     <HeaderLayout/>
      <MainLayout>
        <TitlePost>POST</TitlePost>
        <ShowAllTasks post={serverPost}/>
      </MainLayout>
    </>
  );
}
Index.getInitialProps = async () => {
    let data = await axios.get(`https://simple-blog-api.crew.red/posts`);
    let dataRes: MyPost[] = await data.data;
    return {
        posts: dataRes
    }
}
