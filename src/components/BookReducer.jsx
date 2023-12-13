import {
  BuyBook,
  AddBook,
  AddBookWithHeading,
  RemoveBookWithHeading,
} from "./BookType";

const initialState = {
  NumberOfBook: 0,
  headings: [],
  selectedCards: [],
};

const BookReducer = (state = initialState, action) => {
  switch (action.type) {
    case AddBookWithHeading:
      return {
        ...state,
        NumberOfBook: state.NumberOfBook + 1,
        headings: [...state.headings, action.payload],
        selectedCards: [...state.selectedCards, action.payload],
      };
    case RemoveBookWithHeading:
      return {
        ...state,
        NumberOfBook: state.NumberOfBook - 1,
        headings: state.headings.filter(
          (heading) => heading !== action.payload
        ),
        selectedCards: state.selectedCards.filter(
          (card) => card.heading !== action.payload
        ),
      };
   
    default:
      return state;
  }
};

export default BookReducer;
