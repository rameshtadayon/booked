import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectBooks } from "./listSlice";
import styles from "./List.module.css";
import { loadBooksThunk, removeBookThunk, editBookThunk } from "./listThunks";

export function List() {
  const [editID, setEditID] = useState(null);
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const books = useSelector(selectBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBooksThunk());
  }, []);
  const bookList = books.map((b) => {
    return (
      <div className={styles.book}>
        {b._id === editID ? (
          <div className={styles.bookInfo}>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
        ) : (
          <div className={styles.bookInfo}>
            <div className={styles.Title}>{b.title}</div>
            <div className={styles.author}>{b.author}</div>
          </div>
        )}
        <div className={styles.actionButtons}>
          <div className={styles.deleteButtonDiv}>
            <button
              className={styles.deleteButton}
              onClick={() => {
                console.log(b._id);
                dispatch(removeBookThunk(b._id));
              }}
            >
              Delete
            </button>
          </div>
          <div className={styles.editButtonDiv}>
            <button
              className={styles.editButton}
              onClick={
                b._id === editID
                  ? () => {
                      // TODO: update the book
                      setEditID(null);
                      dispatch(editBookThunk(b._id, title, author));
                    }
                  : () => {
                      setTitle(b.title);
                      setAuthor(b.author);
                      setEditID(b._id);
                    }
              }
            >
              {b._id === editID ? <label>Done</label> : <label>Edit</label>}
            </button>
          </div>
        </div>
      </div>
    );
  });

  return <div className={styles.allBooks}>{bookList}</div>;
}
