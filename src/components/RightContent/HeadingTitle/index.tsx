import styled from "styled-components";
import BreakPoints from '../../../utils/Breakpoints'


interface Props{
    title: string;
}

const HeadingTitle: React.FC<Props> = ({title}) => {

    return (
        <Title>{title}</Title>
    );
}

export default HeadingTitle;


const Title = styled.h1`
  color: #0759B3;
  font-size: 1.4em;
  font-weight: bolder;
  
  @media all and ${BreakPoints.preMedium}{
    font-size: 1.2em;
  }
`;
