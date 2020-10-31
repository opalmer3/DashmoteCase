import './GreetingBanner.css';
import React from 'react';
import users from '../../models/users';

function GreetingBanner(){
    return <div className="greeting-banner">
             <h2>{`Hello ${users[0].firstName}!`}</h2>
             <p>Here you can find your projects and dashboards.</p>
          </div>
}

export default GreetingBanner;