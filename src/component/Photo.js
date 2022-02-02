import React from "react";

const Profile = ({img,likes}) => {
  return (
    <>
      <div className="w-1/3 p-px md:px-3">
                {/* post 1*/}
                <a href="#">
                  <article className="post  text-white relative pb-full md:mb-6">
                    {/* post image*/}
                    <img
                      className="w-full h-full absolute left-0 top-0 object-cover rounded-box"
                      src={img}
                      alt="image"
                    />
                    <i className="fas fa-square absolute right-0 top-0 m-1" />
                    {/* overlay*/}
                    <div
                      className="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                        left-0 top-0 hidden"
                    >
                      <div
                        className="flex justify-center items-center 
                            space-x-4 h-full"
                      >
                        <span className="p-2">
                          <i className="fas fa-heart" />
                          {likes} likes
                        </span>
                      </div>
                    </div>
                  </article>
                </a>
              </div>
    </>
  );
};

export default Profile;
