import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    updateBooks: (state, action) => {
      state.books = action.payload;
    },
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((b) => b._id !== action.payload);
    },
    editBook: (state, action) => {
      // const bookToEdit = state.books.find((b) => b._id === action.payload);
      // const bookIndex = state.books.indexOf(bookToEdit);
      // state.books = state.books.filter((b) => b._id !== action.payload);
      // state.books = state.books.splice(bookIndex, 0, bookToEdit);

      state.books = state.books.map((b) => {
        if (b._id === action.payload._id) {
          return action.payload;
        }
        return b;
      });
    },
  },
});

export const { addBook, removeBook, updateBooks, editBook } = listSlice.actions;

export const selectBooks = (state) => {
  return state.list.books;
};

export default listSlice.reducer;
