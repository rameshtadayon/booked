import { addBook, removeBook, updateBooks, editBook } from "./listSlice";
import axios from "axios";

export const loadBooksThunk = () => async (dispatch, getState) => {
  const apiResponse = await axios.get("http://localhost:3001/ListItems");

  dispatch(updateBooks(apiResponse.data));
};

export const addBookThunk = (title, author) => async (dispatch, getState) => {
  const data = { title, author };

  if (title && author) {
    const apiResponse = await axios.post(
      "http://localhost:3001/ListItems",
      data
    );
    dispatch(addBook(apiResponse.data));
  } else alert("Please input a Title and Author");
};

export const removeBookThunk = (id) => async (dispatch, getState) => {
  const apiResponse = await axios.delete("http://localhost:3001/ListItems", {
    data: { id },
  });
  dispatch(removeBook(id));
};

export const editBookThunk =
  (id, title, author) => async (dispatch, getState) => {
    const apiResponse = await axios.put("http://localhost:3001/ListItems", {
      id,
      title,
      author,
    });
    console.log(id, title, author);
    dispatch(editBook({ _id: id, title, author }));
  };
