import { Card,Space,Button,Typography,Table } from "antd";
// import{useState} from "react";
import{PlusOutlined,KeyOutlined,AntCloudOutlined,FileTextOutlined,FormOutlined,BookOutlined,CreditCardOutlined,TeamOutlined,UserOutlined}from "@ant-design/icons"
function AppContent(){
    const dataSource = [
        {
          key: '1',
          Name: 'NxtDiv Info',
          Username : 'info@nxtdiv.com',
          Licenses: 'Microsoft 365 Bussiness Basic',
        },
        {
          key: '2',
          Name: 'Sudhakar T',
          Username : 'Sudhakar@nxtdiv.com',
          Licenses: 'Microsoft 365 Bussiness Basic',
        },
        {
            key: '3',
            Name: 'Sunil K',
            Username : 'sunil@nxtdiv.com',
            Licenses: 'Microsoft 365 Bussiness Basic',
          },
          {
            key: '4',
            Name: 'Swapna Swapna',
            Username : 'swapna@nxtdiv.onmicrosoft.com',
            Licenses: 'Unlicensed',
          },
      ];
      
      const columns = [
        {
          title: 'Name',
          dataIndex: 'Name',
          key: 'Name',
        },
        {
          title: 'Username',
          dataIndex: 'Username',
          key: 'Username',
        },
        {
          title: 'Licenses',
          dataIndex: 'Licenses',
          key: 'Licenses',
        },
      ];
    return (
        <div className="AppContent">
        <h5 style={{color:"blue",margin:0,padding:0}}>NxtDiv</h5>
        <Typography.Title level={1}>
        Good Afternoon, Swapna Swapna
        </Typography.Title>
        <Button icon={<PlusOutlined />} type="primary"size="large">Add user</Button>&nbsp;&nbsp;&nbsp;
        <Button icon={<KeyOutlined />} size="large">Reset password</Button>
        <Typography.Title level={3}>
        For organizations like yours
        </Typography.Title>
        <Space direction="horizontal">
            <Card style={{borderLeft:"2px solid blue"}}>
            <Space direction="horizontal">
            <FileTextOutlined size="large" style={{fontSize:50,color:"blue"}}/>
            <Typography.Title level={4} style={{margin:0}}>
            Help coustomers schedule <br/>appointments with you<br/>
            <span style={{fontSize:12 ,color:"#474644"}}>Setup a calender with your bussiness hours </span>
            </Typography.Title>
            </Space>
            </Card>
            <Card style={{borderLeft:"2px solid navy"}}>
            <Space direction="horizontal">
            <TeamOutlined size="large" style={{fontSize:50,color:"blue"}}/>
            <Typography.Title level={4} style={{margin:0}}>
            Sharing training info about <br/>Microsoft teams<br/>
            <span style={{fontSize:12 ,color:"#474644"}}>Help everyone learn to use teams</span>
            </Typography.Title>
            </Space>
            </Card>
            <Card style={{borderLeft:"2px solid blue"}}>
            <Space direction="horizontal">
            <AntCloudOutlined size="large" style={{fontSize:50,color:"blue"}}/>
            <Typography.Title level={4} style={{margin:0}}>
            Migrate emails and files to <br/>Microsoft 365<br/>
            <span style={{fontSize:12 ,color:"#474644"}}>Move content from Gmail and Yahoo</span>
            </Typography.Title>
            </Space>
            </Card>
        </Space>
        <Typography.Title level={3}>
        Your organization
        </Typography.Title>
        <Button icon={<UserOutlined />} type="text"size="large" style={{borderBottom:"2px solid blue"}}shape="rectangle">Users </Button>
        <Button icon={<TeamOutlined />} type="text"size="large">Teams</Button>
        <Button icon={<CreditCardOutlined />} type="text"size="large">Subscription</Button>
        <Button icon={<BookOutlined />} type="text"size="large">Learn</Button>
        <Button icon={<FormOutlined />} type="text"size="large">Set up</Button><br/>
        <h5 style={{color:"#464644"}}>
        Manage who can access apps and services included in your Microsoft 365 Subscriptions.<br/>
        Add or remove users, manage licenses and reset passwords.
        </h5>
        <hr/>
        <Button icon={<PlusOutlined style={{color:"blue"}}/>} type="text"size="large">Add user</Button>&nbsp;&nbsp;&nbsp;
        <Button icon={<KeyOutlined style={{color:"blue"}}/>} size="large"type="text">Reset password</Button>
        <Table columns={columns} dataSource={dataSource} />
        </div>
    );
}
export default AppContent
