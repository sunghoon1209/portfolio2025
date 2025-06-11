import styled from "styled-components";
import myImg from "../assets/my_img.png"

const StyledProfileSection =styled.section`
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`

const StyledImgCover =styled.div`
    width: 128px;
    height: 128px;
    border-radius: 50%;
    border: 1px solid #000;
    background: url(${myImg})no-repeat center/cover;
`

const StyledTitle = styled.div`
    h2{
        color:#0d0f1c;
        font-size: 22px;
        font-weight: 700;
        line-height: 28px;
        text-align: center;
    }
    h3{
        color:#47579E;
        font-size:16px;
        line-height: 24px;
        text-align: center;
    }
`



const Home = ()=>{
    return(
        <>
            <StyledProfileSection>
                <StyledImgCover></StyledImgCover>
                <StyledTitle>
                    <h2>주성훈</h2>
                    <h3>Web Publisher</h3>
                </StyledTitle>
            </StyledProfileSection>
        
        </>
    )
}

export default Home;