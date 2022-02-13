import React from "react";

const Profile = ({
  profile_image,
  username,
  name,
  total_photos,
  total_likes,
  total_collections,
  location,
  likes,
  bio,
  instagram,
}) => {
  return (
    <>
      <main className="bg-gray-100 bg-opacity-25">
        <div className="lg:w-8/12 lg:mx-auto mb-8">
          <header className="flex flex-wrap items-center p-4 md:py-8">
            <div className="md:w-3/12 md:ml-16">
              {/* profile image */}
              <img
                className="w-20 h-20 md:w-40 md:h-40 object-cover rounded-full
             border-2 border-pink-600 p-1"
                src={profile_image}
                alt="profile"
              />
            </div>
            {/* profile meta */}
            <div className="w-8/12 md:w-7/12 ml-4">
              <div className="md:flex md:flex-wrap md:items-center mb-4">
                <h2 className="text-3xl inline-block font-light md:mr-2 mb-2 sm:mb-0">
                  {username}
                </h2>
                {/* badge */}
                <span
                  className="inline-block fas fa-certificate fa-lg text-blue-500 
                       relative mr-6 text-xl transform -translate-y-2"
                  aria-hidden="true"
                >
                  <i
                    className="fas fa-check text-white text-xs absolute inset-x-0
                       ml-1 mt-px"
                  />
                </span>
                {/* follow button */}
              </div>
              {/* post, following, followers list for medium screens */}
              <ul className="hidden md:flex space-x-8 mb-4">
                <li>
                  <span className="font-semibold"> {total_photos}</span>
                  posts
                </li>
                <li>
                  <span className="font-semibold"> {total_likes}</span>
                  likes
                </li>
                <li>
                  <span className="font-semibold">{total_collections}</span>
                  collections
                </li>
              </ul>
              {/* user meta form medium screens */}
              <div className="hidden md:block">
                <h1 className="font-semibold">Name : {name}</h1>
                <p className="font-semibold">Instagram : {instagram}</p>
                <span className="font-semibold">Location : {location}</span>
                <p className="font-semibold">Bio : {bio}</p>
              </div>
            </div>
            {/* user meta form small screens */}
            <div className="md:hidden text-sm my-2">
              <h1 className="font-semibold">Name : {name}</h1>
              <p className="font-semibold">Instagram : {instagram}</p>
              <span className="font-semibold">Location : {location}</span>
              <p className="font-semibold">Bio : {bio}</p>
            </div>
          </header>
          {/* posts */}
          <div className="px-px md:px-3">
            {/* user following for mobile only */}
            <ul
              className="flex md:hidden justify-around space-x-8 border-t 
        text-center p-2 text-gray-600 leading-snug text-sm"
            >
              <li>
                <span className="font-semibold text-gray-800 block">
                  {total_photos}
                </span>
                posts
              </li>
              <li>
                <span className="font-semibold text-gray-800 block">
                  {total_likes}
                </span>
                likes
              </li>
              <li>
                <span className="font-semibold text-gray-800 block">
                  {total_collections}
                </span>
                collections
              </li>
            </ul>
            {/* insta freatures */}
            <ul
              className="flex items-center justify-around md:justify-center space-x-12  
            uppercase tracking-widest font-semibold text-xs text-gray-600
            border-t"
            >
              {/* posts tab is active */}
              <li className="md:border-t md:border-gray-700 md:-mt-px md:text-gray-700">
                <a className="inline-block p-3" href="#">
                  <span className="hidden md:inline">Post {total_photos}</span>
                </a>
              </li>
              <li>
                <a className="inline-block p-3" href="#">
                  <span className="hidden md:inline">Likes {total_likes}</span>
                </a>
              </li>
              <li>
                <a className="inline-block p-3" href="#">
                  <span className="hidden md:inline">
                    Collections {total_collections}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default Profile;
