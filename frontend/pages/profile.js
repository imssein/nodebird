import Head from "next/head";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";
import AppLayout from "../components/AppLayout";

export default function Profile() {
  const followerList = [{nickname: '세인이'}, {nickname: '춘식이'}, {nickname: '라이언'}];
  const followingList = [{nickname: '세인이'}, {nickname: '춘식이'}, {nickname: '라이언'}];

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird | 내 프로필</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
      
    </>
  );
}
