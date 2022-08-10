import { Link } from 'react-router-dom';
import '../styles/components/TweetDetail.scss';

const TweetDetail = (props) => {

    const handleBackButton = () => {
        window.history.back();
    }

  return (
    <section className="tweet-detail">
      <header className="tweet-detail__header">
        <Link className="tweet-detail__back-btn" to="/" onClick={handleBackButton}>
          <span>Volver atrás</span>
        </Link>
        <h2 className="tweet-detail__header-title">Tweet</h2>
      </header>
      <article className="tweet-detail__content">
        <p className="tweet-detail__user-info">
          <img
            className="tweet-detail__avatar"
            src={props.tweet1.avatar}
            alt={`Avatar de ${props.tweet1.user}`}
          />
          <span>
            <span className="tweet-detail__user">{props.tweet1.user}</span>
            <span className="tweet-detail__username">@{props.tweet1.username}</span>
          </span>
        </p>
        <p className="tweet-detail__text">{props.tweet1.text}</p>
        <span className="tweet-detail__date">{props.tweet1.date}</span>
        <ul className="tweet-detail__actions">
          <li className="tweet-detail__action">
            {props.tweet1.retweets} <span className="tweet-detail__actions-text">Retweets</span>
          </li>
          <li className="tweet-detail__action">
            {props.tweet1.comments} <span className="tweet-detail__actions-text">Comentarios</span>
          </li>
          <li className="tweet-detail__action">
            {props.tweet1.likes} <span className="tweet-detail__actions-text">Me gusta</span>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default TweetDetail;