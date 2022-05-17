import propTypes from 'prop-types';
import Link from 'next/link';

export default function AppLayout({children}){
    return(
        <div>
            <div>
                <Link href="/"><a>노드버드</a></Link>
                <Link href="/profile"><a>프로필</a></Link>
                <Link href="/signup"><a>회원가입</a></Link>
            </div>
            {children}
        </div>

    )
}

AppLayout.propTypes = {
    // return 안에 들어갈 수 있는 모든 것들이 node 
    children: propTypes.node.isRequired,
};