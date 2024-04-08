import { FaSearch } from "react-icons/fa"

function SearchBar() {
  return (
    <div className="br-gray-100 items-center border border-transparent focus-within:border-blue-500 flex px-6 rounded-full h-9 lg:w-2/4 mt-3 mx-auto max-lg:mt-6">
        <FaSearch className="fill-white mr-3 rotate-90 text-xl" />
        <input type="text" placeholder="Type to search..." className="w-full outline-none bg-transparent text-white font-semibold text-[15px]" />
    </div>
  )
}

export default SearchBar