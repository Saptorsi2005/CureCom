import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase";
import { collection, addDoc, getDocs, query, where, orderBy, serverTimestamp } from "firebase/firestore";

export const createUserWithEmail = async({email, password}) => {
    try {
        const response = await createUserWithEmailAndPassword(auth,email, password)
        const user = response.user
        return user
    } catch (error) {
        
    }
}

// Submit a review
export const submitReview = async (doctorId, userId, rating, review) => {
  try {
    await addDoc(collection(db, "doctorReviews"), {
      doctorId,
      userId,
      rating,
      review,
      timestamp: serverTimestamp(), // Use Firestore server timestamp
    });
  } catch (error) {
    console.error("Error submitting review:", error);
  }
};

// Fetch reviews for a doctor
export const getDoctorReviews = async (doctorId) => {
  try {
    const q = query(
      collection(db, "doctorReviews"),
      where("doctorId", "==", doctorId),
      orderBy("timestamp", "desc")
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return [];
  }
};

// Get average rating for a doctor
export const getDoctorAverageRating = async (doctorId) => {
  const reviews = await getDoctorReviews(doctorId);
  if (reviews.length === 0) return 0;
  const totalRating = reviews.reduce((sum, r) => sum + r.rating, 0);
  return (totalRating / reviews.length).toFixed(1);
};