import styled from "styled-components";
import {useContext} from "react";
import {GlobalContext} from "../../../../../store/GlobalStore";
import {CityResults} from "../../../../../models";

interface Props{
    searchResults: CityResults[]
}

const SearchResults: React.FC<Props> = ({searchResults}) => {

    const {setQueryCity} = useContext(GlobalContext);

    function handleSelectCity(cityName: string){
        if (cityName){
            console.log(cityName);
            setQueryCity(cityName);
        }else{
            console.log("Not yet");
        }
    }

    return (
        <InputResultsContainer>
            <ul>
                {searchResults.map((result: CityResults, index) => (
                    <li key={index} onClick={() => handleSelectCity(result.name)}>{result.name} - <span>{result.countryCode}</span></li>
                ))}
            </ul>
        </InputResultsContainer>
    )
}

export default SearchResults;


const InputResultsContainer = styled.div`
  background-color: white;
  width: auto;
  padding: 0.5em 1em;
  height: auto;
  border-radius: 8px;
  margin-top: 0.6em;
  box-shadow: 6px 5px 20px 2px rgba(255,255,255, 0.3);
  transition: all 1s;

  ul {
    list-style: none;
    li {
      padding: 0.8em 0;
      border-bottom: 1px solid #E5E5E5;
      transition: all 0.6s;

      &:hover{
        background-color: #E5E5E5;
        cursor: pointer;
      }
      
      span {
        color: #9d9b9b;
        font-size: 0.9em;
      }
    }

    li:nth-last-child(1){
      border-bottom: none;
    }
  }
`;
