import QuoteList from "../components/quotes/QuoteList";

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

const QuotesList = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default QuotesList;
