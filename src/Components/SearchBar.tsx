import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect, ChangeEvent } from "react";
import PostListData from "./Blogs/PostListData.tsx";
import { RouteName, generateRoutePath } from "../App/index.ts";
import { Link } from "react-router-dom";
interface Post {
  title: string;
  path: string;
}

const SearchBar = () => {
  const { t } = useTranslation();

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Post[]>([]);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // When clicking outside the list box, hide the box
  const handleClickOutside = (event: MouseEvent) => {
    if (listRef.current && !listRef.current.contains(event.target as Node)) {
      setSearchResults([]);
    }
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    // Filter the PostListData based on the search query
    const filteredResults = PostListData.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <div>
      <form>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative ">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={t("Search Blogs")}
            value={searchQuery}
            onChange={handleSearchChange}
            required
            role="combobox"
          />
          {/* Render the dropdown list with search results */}
          {searchResults.length > 0 && (
            <ul
              ref={listRef}
              className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg"
            >
              {searchResults.map((result) => (
                // go the blogs using the pre-defined routes in the App Folder
                <Link
                  to={`${generateRoutePath({ name: RouteName.Blog })}/${
                    result.path
                  }`}
                >
                  <li key={result.path} className="px-4 py-2 hover:bg-gray-100">
                    {result.title}
                  </li>
                </Link>
              ))}
            </ul>
          )}
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
