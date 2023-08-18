import { getMovieReviews } from "api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export default function Review() {
  const [review, setReview] = useState([]);
  const { movieId } = useParams();
  const [reviewStatus, setReviewStatus] = useState(true);

  useEffect(() => {
    try {
      const response = getMovieReviews(movieId);
      response.then(data => {
       data.results.map(({ author, content }) =>
         setReview(r => [...r, { author, content }])
       );
        data.results.length === 0
          ? setReviewStatus(false)
          : setReviewStatus(true);
      });
    } catch (error) {}
  }, [movieId]);

  return (
    <>
      <ul>
        {review.map(({ author, content }, index) => {
          return (
            <li key={index}>
              <h4>Author: {author}</h4>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
      {!reviewStatus && <p>We don't have any reviews for this movie.</p>}
    </>
  );
}
