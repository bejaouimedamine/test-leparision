//This is an static component for the bloc 'en-continu'
import EnContinu from "./static/en-continu";
import Articles from './articles'

export default function Content() {
  return (
    <div className="layout-homepage__top">
      <div className="lp-container lp-container--fixed-narrow">
        <div className="arcad__wrapper">
          <section className="relative">
            <Articles></Articles>
            <EnContinu></EnContinu>
          </section>
        </div>
      </div>
    </div>
  );
}
