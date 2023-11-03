/* eslint-disable jsx-a11y/alt-text */

import EnContinu from "./static/en-continu";
import * as articles from '../../data/articles.json';

/* eslint-disable @next/next/no-img-element */
export default function Articles() {
    return (<div className="layout-homepage__top">
    <div className="lp-container lp-container--fixed-narrow">
       <div className="arcad__wrapper">
          <section className="relative">
             <div className="homepage__top">
                {articles.map(article => 
                    <div className="homepage__top-spotlight-main" key={article._id}>
                        <div className="stories">
                            <ul className="stories__list stories__list--une">
                                <li className="stories__item">
                                    <article className="lp-card-article lp-card-article--une lp-card-article--with-img lp-font-smoothing lp-color-text lp-box-sizing">
                                    <div className="lp-card-article__media">
                                        <div className="lp-image-responsive">
                                            <img className="lp-image-responsive__img" src={article.promo_items.basic.url} alt={article.promo_items.basic.caption} />
                                        </div>
                                    </div>
                                    <a className="lp-card-article__link lp-f-title-02-strong" href={`//www.leparisien.fr/${article.canonical_url}`}>
                                        {article.headlines.basic}
                                        <span className="lp-card-article__nowrap" title="Réservé aux abonnés">
                                            <svg className="lp-marker-p lp-marker-p--size-16" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 0H0v16h16V0ZM7.63 9.696c.462-.128 2.77-1.056 2.77-3.616 0-2.176-1.508-2.88-2.985-2.88H6.4v9.6h1.23V9.696Zm0-5.408c.616 0 1.385.352 1.385 1.792 0 1.728-1.23 2.368-1.384 2.4V4.288Z" fill="var(--color-subscription)"></path>
                                            </svg>
                                        </span>
                                    </a>
                                    <p className="lp-card-article__text lp-f-body-03">
                                        {article.subheadlines.basic}
                                    </p>
                                    <ul className="lp-card-article__related ">
                                        {
                                            article.related_stories?.map(story =>
                                            <li className="lp-card-article__related-item" key={story._id}>
                                                <p className="lp-card-article__related-title lp-f-subtitle-06">
                                                    <a className="lp-card-article__related-link" href={`//www.leparisien.fr/${story.website_url}`} data-page-type="HP" data-block-name="TOP">
                                                    {story.headlines.basic}
                                                    <span className="lp-card-article__nowrap" title="Réservé aux abonnés">
                                                        <svg className="lp-marker-p lp-marker-p--size-16" viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 0H0v16h16V0ZM7.63 9.696c.462-.128 2.77-1.056 2.77-3.616 0-2.176-1.508-2.88-2.985-2.88H6.4v9.6h1.23V9.696Zm0-5.408c.616 0 1.385.352 1.385 1.792 0 1.728-1.23 2.368-1.384 2.4V4.288Z" fill="var(--color-subscription)"></path>
                                                        </svg>
                                                    </span>
                                                    </a>
                                                </p>
                                            </li>)
                                        }
                                    </ul>
                                    </article>
                                </li>
                            </ul>
                        </div>
                        <hr style={{marginTop: '20px', marginBottom: '20px'}}/>
                    </div>
                )}
                <div className="homepage__top-right">
                    <EnContinu></EnContinu>
                </div>
             </div>
          </section>
       </div>
    </div>
 </div>)
}