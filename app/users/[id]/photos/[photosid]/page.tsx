import React from "react";

interface Props {
  params: { id: number; photosid: number };
}

const PhotoId = ({ params: { id, photosid } }: Props) => {
  return (
    <div>
      This is Foto with id:{id} and photoId:{photosid}
    </div>
  );
};

export default PhotoId;
