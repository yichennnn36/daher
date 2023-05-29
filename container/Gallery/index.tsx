import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Template from "../../components/template";
import Select from "../../components/select";
import ProjectModal from "../../components/projectModal";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import * as prismicH from "@prismicio/helpers";

const findFirstImage = (slices) => {
  const imageSlice = slices.find((slice) => slice.slice_type === "gallery");
  if (imageSlice && prismicH.isFilled.image(imageSlice.primary.image)) {
    return imageSlice.primary.image;
  }
};

const Gallery = ({ path, tags, projects }) => {
  const router = useRouter();
  const { slug } = router.query;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openData, setOpenData] = useState({});
  const filterTarget = projects.filter((x) => x.data.tagname.uid === path);

  const handleClickProject = (project) => {
    console.log("project", project);
    setOpenData(project);
    setIsModalOpen(true);
  };

  return (
    <div className="px-4 min-h-[1000px] mt-[120px] lg:pt-14 lg:pl-28 lg:pr-40">
      <div className="flex justify-end space-x-10">
        {tags.map((item) => (
          <button
            className={`text-white px-2 ${
              item?.uid === slug && "border-b border-white"
            }`}
          >
            {item?.data?.tagname?.[0].text}
          </button>
        ))}
      </div>
      <ul className="grid grid-cols-1 gap-10 my-10 sm:grid-cols-2 md:grid-cols-3 lg:md:grid-cols-4">
        {filterTarget.map((project) => {
          const featuredImage =
            (prismicH.isFilled.image(project.data.featureimage) &&
              project.data.featureimage) ||
            findFirstImage(project.data.slices);

          return (
            <li
              key={project.id}
              className="grid items-start gap-6 md:gap-8 relative"
            >
              <div
                className="relative bg-gray-100 cursor-pointer"
                onClick={() => handleClickProject(project)}
              >
                {prismicH.isFilled.image(featuredImage) && (
                  <PrismicNextImage
                    alt={project.data.title}
                    field={featuredImage}
                    // fill={true}
                    className="object-cover"
                  />
                )}
                <div className="w-full h-full top-0 text-center absolute bg-[#26292db1] opacity-0 hover:opacity-100">
                  <div className="absolute text-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <div className="text-white text-lg tracking-widest">
                      {project.data.title}
                    </div>
                    <div className="min-w-[200px] h-[1px] bg-white mb-2"></div>
                    <span className="text-white text-sm">
                      {project.data.description}
                    </span>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <ProjectModal
        isShow={isModalOpen}
        setIsShow={setIsModalOpen}
        dataSource={openData}
      />
    </div>
  );
};

export default Gallery;
