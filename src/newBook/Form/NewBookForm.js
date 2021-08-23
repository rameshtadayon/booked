import { useState } from "react";
import "./newBookForm.css";
import { addBookThunk } from "../../features/listThunks";
import { useDispatch } from "react-redux";

export function NewBookForm() {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  return (
    <div className="newBookForm">
      <form className="bookForm">
        <label className="titleLabel" for="title">
          Book Title:
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className="authorLabel" for="author">
          Author:
        </label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          className="submitLabel"
          type="submit"
          value="Add Book"
          disabled={!author || !title}
          onClick={() => dispatch(addBookThunk(title, author))}
        />
      </form>
    </div>
  );
}

export default NewBookForm;
