import Link from "next/link"
import {MyPost} from "../interfaces/post";

import styled from 'styled-components';
interface PostPageProps {
    dataPosts: MyPost
}

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
export default function ListPosts({dataPosts}:PostPageProps) {
    const {title, id} = dataPosts
    return (
        <div style={{border: '2px solid black', width: '300px' }}>
            <p>{title}</p><p><Link href={`/posts/[postId]`} as={`/posts/${id}`}><Button>читать</Button></Link></p>
        </div>
    );
}
