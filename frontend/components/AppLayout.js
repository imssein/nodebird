import PropTypes from "prop-types";
import Link from "next/link";
import { useState } from "react";
import { Input, Menu, Row, Col } from "antd";
import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";
import styled from "styled-components";
import Router, { useRouter } from 'next/router';

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;
export default function AppLayout({ children }) {
  //서버쪽 완성 전 상태 관리를 위해 dummy data 사용
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();


  return (
    <div>
      <Menu 
        mode="horizontal"
        selectedKeys={[router.pathname]}
        items={[
          { label: <Link href="/"><a>노드버드</a></Link>, key: '/'},
          { label: <Link href="/profile"><a>프로필</a></Link>, key: '/profile'},
          { label: <Link href="/signup"><a>회원가입</a></Link>, key: '/signup'},
        ]}
      />
      {/* gutter : column 사이 간격  */}
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {/* 로그인이 되어있으면 유저 프로필을 보여주고 안되어있으면 로그인폼을 보여준다. */}
          {isLoggedIn ? (
            <UserProfile setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <LoginForm setIsLoggedIn={setIsLoggedIn} />
          )}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://sssein.tistory.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            Made by Sein
          </a>
        </Col>
      </Row>
    </div>
  );
}

AppLayout.propTypes = {
  // return 안에 들어갈 수 있는 모든 것들이 node
  children: PropTypes.node.isRequired,
};
