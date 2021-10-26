import gif from '../images/backdrop.mp4';

const Gif = () => {
  return (
    <video className="videoGif" autoPlay loop muted>
      <source src={gif} type="video/mp4" />
    </video>
  );
};

export default Gif;
