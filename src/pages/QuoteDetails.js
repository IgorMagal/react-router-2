import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "-Nelson Mandela",
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  },
  {
    id: "q2",
    author: "-Walt Disney",
    text: "The way to get started is to quit talking and begin doing.",
  },
  {
    id: "q3",
    author: "-Steve Jobs",
    text: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
  },
];

const QuoteDetails = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path="quotes/:quoteId/comments"></Route>
      <Comments />
    </>
  );
};

export default QuoteDetails;
