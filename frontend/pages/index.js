import { useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
export default function Home() {
    const { isLoggedIn } = useSelector((state) => state.user);
    const { mainPosts } = useSelector((state) => state.post);

    return (
        <AppLayout>
            {/* 로그인한 사람한테만 보이도록 */}
            {isLoggedIn && <PostForm /> } 
            {/* 모두에게 보여짐 / 
            key에 index를 쓰면 안됨. 게시글이 바뀔 가능성이 있는 경우에는 사용하면 안됨.  */}
            {mainPosts.map((post) => <PostCard key={post.id} post={post} />)}
        </AppLayout>
    )
}