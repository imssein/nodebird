import PropTypes, { node } from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';


export default function AppLayout({ children }){
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
                <Input.Search enterButton style={{ verticalAlign: 'middle'} } />
            </Menu.Item>
            <Menu.Item>
            <Link href="/signup"><a>회원가입</a></Link>
            </Menu.Item>
        </Menu>
        <Row>
            
        </Row>
        {children}
        </div>
    )
}

AppLayout.protoTypes = {
    children: PropTypes.node.isRequired,
}