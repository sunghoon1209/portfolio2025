import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

const StyledLogo = styled.h1`
    font-size: 18px;
    font-weight: 700;
`

const StyledHeader = styled.header`
    width: 100%;
    height: 65px;
    border-bottom: 1px solid #E5E8EB;
`
const StyledHeaderInner = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
`

const StyledNav = styled.nav`
    display: flex;
    gap: 36px;
    align-items: center;
    font-family: 'GmarketSansMedium';

`

const StyledDarkButton = styled.button`
        font-size:14px;
        display: flex;
        align-items: center;
        font-family: 'GmarketSansMedium';
`

const Header = ()=>{
    const [isDark, setIsDark] = useState(false);
    return(
        <StyledHeader>
            <StyledHeaderInner>
                <StyledLogo>
                    Portfolio
                </StyledLogo>
                <StyledNav>
                    <Link to="/">Home</Link> 
                    <Link to="/Project">Project</Link>
                    <StyledDarkButton onClick={()=>{setIsDark(!isDark)}}>
                        {isDark?'Lights':'Dark'}
                    </StyledDarkButton>
                </StyledNav>
            </StyledHeaderInner>        
      </StyledHeader>
    )
}

export default Header;