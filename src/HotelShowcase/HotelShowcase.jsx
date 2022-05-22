import HotelCard from "./HotelCard";

const HotelShowcase = ({ hotels = [], gridType, onSelectHotel }) => {
  return (
    <div className="product-wrapper-grid special-section grid-box">
      <div className="row  content grid">
        {hotels.map((hotel, idx) => {
          return (
            <HotelCard
              key={"Card-Hotel-" + idx}
              hotel={hotel}
              hotelIndex={idx}
              gridType={gridType}
              onSelectHotel={onSelectHotel}
            ></HotelCard>
          );
        })}
      </div>
    </div>
  );
};
export default HotelShowcase;
