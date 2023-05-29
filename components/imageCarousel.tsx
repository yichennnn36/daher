import React, { useEffect, useState } from "react";

export type ImageType = { id: number; url: string };

const ImageCarousel: React.FC<{ images?: ImageType[] }> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<ImageType>();

  useEffect(() => {
    if (images && images[0]) {
      setSelectedImage(images[0]);
    }
  }, [images]);

  const handleSelectedImageChange = (newIdx: number) => {
    if (images && images.length > 0) {
      setSelectedImage(images[newIdx]);
    }
  };

  return (
    <div className="mx-auto px-10">
      <div
        className="max-w-[350px] h-[350px] mb-2 bg-no-repeat bg-contain bg-center md:max-w-[500px] md:h-[500px]"
        style={{ backgroundImage: `url(${selectedImage?.url})` }}
      />
      <div className="relative">
        <div className="flex max-w-full overflow-x-hidden space-x-2">
          {images &&
            images.map((image, idx) => (
              <div
                onClick={() => handleSelectedImageChange(idx)}
                style={{ backgroundImage: `url(${image.url})` }}
                key={image.id}
                className="h-[70px] min-w-[70px] bg-no-repeat bg-contain bg-center md:h-[100px] md:min-w-[100px] cursor-pointer"
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
