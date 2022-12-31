// const obj = {
//   adult: false,
//   backdrop_path: "/no2cllXSRA56LPipQnuPlg3RuTL.jpg",
//   genre_ids: [14, 28],
//   id: 557,
//   original_language: "en",
//   original_title: "Spider-Man",
//   overview:
//     "After being bitten by a genetically altered spider at Oscorp, nerdy but endearing high school student Peter Parker is endowed with amazing powers to become the superhero known as Spider-Man.",
//   popularity: 74.931,
//   poster_path: "/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg",
//   release_date: "2002-05-01",
//   title: "Spider-Man",
//   video: false,
//   vote_average: 7.3,
//   vote_count: 16469,
// };
import {useContext} from 'react'
import { ThemeContext } from "./Context/ThemeContextProvider";

export default function MovieCard({ data }) {
  const {genre} =useContext(ThemeContext);

    const getGenre=(idsArray)=>{
        let bag=[];
        for(let x of idsArray){
            for(let obj of genre){
                if(obj.id===x){
                    bag.push(obj.name)
                }
            }
        }
        return bag.join(' - ');
    }
  return (
    <div className="card">
      <img
        src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
        alt="movie"
      />
        <div className="info">
          <h3>{data.original_title}</h3>
          <p>{getGenre(data.genre_ids)}</p>
          </div>
    </div>
  );
}
