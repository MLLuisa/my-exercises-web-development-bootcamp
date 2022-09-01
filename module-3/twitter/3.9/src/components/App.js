import { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch, } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import '../styles/App.scss';
import getTweets from '../services/api';
import ls from '../services/local-storage';
import Profile from './Profile';
import Header from './Header';
import ComposeModal from './ComposeModal';
import Tweets from './Tweets';
import Home from './Home';
import Search from './Search';
import TweetDetail from './TweetDetail';
import Loader from './Loader';

function App() {
  // state
  const [composeIsOpen, setComposeIsOpen] = useState(false);
  const [composeText, setComposeText] = useState(ls.get("composeText", "")); 
  const [tweets, setTweets] = useState([]);
  const [showLoading, setShowLoading] = useState(false);
  const [searchText, setSearchText] = useState("");

  // effect
  useEffect(() => {
    setShowLoading(true)
    getTweets().then(data => {
      setShowLoading(false)
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

  const handleSearchText = (searchText) => {
    setSearchText(searchText)
  }

  const handleComposeSubmit = (ev) => {
    tweets.unshift({
      "id": uuid(),
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

  const getFilteredTweets = () => {
    return tweets.filter((tweet) => {
      return tweet.text.toLowerCase().includes(searchText.toLowerCase()) || tweet.user.toLowerCase().includes(searchText.toLowerCase());
    })
  }

  const routeTweetData = useRouteMatch('/tweet1/:tweetId')

  const getRouteTweet = () => {
    if(routeTweetData) {
    const routeTweetId = routeTweetData.params.tweetId;
    return tweets.find(tweet => {
      return tweet.id === routeTweetId;
    })
   
     }
  }
 
  

  return (
    <div className="page">
      <Header handleToggleCompose={handleToggleCompose}/>
      <main className="main">
      <Switch>
          <Route path="/home" exact>
            <Home />
            <Tweets tweets={tweets} />
          </Route>
          <Route path="/search">
            <Search 
            handleSearchText={handleSearchText}
            searchText={searchText}/>
            <Tweets tweets={getFilteredTweets()} />
          </Route>
          <Route path="/profile">
            <Profile />
            <Tweets tweets={tweets} />
          </Route>
          <Route path='/tweet1/:tweetId'>< TweetDetail tweet1 = {getRouteTweet()}/></Route>
        </Switch>
      
      {renderComposeModal()}
      </main>
      <Loader showLoading={showLoading}/>
    </div>
  );
}
export default App;