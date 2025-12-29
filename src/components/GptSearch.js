import { BG_URL } from "../utils/Constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch =()=>{
    return (
        <div>
              <div className="absolute -z-10">
                <img
                    src={BG_URL}
                    alt="background"
                />
            </div>
            <GptSearchBar/>
            <GptMovieSuggestions/>
        </div>
    )
}
export default GptSearch;