import React from 'react'
import BlockCard from '../Shared/BlockCard'
import Layout from '@/Shared/Layout';


const Dashboard =  ()=>{

    return (
        <BlockCard title="Dashboard">
             
            <p>Dashboard goes here!</p>
          
        </BlockCard>
    )
}
Dashboard.layout = page => <Layout children={page} />;

export default Dashboard;
