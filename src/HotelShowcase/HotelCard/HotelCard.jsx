import { decode } from "he";
/* import { Rate } from "rsuite";
 */ import "./card.scss";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
const HotelCard = ({ hotel, hotelIndex, gridType, onSelectHotel }) => {
  const handleClickHotel = () => {
    if (onClick) onSelectHotel(hotel);
  };
  const getGridType = (gridType) => {
    if (gridType === 2) return "col-sm-6 popular grid-item wow fadeInUp";
    if (gridType === 3)
      return "col-xl-4 col-sm-6 popular grid-item wow fadeInUp";
    if (gridType === 4)
      return "col-xl-3 col-lg-4 col-sm-6 popular grid-item wow fadeInUp";
  };
  return (
    <div className={getGridType(gridType)} data-classname="popular">
      <div className="special-box CardHotel">
        <div className="special-img">
          <img
            onError={(evt) => (evt.target.src = "/images/hotel/gallery/2.jpg")}
            src={
              hotel.images.length > 0
                ? hotel.images[0].image
                : "/images/hotel/gallery/2.jpg"
            }
            className="img-fluid lazyload bg-img CardHotel__Image"
            alt=""
          />
        </div>
        <div className="special-content">
          <h5>{hotel.name} </h5>
          <span>
            <i className="fas fa-map-marker-alt"></i> {hotel.address}
          </span>
          <p className={"CardHotel__description"}>
            {decode(hotel.description)}
          </p>
          <div className="bottom-section">
            {/* <div className="rating">
              <Rate
                value={Number.parseInt(hotel.categoryCode)}
                size="xs"
                readOnly={true}
              />
            </div> */}
            <div className="price">
              <h3>Desde: </h3>
              <span className={"mt-2 pl-2"}>{hotel.minRate.CLP}</span>
              <small className={"mt-3 pl-1"}>{hotel.minRate.USD}</small>
            </div>
            <ul className="list-group mt-4">
              <li className="list-group-item CardHotel__ListItem">
                {hotel.rooms[0].name}
              </li>
              <li className="list-group-item CardHotel__ListItem">
                {hotel.rooms[0].rates[0].boardName}
              </li>
            </ul>
            <hr />
            <Button variant="dark" onClick={handleClickHotel}>
              Seleccionar
            </Button>
          </div>
        </div>
        {hotel.recommended && <div className="label-offer">Recommended</div>}
      </div>
    </div>
  );
};

HotelCard.propTypes = {
  hotel: PropTypes.object.isRequired,
  hotelIndex: PropTypes.number.isRequired,
  gridType: PropTypes.oneOf([2, 3, 4]).isRequired,
};
export default HotelCard;
