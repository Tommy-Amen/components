import "./App.css";
import Accordion from "./components/accordion";
import ImageSlider from "./components/image-slider";
import LoadMoreButton from "./components/load-more-button";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";

function App() {
  return (
    <>
      {/* <Accordion />
      <RandomColor />
      <StarRating numberOfStars={10} />
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"} /> */}
      <LoadMoreButton/>
    </>
  );
}

export default App;
