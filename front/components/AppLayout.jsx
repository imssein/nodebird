import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col} from 'antd';
import UserProfile from './UserProfile';
import LoginForm from './LoginForm';
import { useState } from 'react';

const AppLayout = ( {children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div>
        <Menu mode="horizontal"> 
        <Menu.Item>
            <Link href="/"><a>노드버드</a></Link>
        </Menu.Item>
        <Menu.Item> 
            <Link href="/profile"><a>프로필</a></Link>
        </Menu.Item>
        <Menu.Item>
            <Input.Search enterButton style={{verticalAlign : 'middle'}} />
        </Menu.Item>
        <Menu.Item>
            <Link href="/signup"><a>회원가입</a></Link>
        </Menu.Item>
        </Menu> 
        {/* 반응형 */}
        <Row gutter={8}>
            <Col xs={24} md={6}>
                {/* 로그인->사용자 프로필 / 로그인x->로그인폼  */}
                {isLoggedIn ? <UserProfile /> : <LoginForm /> }
            </Col>
            <Col xs={24} md={12}>
                {children}
            </Col>
            <Col xs={24} md={6}>
                <a href="https://sssein.tistory.com/" target="_blank" rel="noreferrer noopener">Made by Sein</a>
            </Col>
        </Row>
        </div>

    )
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;