import PropTypes, { node } from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import UserProfile from './UserProfile';
import LoginForm from './LoginForm';
import styled from 'styled-components';
import {useSelector} from 'react-redux';


const SearchInput = styled(Input.Search)`
    vertical-align: middle;
`
export default function AppLayout({ children }){
    // 서버가 완성되기 전 더미데이터를 이용해서 로그인 구현 
    // const [isLoggedIn, setIsLoggedIn] = useState(false); 

    const isLoggedIn = useSelecotr((state) => state.user.isLoggedIn);

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
                <SearchInput enterButton />
            </Menu.Item>
            <Menu.Item>
            <Link href="/signup"><a>회원가입</a></Link>
            </Menu.Item>
        </Menu>
        <Row gutter={8}>
            <Col xs={24} md={6}>
                {/* {isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn}/> : <LoginForm setIsLoggedIn={setIsLoggedIn} /> } */}
                {isLoggedIn ? <UserProfile /> : <LoginForm />}
            </Col>
            <Col xs={24} md={12}>
                {children}
            </Col>
            <Col xs={24} md={6}>
                <a href="http://www.zerocho.com" target="_blank" rel="noreferrer noopener">Made by Zerocho</a>
            </Col>
        </Row> 
        </div>
    )
}
AppLayout.protoTypes = {
    children: PropTypes.node.isRequired,
}