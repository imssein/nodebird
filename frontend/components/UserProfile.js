import { Avatar, Card, Button } from "antd";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { logoutAction } from "../reducers/index";

export default function UserProfile(){ 

    const onLogout = useCallback(() => {
        const dispatch = useDispatch();
        // setIsLoggedIn(false);

        const onLogOut = useCallback(()=> {
            dispatch(logoutAction());
        }, []);
    }, []);
        
    return (
        <Card 
            actions={[
                <div key="twit">짹짹<br/>0</div>,
                <div key="followings">팔로잉<br/>0</div>,
                <div key="followers">팔로워<br/>0</div>,
            ]}
        >
            <Card.Meta 
                avatar={<Avatar>ZC</Avatar>}
                title="ZeroCho" />
            <Button onClick={onLogout}>로그아웃</Button>
            
        </Card>
    )
}