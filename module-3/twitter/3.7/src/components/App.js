import { useEffect, useState } from 'react';
import '../styles/App.scss';
import getTweets from '../services/api';
import ls from '../services/local-storage';
import MainHeader from './MainHeader';
import Header from './Header';
import ComposeModal from './ComposeModal';
import Tweet1 from './Tweet1';

function App() {
  // state
  const [composeIsOpen, setComposeIsOpen] = useState(false);
  const [composeText, setComposeText] = useState(ls.get("composeText", "")); 
  const [tweets, setTweets] = useState([]);

  // effect
  useEffect(() => {
    getTweets().then(data => {
      setTweets(data);
    });
  }, []);

  useEffect(() => {
    ls.set("composeText", composeText);
  }, [composeText]);

  const handleToggleCompose = () => {
    setComposeIsOpen(!composeIsOpen);
  }

  const handleComposeText = (value) => {
    setComposeText(value);
  }

  const handleComposeSubmit = (ev) => {
    tweets.unshift({
      "id": "1243sdf",
      "avatar": "http://localhost:3000/assets/avatars/user-me.jpg",
      "user": "Adalab",
      "username": "adalab_digital",
      "date": "8 sep. 2021",
      "text": composeText,
      "comments": 0,
      "retweets": 0,
      "likes": 0
    });
    setTweets([...tweets]);
    setComposeIsOpen(false);
    setComposeText("");
  }

  const renderTweets1 = () => {
    return tweets.map((tweet) => {
      return <Tweet1 key={tweet.id} tweet={tweet} />
    });
  }

  const renderComposeModal = () => {
    if(composeIsOpen) {
        return <ComposeModal 
        handleToggleCompose={handleToggleCompose}
        composeText={composeText}
        handleComposeText={handleComposeText}
        handleComposeSubmit={handleComposeSubmit}/>
        
    }
    
  }

  return (
    <div className="page">
      <Header handleToggleCompose={handleToggleCompose}/>
      <main className="main">
      <MainHeader />
      <ul>{renderTweets1()}</ul>
      {renderComposeModal()}
      </main>
    </div>
  );
}
export default App;