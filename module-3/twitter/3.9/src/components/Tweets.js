import Tweet1 from './Tweet1';

const Tweets = (props) => {
    const renderTweets1 = () => {
        return props.tweets.map((tweet) => {
          return <Tweet1 key={tweet.id} tweet={tweet} />
        });
      }
    return <ul>{renderTweets1()}</ul>
}

export default Tweets;