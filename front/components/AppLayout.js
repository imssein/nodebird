import propTypes from 'prop-types';
import Link from 'next/link';

export default function AppLayout({children}){
    return(
        <div>
            <Link href="/"><a>노드버드</a></Link>
            <Link href="/signup"><a>회원가입</a></Link>
            <Link href="/profile"><a>내프로필</a></Link>
            {children}
        </div>
    )
}

AppLayout.propTypes = {
    children: propTypes.node.isRequired,
}