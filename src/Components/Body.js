import "./body.css";

export default function Body() {
  return (
    <main>
      <section className="carouselSection">
        <div className="carousel">
          <div className="imgContainer" id="container1">
            <img
              src="https://templatedemo.website.com/remote/imageProxy.cfc?method=viewLibraryImage&d=familywellness&s=MDApIkIuLDtZPSFbPVgzNkEoViYgKlAgIAo%3D&w=940-425"
              alt=""
            />
          </div>
          <div className="imgContainer" id="container2">
            <img
              src="https://templatedemo.website.com/remote/imageProxy.cfc?method=viewLibraryImage&d=familywellness&s=MEdNNExVRU1VOEJUTDsxUzI8TldKIFAgIAo%3D&w=940-425"
              alt=""
            />
          </div>
          <div className="imgContainer" id="container3">
            <img
              src="https://templatedemo.website.com/remote/imageProxy.cfc?method=viewLibraryImage&d=familywellness&s=MDwuJCkoN1tbV0VDJCw7Mzc9LkknVjAgIAo%3D&w=940-425"
              alt=""
            />
          </div>
        </div>
        <i className="fa-solid fa-angle-left leftButton"></i>
        <i className="fa-solid fa-angle-right rightButton"></i>
        <div className="dots">
          <a href="#container1" className="dot1"></a>
          <a href="#container2" className="dot2"></a>
          <a href="#container3" className="dot2"></a>
        </div>
      </section>

      <section className="thinkSection">
        <p className="thinkHeading">Think Health. Think Massage.</p>
        <p className="thinkDetails">
          We are open 9am to 6pm; Monday through Sunday. If you would like to
          schedule an appointment with us, please call us at 987-654-3210 today!
        </p>
        <div className="buttons">
          <button className="learnMore">LEARN MORE ABOUT US</button>
          <button className="contactUs">CONTACT US TODAY</button>
        </div>
      </section>

      <section className="details">
        <div className="sampleDetails">
          <p className="sample1">
            Are you looking for a professional, registered massage therapist?
            Sample Massage Therapy has 4 registered massage therapists who can
            provide clinical massage.
          </p>
          <p className="sample2">
            We are committed to your long term health and well-being. Our
            multi-disciplinary clinic provides a balanced approach to a healthy
            lifestyle. Enhance your health and improve your performance with our
            treatments.
          </p>
          <p className="sample3">
            We welcome you to come explore all the benefits you’ll enjoy as one
            of our valued guests. Our professional staff is committed to
            offering the best massage therapy in Mainland.
          </p>
        </div>
      </section>
    </main>
  );
}
