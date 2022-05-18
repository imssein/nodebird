import PropTypes from "prop-types";
import Link from "next/link";
import { useSelector } from "react-redux";
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
  //const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { isLoggedIn }  = useSelector((state) => state.user);
  
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
          {isLoggedIn ? ( <UserProfile />) : ( <LoginForm /> )}
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
