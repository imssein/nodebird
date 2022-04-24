import Head from 'next/head'
import AppLayout from '../components/AppLayout'
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

export default function Profile(){ 
    const FollowerList = [{nickname: '제로초'}, {nickname : '바보'}, {nickname:'노드버드오피셜'}]; 
    const FollowingList = [{nickname: '제로초'}, {nickname : '바보'}, {nickname:'노드버드오피셜'}];

    return (
        <>
        <Head>
            <title>내 프로필 | NodeBird</title>
        </Head>
    <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={FollowingList} />
        <FollowList header="팔로워 목록" data={FollowerList} />
    </AppLayout>
    </>
    )
}