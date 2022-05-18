
import propTypes from "prop-types";
import Link from "next/link";
import { useState } from "react";
import { Input, Menu, Row, Col } from "antd";
import UserProfile from "../components/UserProfile";
import LoginForm from "../components/LoginForm";

export default function AppLayout({ children }) {
  //서버쪽 완성 전 상태 관리를 위해 dummy data 사용 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Input.Search enterButton style={{ verticalAlign: "middle" }} />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      {/* gutter : column 사이 간격  */}
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {/* 로그인이 되어있으면 유저 프로필을 보여주고 안되어있으면 로그인폼을 보여준다. */}
          {isLoggedIn ? <UserProfile/> : <LoginForm /> }
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
  children: propTypes.node.isRequired,
};
