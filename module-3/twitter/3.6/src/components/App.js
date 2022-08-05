import { useEffect, useState } from 'react';
import '../styles/App.scss';
import adalabLogo from '../images/adalab-logo.png';
import getTweets from '../services/api';
import ls from '../services/local-storage';
import MainHeader from './MainHeader';
import HeaderMenuItem from './HeaderMenuItem';
import Tweet1 from './Tweet1';
import Tweet2 from './Tweet2';

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

  const handleComposeText = (ev) => {
    setComposeText(ev.target.value);
  }

  const handleComposeSubmit = (ev) => {
    ev.preventDefault();
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

  const renderHeader = () => {
    return (<header className="header">
    <nav className="menu">
      <ul className="menu__items">
        <HeaderMenuItem text="Ir al inicio" href="/home" liClass="twitter"/>
        <HeaderMenuItem text="Ir al inicio" href="/home" liClass="home"/>
        <HeaderMenuItem text="Buscar" href="/search" liClass="search"/>
        <HeaderMenuItem text="Perfil" href="/profile" liClass="profile"/>
        <li className="menu__item menu__item--tweet">
          <button className="menu__link" href="#" title="Twittear" onClick={handleToggleCompose}>
            <span className="text">Twittear</span>
          </button>
        </li>
      </ul>
    </nav>
  </header>)
  }

  const renderTweets1 = () => {
    return tweets.map((tweet) => {
      return <Tweet1 key={tweet.id} tweet={tweet} />
    });
  }

  const renderComposeModal = () => {
    const isButtonDisabled = composeText.length === 0;
    if(composeIsOpen) {
      return <div className="compose__modal-overlay">
        <form onSubmit={handleComposeSubmit}>
      <div className="compose__modal-wrapper">
        <div className="compose__modal-header">
          <button className="compose__modal-close-btn" onClick={handleToggleCompose}>
            Cerrar
          </button>
        </div>
        <div className="compose__modal-content">
          <img className="compose__profile-logo" src={adalabLogo} alt="Logo de Adalab" />
          <textarea className="compose__profile-textarea" placeholder="¿Qué está pasando?" value={composeText} onChange={handleComposeText}/>
        </div>
        <div className="compose__modal-footer">
          <button className="compose__modal-tweet-btn" disabled={isButtonDisabled}>
            Twittear
          </button>
        </div>
      </div>
      </form>
    </div>
    }
    
  }

  return (
    <div className="page">
      {renderHeader()}
      <main className="main">
      <MainHeader />
      <ul>{renderTweets1()}</ul>
      {renderComposeModal()}
      </main>
    </div>
  );
}
export default App;