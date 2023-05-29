import { useRouter } from "next/router";

const Select = ({ data }) => {
  const router = useRouter();
  const { slug } = router.query;
  const selectReview = data.find((x) => x.uid === slug);

  return (
    <div
      className="w-[50%] rounded-sm border-[1.5px] border-gray-100 p-1 sm:max-w-[300px]"
      id="cta"
    >
      <div className="group relative" id="dropdown-cta">
        <div
          className="flex items-center justify-between space-x-1 text-white"
          id="dropdown-header"
        >
          <a href={data[0].url} className="block" id="dropdown-link">
            {selectReview.data.tagname[0].text}
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 transition-all duration-500 group-hover:rotate-180"
            id="icon-arrow-down"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        <ul
          className="absolute z-10 hidden w-full divide-y rounded border bg-white shadow-md group-hover:block"
          id="dropdown-items"
        >
          {data.map((x) => (
            <li className="p-3 cursor-pointer" key={x.id}>
              <a href={x.url}>{x.data.tagname[0].text}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Select;
