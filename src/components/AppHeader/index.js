import {Button,Drawer, Space, Typography,Input} from "antd";
import React, { useState } from 'react';
import {UnorderedListOutlined,UserDeleteOutlined,KeyOutlined,SearchOutlined,CodeOutlined,MobileOutlined,SettingOutlined,DownCircleOutlined,QuestionCircleOutlined,StopOutlined } from '@ant-design/icons';
function AppHeader(){
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
      };
    
      const onClose = () => {
        setOpen(false);
      };
    
    return <div className="AppHeader">
    <div className="title">
    <UnorderedListOutlined />
    &nbsp;&nbsp;&nbsp;
    Microsoft 365 admin center
    </div>
    <div className="srch">
    <Input addonBefore={<SearchOutlined style={{backgroundColor:""}}/>} placeholder="Search " />
    </div>
    <div className="grp">
    <CodeOutlined /> &nbsp;&nbsp;&nbsp;&nbsp;
    <MobileOutlined />&nbsp;&nbsp;&nbsp;&nbsp;
    <SettingOutlined />&nbsp;&nbsp;&nbsp;&nbsp;
    <QuestionCircleOutlined />&nbsp;&nbsp;&nbsp;
    <Button icon={<DownCircleOutlined />} type="text" onClick={showDrawer} ></Button>
    <Drawer  placement="right" onClose={onClose} open={open} width={600}>
        <Space>
        <Button type="primary" shape="circle" value="large"style={{fontSize:50,width:100,height:100}}>ST</Button>
        <Typography.Title level={1} style={{margin:0}}>
        Sudhakar T <br/>
        <Button icon={<KeyOutlined style={{color:"blue"}}/>} type="text">Reset password</Button>
        <Button icon={<StopOutlined style={{color:"blue"}}/>} type="text">Block sign-in</Button>
        <Button icon={<UserDeleteOutlined style={{color:"blue"}}/>} type="text">Delete user</Button>
        </Typography.Title>
        </Space>
        <Space>
        <Typography.Title level={5}style={{color:"",borderBottom:"2px solid blue"}}>Account</Typography.Title>&nbsp;&nbsp;
        <Typography.Title level={5}>Licenses and Apps</Typography.Title>
        </Space>
        <br/>
        <Space>
        <Space direction="vertical">
        <Typography.Title level={5} style={{margin:0,padding:0}}>Username and email</Typography.Title>
        <Typography.Title level={5} style={{margin:0,padding:0,color:"#474644"}}>sudhakar@nxtdiv.com</Typography.Title>
        <Typography.Title level={5} style={{color:"blue",margin:0,padding:0}}>Manage username and email</Typography.Title>
        </Space>&nbsp;&nbsp;&nbsp;
        <Space direction="vertical">
        <Typography.Title level={5} style={{margin:0,padding:0}}>Aliases</Typography.Title>
        <Typography.Title level={5} style={{margin:0,padding:0,color:"#474644"}}>sudhakar@NxtDiv.onmicrosoft.com</Typography.Title>
        <Typography.Title level={5} style={{color:"blue",margin:0,padding:0}}>Manage username and email</Typography.Title>
        </Space>
        </Space><br/><br/>
        <Space>
        <Space direction="vertical">
        <Typography.Title level={5} style={{margin:0,padding:0}}>Groups</Typography.Title>
        <Typography.Title level={5} style={{margin:0,padding:0,color:"#474644"}}></Typography.Title>
        <Typography.Title level={5} style={{color:"blue",margin:0,padding:0}}>Manage groups</Typography.Title>
        </Space>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Space direction="vertical">
        <Typography.Title level={5} style={{margin:0,padding:0}}>Roles</Typography.Title>
        <Typography.Title level={5} style={{margin:0,padding:0,color:"#474644"}}>No administrator access</Typography.Title>
        <Typography.Title level={5} style={{color:"blue",margin:0,padding:0}}>Manage roles</Typography.Title>
        </Space>
        </Space><br/>
        <br/><Space direction="vertical">
        <Typography.Title level={5} style={{margin:0,padding:0}}>Manager</Typography.Title>
        <Typography.Title level={5} style={{margin:0,padding:0,color:"#474644"}}>None provided</Typography.Title>
        <Typography.Title level={5} style={{color:"blue",margin:0,padding:0}}>Add manager </Typography.Title>
        </Space><br/><br/>
        <Typography.Title level={5} style={{margin:0,padding:0}}>Contact information</Typography.Title>
        <Space>
        <Space direction="vertical">
        <Typography.Title level={5} style={{margin:0,padding:0}}>Display name</Typography.Title>
        <Typography.Title level={5} style={{margin:0,padding:0,color:"#474644"}}>Sudhakar T</Typography.Title>
        </Space>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Space direction="vertical">
        <Typography.Title level={5} style={{margin:0,padding:0}}>First name</Typography.Title>
        <Typography.Title level={5} style={{margin:0,padding:0,color:"#474644"}}>sudhakar</Typography.Title>
        </Space>
        </Space><br/><br/>
        <Space>
        <Space direction="vertical">
        <Typography.Title level={5} style={{margin:0,padding:0}}>Phone number</Typography.Title>
        <Typography.Title level={5} style={{color:"blue",margin:0,padding:0}}>Manage contact information</Typography.Title>
        </Space>&nbsp;&nbsp;&nbsp;
        <Space direction="vertical">
        <Typography.Title level={5} style={{margin:0,padding:0}}>Last name</Typography.Title>
        <Typography.Title level={5} style={{margin:0,padding:0,color:"#474644"}}>T</Typography.Title>
        </Space>
        </Space>
      </Drawer>
    </div>
    </div>;
}
export default AppHeader