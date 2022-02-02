import React, { useEffect } from "react";
import Card from "../component/Card";

function Random(props) {
  const handledOnLoad = () => {
    props.handledOnLoad();
  };
  useEffect(() => {
    handledOnLoad();
  }, []);
  function renderCard() {
    return props.photos.map(function (photo) {
      return (
        <Card
          profile_image={photo.user.profile_image.medium}
          username={photo.user.username}
          img={photo.urls.regular}
          likes={photo.likes}
          views={photo.views}
          description={photo.description}
          key={photo.id}
        />
      );
    });
  }
  return <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5">{renderCard()}</div>;
}

export default Random;
