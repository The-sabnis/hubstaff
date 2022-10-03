import React from 'react';
import './App.css'
import { Layout } from 'antd';
import { Avatar } from 'antd';
import Ps from './table.jsx';
import './Table.css'



const { Header, Sider, Content } = Layout;



function App() {



  return (
    <div className="App">


      <Layout>
        <div className="h">
          <Header style={{ backgroundColor: '#fff' }} >
            <span class="hname">Hubstaff</span>
            <span class="av"> <Avatar src="1.png" style={{ height: 45, width: 45, backgroundColor: '#294DFF', padding: '8px', marginLeft: '99%', marginTop: '-9.5%' }} /></span>





          </Header>
        </div>


        <Layout>



          <Sider style={{ height: '9h' }}>


            <Avatar src="1.png" style={{ height: 80, width: 80, backgroundColor: '#294DFF', margin: '50px', padding: '12px' }} />
            <h4 style={{ marginLeft: '65px', marginTop: '-40px', opacity: '40%', color: 'white' }}>@name</h4>
            <h4 style={{ marginLeft: '27px', marginTop: '-7px', opacity: '40%', color: 'white' }}>name12@email.com</h4>



          </Sider>



          <Content>
            <div className="t">

              <Ps />

            </div>

          </Content>



        </Layout>

      </Layout>


    </div>
  )
}

export default App
