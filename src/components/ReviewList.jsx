const ReviewList = ({ reviews }) => {
    return (
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Patient Reviews</h3>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review.id} className="p-3 mt-2 border rounded shadow-sm">
              <p className="font-bold">⭐ {review.rating} Stars</p>
              <p>{review.review}</p>
              <small className="text-gray-500">
                {review.timestamp?.toDate ? review.timestamp.toDate().toLocaleString() : "Just now"}
              </small>
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
    );
  };
  
  export default ReviewList;