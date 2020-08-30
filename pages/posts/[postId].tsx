import {useRouter} from "next/router";
import MainLayout from "../../components/MainLayout";
import Post from "../../components/Post";
import axios from "axios";
import {MyPost} from "../../interfaces/post";
interface PostPageProps {
    data: MyPost
}

export default function PostPage({data}:PostPageProps) {

   const router = useRouter()
    return (
        <MainLayout>
            <Post data={data} id={router.query.postId}/>
        </MainLayout>
    )
}
PostPage.getInitialProps = async ({ query }) => {
    let reqGet = await axios.get(
        `https://simple-blog-api.crew.red/posts/${query.postId}`
    );
    let data = await reqGet.data;
    return {
        data
    }
}