import Logo from "./logo.png";
import {BellIcon, ChatIcon, ChevronDownIcon, PlusIcon, SearchIcon} from "@heroicons/react"
import Avatar from "./avatar.png";

Function Header() {
	return (
		<header className="flex w-full bg-reddit_dark p-2">
        <div className="mx-4 flex">
          	<img src="{Logo}" alt="" className="w-8 h-8"/>
        	<form action="" className="bg-reddit_dark-brighter p-1 px-3 flex rounded-md border border-reddit_border mx-4 flex-grow">
          <SearchIcon className="text-gray-300 h-7 w-6 mt-1" />
          <input type="text" className="bg-reddit_dark-brighter h-6 text-sm p-1 pl-2 pr-0 block focus:outline-none text-white" placeholder="Search" />
        </form>
        
        <button className="px-2 py-1">
          <ChatIcon className="text-white w-8 h-8 m-1 mx-2" />
        </button>
        <button className="px-2 py-1">
          <BellIcon className="text-white w-8 h-8 m-1 mx-2" />
        </button>
        <button className="px-2 py-1">  
          <PlusIcon className="text-white w-8 h-8 m-1 mx-2" />
        </button>

        <button className="rounded-md flex">  
          <div className="w-8 h-8 bg-gray-600 rounded-md">
            <img  src={Avatar} alt="" style={{filter:'invert(100%)'}} className="block" />
          </div>
          <ChevronDownIcon className="text-gray-500 w-5 h-5 mt-2 ml-1" />
        </button>
        
        </div>
      </header>
	);

}