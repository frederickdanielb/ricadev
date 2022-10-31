import bookingFailed from '../../images/booking-failed.png';

const BookingFailed = () => {
	return (
		<section className="bg-inner section-b-space success-section">
			<div className="container">
				<div className="row success-detail mt-0">
					<div className="col">
						<img src={bookingFailed} className="img-fluid" alt="" />
						<h2>oops ! Hubo un error al procesar la reserva</h2>
						<p>Tal parece que hubo un error. Por favor intentalo nuevamente.</p>
						<button type="submit" className="btn btn-solid color1">
							Empezar de nuevo
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};
export default BookingFailed;
