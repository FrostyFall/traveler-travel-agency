import DiscoverToursImage from '../../../assets/images/discover-tours.jpg';

function AllToursShowcase() {
  return (
    <section className="all-tours-showcase">
      <div className="main-container">
        <div className="image-container">
          <img src={DiscoverToursImage} alt="Discover Tours" />
        </div>
        <h2>Discover Wonderful Tours</h2>
      </div>
    </section>
  )
}

export default AllToursShowcase;