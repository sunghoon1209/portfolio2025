import Header from "./Header";
import { Outlet } from "react-router-dom";
import styled from "styled-components";


const StyledMain =styled.main`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px 160px;
`

function Layout() {
    return (
      <>
        <Header />
        <StyledMain>
          <Outlet />
        </StyledMain>
      </>
    );
  }
  
  export default Layout;