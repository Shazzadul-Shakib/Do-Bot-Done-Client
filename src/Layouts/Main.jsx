import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import ProfileCard from '../Shared/ProfileCard/ProfileCard';

const Main = () => {
    return (
      <div>
        <Navbar />
        <div className=" max-w-screen-xl mx-auto bg-bg mt-8">
          <div className="w-1/3">
            <ProfileCard />
          </div>
        </div>
      </div>
    );
};

export default Main;