import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Igor", text: "Why am I learning React?" },
  { id: "q2", author: "Igor2", text: "Why am I learning React again?" },
  {
    id: "q3",
    author: "Igor3",
    text: "Why am I learning React again and again?",
  },
];

const QuotesList = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default QuotesList;
