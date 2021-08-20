import aboutUsImage from '../../../assets/images/about_us.jpg';

function AboutUs() {
  return (
    <section className="about-us" id="about-us">
      <div className="main-container">
        <div className="image-container">
          <img src={aboutUsImage} alt="About Us" />
        </div>
        <div className="about-us-content">
          <h3 className="main-heading">About Us</h3>
          <p>
            We always make our customers happy by providing as many choices as possible top tourist destinations for you with advantages that have never been seen anywhere else as below.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutUs;