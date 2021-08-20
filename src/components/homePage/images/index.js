import img_1 from '../../../assets/images/img1.jpg';
import img_2 from '../../../assets/images/img2.jpg';
import img_3 from '../../../assets/images/img3.jpg';

function Images() {
  return (
    <div className="images" id="images">
      <div className="main-container">
        <div className="images-container">
          <div className="img">
            <img src={img_1} alt="Review 1" />
          </div>
          <div className="img">
            <img src={img_2} alt="Review 2" />
          </div>
          <div className="img">
            <img src={img_3} alt="Review 3" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Images;