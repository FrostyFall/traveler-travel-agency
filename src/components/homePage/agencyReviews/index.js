import useFetch from "../../../hooks/useFetch";
import AgencyReview from "../agencyReview";

function AgencyReviews() {
  const { data } = useFetch(
    "https://wandering-garment-eel.cyclic.app/api/v1/agency-reviews"
  );
  const { data: response, isFetching, isError } = data;

  return (
    <section className='agency-reviews' id='agency-reviews'>
      <div className='main-container'>
        <h3 className='main-heading'>What Our Clients Think About Us</h3>
        <div className='reviews-container'>
          {(isFetching || isError) && (
            <>
              <AgencyReview />
              <AgencyReview />
              <AgencyReview />
            </>
          )}
          {!isFetching &&
            !isError &&
            response.map((agencyReview) => {
              const { author, country, review } = agencyReview;
              const props = {
                author,
                country,
                review,
              };
              return <AgencyReview {...props} key={agencyReview.id} />;
            })}
        </div>
      </div>
    </section>
  );
}

export default AgencyReviews;
