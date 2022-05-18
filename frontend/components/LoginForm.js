import { useState, useCallback } from "react";
import { Form, Input, Button } from "antd";
import Link from "next/link";

export default function LoginForm() {

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

// 반복되는 부분들은 custom hook을 이용하여 처리할 수 있음 
  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const onChangepassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  return (
    <Form>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input
          name="user-password"
          type="password"
          value={password}
          onChange={onChangepassword}
          required
        />
      </div>
      <div>
        <Button type="primary" htmlType="submit" loading={false}>
          로그인
        </Button>
        <Link href="/signup">
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </div>
    </Form>
  );
}
