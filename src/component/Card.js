import React from "react";
import { Link } from "react-router-dom";

const Card = ({ profile_image, username, img, likes, views, description }) => {
  return (
    <div className="mx-auto mb-4 break-inside-avoid-column">
      <div className="card card-bordered">
        <Link to={`/Profile/${username}`}>
          <div className="avatar flex align-center items-stretch mb-3">
            <div className="mask mask-squircle w-12 h-12 self-center ml-5 mt-3 rounded-full">
              <img src={profile_image} />
            </div>
            <div className="text-center self-center font-bold text-xl ml-6">
              {username}
            </div>
          </div>
        </Link>

        <div className="w-3/4 mx-auto rounded-box ring ring-primary ring-offset-base-100 ring-offset-2">
          <img className="rounded-box" src={img} />
        </div>

        <div className="card-body">
          <p className="text-xl">Likes : {likes}</p>
          <p className="text-xl">Views : {views}</p>
          <p className="text-xl">Description : {description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
