import { Route, useParams, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { useEffect } from "react";

const QuoteDetails = () => {
  const params = useParams();
  const routeMatch = useRouteMatch();
  console.log(routeMatch);

  const { quoteId } = params;
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [quoteId, sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <div className="centered">{error}</div>;
  }

  if (!loadedQuote.text) {
    return (
      <div className="centered">
        <p>No quote text found!</p>
      </div>
    );
  }

  return (
    <>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={routeMatch.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${routeMatch.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${routeMatch.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetails;
