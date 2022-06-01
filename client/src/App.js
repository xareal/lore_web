// import logo from './logo.svg';
import './App.css';
import './style.css';
import {BellIcon, ChatIcon, ChevronDownIcon, PlusIcon, SearchIcon} from '@heroicons/react';
import Header from "./Header";

function App() {
  return (
    <div>
      <Header />

      <div className="h-20 bg-cover" style={{backgroundImage:'url("https://pixabay.com/images/id-1504653/")'}} >
      </div>

      <div className="bg-reddit_dark-brighter">
        <div>
          <img src="https://pixabay.com/images/id-7181235/" alt=""/>
        </div>
      </div>
    </div>
  );
}

export default App;



