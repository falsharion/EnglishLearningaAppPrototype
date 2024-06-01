
import React from 'react';
import usersData from '../data/users.json'; 
import Streaks from './Streaks';
import { LiaArrowUpSolid } from "react-icons/lia";

const UserList = ({ name, country, image, streakcount }) => (
  <div className="user-container">
    <div className='user-profile'>
      <img src={image} alt={name} className="user-image" />
      <div>
        <h3 className='user-lead-name'>{name}</h3>
        <p >{country}</p>
      </div>
    </div>
    <div className="user-rating-container">
      <div className="user-rating">
      <LiaArrowUpSolid className="up-arrow" /> 
      </div>
      <Streaks count={streakcount} />
    </div>
  </div>
);

const LeaderBoardList = () => {
  // Sort users by streak count in descending order
  const sortedUsers = [...usersData].sort((a, b) => b.streakcount - a.streakcount);

  return (
    <div className="user-list">
      {sortedUsers.map((user) => (
        <UserList
          key={user.id}
          name={user.name}
          country={user.country}
          image={user.image}
          streakcount={user.streakcount}
        />
      ))}
    </div>
  );
};

export default LeaderBoardList;
