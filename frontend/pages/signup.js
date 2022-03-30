import Head from 'next/head'
import {Checkbox, Form, Input, Button} from 'antd';
import styled from 'styled-components';
import useInput from '../hooks/useinput';
import { useState, useCallback } from 'react';
import AppLayout from '../components/AppLayout'

const ErrorMessage = styled.div`
    color: red;
`;
const ButtonWrapper = styled.div`
    margin-Top: 10px;
`;
export default function Signup(){
    const [id, onChangeId] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [password, onChangePassword] = useInput('');
    //콜백 부분이 다름
    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const onChangePasswordCheck = useCallback((e) => {
          setPasswordCheck(e.target.value);
          //비밀번호랑 비밀번호랑 체크랑 같은지 다른지 확인
          setPasswordError(e.target.value !== password);
        },[password])
    
    const [term, setTerm] = useState('');
    const [termError, setTermError] = useState(false);

    const onChangeTerm = useCallback(
        (e) => {
        setTerm(e.target.checked);
        setTermError(false);
        },
        []);

    const onSubmit = useCallback(() => {
            if(password != passwordCheck) {
                return setPasswordError(true);
            }
            if(!term){
                return setTermError(true);
            }
            //서버로 보내는 데이터들 잘 가나 체크 
            console.log(id, nickname, password);
        },[password, passwordCheck, term])
    return (
        <AppLayout>
        <Head>
            <title>회원가입 | NodeBird</title>
        </Head>
        <Form onFinish={onSubmit}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br />
                <Input name="user-id" value={id} onChange={onChangeId} required />
            </div>
            <div>
                <label htmlFor="user-nickname">닉네임</label>
                <br />
                <Input name="user-nickname" value={nickname} required onChange={onChangeNickname} />
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br />
                <Input name="user-password" type="password" value={password} required onChange={onChangePassword} />
            </div>
            <div>
                <label htmlFor="user-password-check">비밀번호체크</label>
                <br />
                <Input 
                name="user-password-check" 
                type="password"  
                value={passwordCheck} 
                required onChange={onChangePasswordCheck} 
                />
                {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다. </ErrorMessage>}
            </div>
            <div>
                <Checkbox name='user-term' checked={term} onChange={onChangeTerm}>제로초 말을 잘 들을 것을 동의합니다. </Checkbox>
                {termError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>}
            </div>
            <ButtonWrapper>
                <Button type="primary" htmlType="submit">가입하기</Button>
            </ButtonWrapper>
        </Form>
    </AppLayout>
    )
}