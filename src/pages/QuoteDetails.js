import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
const QuoteDetails = () => {
  const params = useParams();
  return (
    <>
      <h2>Quote Details Page</h2>
      <p>{params.quoteId}</p>
      <Route path="quotes/:quoteId/comments"></Route>
      <Comments />
    </>
  );
};

export default QuoteDetails;
