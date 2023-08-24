import pic1 from '../../images/img3.jpg'
import pic2 from '../../images/img2.jpg'
import pic3 from '../../images/img1.jpeg'

const Colossal = () =>
{
      return (
        <div class="container">
        <div class="row">
          <div class="col-2">
      
          </div>
      
          <div class="col-8">
            <div>
              <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossOrigin="anonymous" />
              <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={pic1} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={pic2} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={pic3} className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
          <div class="col-2">
      
          </div>
        </div>
      
      </div>
      );
    }
 ;

 export default Colossal;