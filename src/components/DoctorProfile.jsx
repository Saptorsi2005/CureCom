import { useEffect, useState } from "react";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";
import { getDoctorReviews, getDoctorAverageRating } from "../config/firebaseFunctions";

const DoctorProfile = ({ doctorId, userId }) => {
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);

  // Fetch reviews
  const fetchReviews = async () => {
    const data = await getDoctorReviews(doctorId);
    setReviews(data);
    const avg = await getDoctorAverageRating(doctorId);
    setAverageRating(avg);
  };

  useEffect(() => {
    fetchReviews();
  }, [doctorId]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Doctor Profile</h2>
      <p className="text-lg font-bold">⭐ {averageRating} / 5</p>

      {userId && <ReviewForm doctorId={doctorId} userId={userId} onReviewSubmit={fetchReviews} />}
      
      <ReviewList reviews={reviews} />
    </div>
  );
};

export default DoctorProfile;