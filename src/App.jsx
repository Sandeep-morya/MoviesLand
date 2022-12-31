import { useState, useContext, useEffect, useRef } from "react";
import icon from "./search-outline.svg";
import "./App.css";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";
import { ThemeContext } from "./Context/ThemeContextProvider";
import Loader from "./Components/Loader";
import Navbar from "./Components/Navbar";
import Header from "./Header";

export default function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const { theme } = useContext(ThemeContext);
  let query = useRef("spiderman");

  const moviesList = async (query, page) => {
    const data = await (
      await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=d07a0aca26cbc2a87b8db46242e46675&query=${query}&page=${page}}`
      )
    ).json();
    setList(data.results);
    setPage(data.total_pages);
  };

  useEffect(() => {
    moviesList(query.current, currentPage);
  }, [currentPage]);

  if (list.length) {
    return (
      <div
        className="main"
        style={{ background: theme === "Dark" ? "white" : "Black" }}
      >
        <Header />
        <Navbar />
        <div className="search_bar">
          <input value={text} onChange={(e) => setText(e.target.value)} />
          <img
            onClick={() => {
              query.current = text;
              setCurrentPage(1);
              moviesList(query.current, 1);
            }}
            src={icon}
            alt="icon"
          />
        </div>
        <div className="movies">
          {list.map((e) => (
            <MovieCard key={e.id} data={e} />
          ))}
        </div>
        <div className="pagination">
          <Pagination
            page={page}
            current={currentPage}
            getdata={(e) => setCurrentPage(e)}
          />
        </div>
      </div>
    );
  } else {
    return <Loader />;
  }
}
