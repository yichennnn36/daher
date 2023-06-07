import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Template from "../../components/template";
import Select from "../../components/select";
import ProjectModal from "../../components/projectModal";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import * as prismicH from "@prismicio/helpers";
import { get } from "lodash";

const Gallery = ({ resource }) => {
  const router = useRouter();
  const { tags, gallery } = resource;
  const { slug } = router.query;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openData, setOpenData] = useState({});
  const project = get(gallery, "data.slices").filter((x) =>
    slug === "all" ? x : x.primary.tagname.uid === slug
  );

  const handleClickProject = (project) => {
    setOpenData(project);
    setIsModalOpen(true);
  };

  return (
    <div className="px-4 min-h-[1000px] mt-[160px] lg:pt-14 lg:pl-28 lg:pr-40">
      <div className="flex justify-end space-x-3 md:space-x-6">
        <button
          onClick={() => router.push(`/gallery/all`)}
          className={`text-white px-2 ${
            slug === "all" && "border-b border-white font-bold"
          }`}
        >
          全部
        </button>
        {tags.results.map((item) => (
          <button
            className={`text-white px-2 ${
              item?.uid === slug && "border-b border-white"
            }`}
            onClick={() => router.push(`/gallery/${item?.uid}`)}
          >
            {item?.data?.tagname?.[0].text}
          </button>
        ))}
      </div>
      <ul className="grid grid-cols-1 gap-10 my-10 sm:grid-cols-2 md:grid-cols-3 lg:md:grid-cols-4">
        {project.map((project) => {
          const featuredImage =
            prismicH.isFilled.image(project.primary.image) &&
            project.primary.image;

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
                    alt={project.primary.title}
                    field={featuredImage}
                    className="object-cover aspect-[4/3]"
                  />
                )}
                <div className="w-full h-full top-0 text-center absolute bg-[#26292db1] opacity-0 hover:opacity-100">
                  <div className="absolute text-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <div className="text-white text-lg tracking-widest">
                      {project.primary.title}
                    </div>
                    <div className="min-w-[200px] h-[1px] bg-white mb-2"></div>
                    <span className="text-white text-sm">
                      {project.primary.description}
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
