import { useState } from "react";
import { submitReview } from "../config/firebaseFunctions";

const ReviewForm = ({ doctorId, userId, onReviewSubmit }) => {
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitReview(doctorId, userId, rating, review);
    setReview(""); // Clear form

    // ✅ Update review list after submission
    onReviewSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">Leave a Review</h3>

      <select value={rating} onChange={(e) => setRating(Number(e.target.value))} className="border p-2">
        {[5, 4, 3, 2, 1].map((num) => (
          <option key={num} value={num}>{num} Stars</option>
        ))}
      </select>

      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Write your review..."
        className="w-full p-2 border rounded mt-2"
      ></textarea>

      <button type="submit" className="px-4 py-2 mt-2 text-white bg-blue-600 rounded">
        Submit Review
      </button>
    </form>
  );
};

export default ReviewForm;