import * as articles from '../../data/articles.json';

export default function Articles() {
  return (
    <>
    {articles.forEach(article => {
      <div>
        <h1>
          {article.headlines.basic}
        </h1> 
        <img src={article.promo_items.basic.url}></img>
        <h1>
          {article.subheadlines.basic}
        </h1> 
        <p>
          {article.promo_items.caption}
        </p> 
        <ul>
          {article.related_stories?.forEach(story => {
            <li>{story.headlines.basics}</li>
          })}
        </ul>
        <hr className="solid"></hr>
      </div>
    })}
    </>
  );
}
