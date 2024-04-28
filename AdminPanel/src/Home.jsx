import React from 'react'
import {BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

function Home() {
    const data = [
        {
          name: 'Sales A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Sales B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Sales C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Sales D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        
      ];

  return (
   <main className='main-container'>
    <div className='main-title'>
        <h3>DASHBOARD</h3>
      
    </div>

    <div className='main-cards'>
        <div className='card'>
            <div className='card-inner'>
                <h3>PRODUCTS</h3>
                <BsFillArchiveFill className='icon-icon'/>
            </div>
        <h1>300</h1>
        </div>

        <div className='card'>
            <div className='card-inner'>
                <h3>CATEGORIES</h3>
                <BsFillGrid3X3GapFill className='icon-icon'/>
            </div>
        <h1>5</h1>
        </div>

        <div className='card'>
            <div className='card-inner'>
                <h3>CUSTOMERS</h3>
                <BsPeopleFill className='icon-icon'/>
            </div>
        <h1>45</h1>
        </div>

        <div className='card'>
            <div className='card-inner'>
                <h3>ALERTS</h3>
                <BsFillBellFill className='icon-icon'/>
            </div>
        <h1>9</h1>
        </div>
    </div>

    <div className='charts'>
    <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>

    </div>

   </main>
  )
}

export default Home
