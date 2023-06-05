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
    <div className="mx-auto max-w-[300px] md:max-w-[450px]">
      <div
        className="max-w-[300px] h-[300px] mx-auto mb-2 bg-no-repeat bg-cover bg-center md:max-w-[450px] md:h-[450px] aspect-square"
        style={{ backgroundImage: `url(${selectedImage?.url})` }}
      />
      <div className="relative">
        <div className="flex max-w-full overflow-x-scroll space-x-2">
          {images &&
            images.map((image, idx) => {
              if (image?.url) {
                return (
                  <div
                    onClick={() => handleSelectedImageChange(idx)}
                    style={{ backgroundImage: `url(${image.url})` }}
                    key={image.id}
                    className="h-[70px] min-w-[70px] bg-no-repeat bg-contain bg-center md:h-[100px] md:min-w-[100px] cursor-pointer aspect-square"
                  />
                );
              }
            })}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
