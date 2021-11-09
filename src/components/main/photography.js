import PhotoImages from '../resources/projectphoto1';
import PhotoImagesTwo from '../resources/projectphoto2';
import PhotoImagesThree from '../resources/projectphoto3';

const Photo = () => {
  return (
    <>
      <section className="containerDesign">
        <div className="descriptionDesign">
          <h5 className="titleDes">Bridge Project</h5>
          <p className="graphicP">
            This project was made with a compact camera. Following the lines of
            the bridge I made this composition.
          </p>
        </div>
      </section>
      <PhotoImages />
      <section className="containerDesign">
        <div className="descriptionDesign">
          <h5 className="titleDes">Wildness Project & Story</h5>
          <p className="graphicP">
            This project was made with a Canon 77D. It was made in the country
            side, taking advantage of the colors. However, the enviroment
            offered us photographies which in the post-production process they
            became a story.
          </p>
        </div>
      </section>
      <PhotoImagesTwo />

      <section className="containerDesign">
        <div className="descriptionDesign">
          <h5 className="titleDes">Roots project</h5>
          <p className="graphicP">
            This project was made with a Canon 77D. It was made in a photography
            studio. We want to a make a photography session emphasizing in the
            African culture.
          </p>
        </div>
      </section>
      <PhotoImagesThree />
    </>
  );
};

export default Photo;
