import styled from "styled-components";
import SearchOutline from '../../../assets/images/icons/search-outline.svg'

const Search: React.FC = () => {

    return (
        <InputSearch>
            <img alt={"Search Icon"} src={SearchOutline}/>
            <input type={"search"} placeholder={"Pesquisar Cidades"}/>
        </InputSearch>
    )
}

export default Search;


const InputSearch = styled.div`
  height: 35px;
  width: auto;
  display: flex;
  border-radius: 5px;
  padding: 0.3em 1em;
  align-content: center;
  align-items: center;
  background-color: #F7F6F9;
  
  
  img{
    width: 25px;
    height: 25px;
    margin-right: 10px;
  }
  
  input{
    width: 100%;
    height: 100%;
    border: none;
    background-color: #F7F6F9;
    font-size: 1.1em;
  }

  input::placeholder{
    font-size: 1em !important;
  }

`;
