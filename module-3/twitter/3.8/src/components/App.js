import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../styles/App.scss';
import getTweets from '../services/api';
import ls from '../services/local-storage';
import Profile from './Profile';
import Header from './Header';
import ComposeModal from './ComposeModal';
import Tweets from './Tweets';
import Home from './Home';
import Search from './Search';

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
      <Switch>
          <Route path="/" exact>
            <Home />
            <Tweets tweets={tweets} />
          </Route>
          <Route path="/search">
            <Search />
            <Tweets tweets={tweets} />
          </Route>
          <Route path="/profile">
            <Profile />
            <Tweets tweets={tweets} />
          </Route>
        </Switch>
      
      {renderComposeModal()}
      </main>
    </div>
  );
}
export default App;