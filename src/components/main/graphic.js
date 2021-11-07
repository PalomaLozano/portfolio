import GraphicImages from '../resources/GraphicImages';
import Portraits from '../resources/Portraits';
import Variety from '../resources/Variety';

const GraphicDes = () => {
  return (
    <>
      <section className="containerDesign">
        <div className="descriptionDesign">
          <h5 className="titleDes">Lineal Project</h5>
          <p className="graphicP">
            This project was created with Illustrator. It has a minimal style
            where the message prevails over technique. It was created for
            printing t-shirts and this are some of the best.
          </p>
        </div>
      </section>
      <GraphicImages />
      <section className="containerDesign">
        <div className="descriptionDesign">
          <h5 className="titleDes">Portraits Project</h5>
          <p className="graphicP">
            This project was created with Illustrator. It has been created with
            yellow and a monochromatic pink, making a high contrast between the
            two colors. This mix of colors may provoke to the spectator a
            feeling of strengh and closeness at the same time.
          </p>
        </div>
      </section>
      <Portraits />
      <section className="containerDesign">
        <div className="descriptionDesign">
          <h5 className="titleDes">Variety</h5>
          <p className="graphicP">
            This project was created with Illustrator. I selected some projects
            that haven´t got any correlation among them but I want to show.
          </p>
        </div>
      </section>
      <Variety />
    </>
  );
};
export default GraphicDes;
