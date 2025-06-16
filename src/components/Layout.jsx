import Header from "./Header";
import { Outlet } from "react-router-dom";
import styled from "styled-components";


const StyledMain =styled.main`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px 160px;

    @media (max-width:768px){
      padding: 16px 20px;
    }
`

function Layout({ isDarkMode, setIsDarkMode }) {
    return (
      <>
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
        <StyledMain>
          <Outlet />
        </StyledMain>
      </>
    );
  }
  
  export default Layout;