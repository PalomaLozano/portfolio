import PosterImages from '../resources/PosterImages';

const Posters = () => {
  return (
    <>
      <section className="containerDesign">
        <div className="descriptionDesign">
          <h5 className="titleDes">Posters</h5>
          <p className="graphicP">
            Here you can see a set of my best posters. They haven´t got any
            correlation between them. They were used for expositions, solidarity
            groups, product sellers, yoga trainers... They were created with a
            mix of Photoshop, InDesing and Illustrator. Also, some photographies
            are mine.
          </p>
        </div>
      </section>
      <PosterImages />
    </>
  );
};

export default Posters;
