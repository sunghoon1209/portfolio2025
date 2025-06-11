import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
    width: 100%;
    height: 65px;
    border-bottom: 1px solid #E5E8EB;
`
const StyledHeaderInner = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1280px;
    display: flex;
    align-items: center;
`


const Header = ()=>{
    return(
        <StyledHeader>
            <StyledHeaderInner>
                <nav>
                <Link to="/">Home</Link> | 
                <Link to="/about">About</Link> | 
                </nav>
            </StyledHeaderInner>        
      </StyledHeader>
    )
}

export default Header;