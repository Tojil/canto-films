import SimpleImageSlider from "react-simple-image-slider";
import '../styles/Slide.css'
import img1 from '../images/atrides1.jpg'
import img2 from '../images/atrides2.jpg'
import img3 from '../images/lunes1.jpg'
import img4 from '../images/lunes2.jpg'
import img5 from '../images/lunes3.jpg'
import img6 from '../images/lunes4.jpg'
import img7 from '../images/lunes5.jpg'
import img8 from '../images/lunes6.jpg'
import img9 from '../images/lunes7.jpg'

const images = [
    { url: `${img1}` },
    { url: `${img2}` },
    { url: `${img3}` },
    { url: `${img4}` },
    { url: `${img5}` },
    { url: `${img6}` },
    { url: `${img7}` },
    { url: `${img8}` },
    { url: `${img9}` }
  ];

function Slide() {
    return (
      <div className="slide-show">
        <SimpleImageSlider
          width={896}
          height={504}
          images={images}
          showBullets={true}
          showNavs={true}
        />
      </div>
    );
  }

  export default Slide