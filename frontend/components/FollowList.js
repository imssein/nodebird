import { List, Button, Card } from 'antd';
import { StopOutlined } from '@ant-design/icons';
import PropTypes from "prop-types";

export default function FollowList({ header, data }){
    return(
        <List 
        style={{marginBottom: 20}}
        grid={{ gutter: 4, xs: 2, sm: 2, md: 3, lg: 3, xl: 3, xxl: 4 }}        size="small"
        header={<div>{header}</div>}
        // 경계선
        loadMore={<div style={{textAlign: 'center', margin: '10px 0'}}><Button>더보기</Button></div>}
        bordered
        // 반복문을 통해서 더미데이터가 들어감. 
        dataSource={data}
        renderItem={(item) => (
            <List.Item style={{marginTop:20}}>
                <Card actions={[<StopOutlined key="stop" /> ]}>
                    <Card.Meta description={item.nickname} />
                </Card>
            </List.Item>
        )}
    /> 

    )
};

FollowList.propTypes = {
    header: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
};