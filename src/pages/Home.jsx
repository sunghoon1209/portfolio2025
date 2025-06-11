import styled from "styled-components";
import myImg from "../assets/my_img.png"

const StyledProfile =styled.section`
    width: 100%;
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
        text-align: center;
    }
    h3{
        color:#47579E;
        font-size:16px;
        line-height: 24px;
        text-align: center;
    }
`
const StyledH2 =styled.h2`
    padding: 20px 0 12px;
`

const StyledAboutMe =styled.section`
    width: 100%;
    padding: 0 16px;
`

const StyledSkills = styled.section`
    width: 100%;
    padding: 0 16px;
`
const StyledSkillsList =styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    padding: 12px 0;

    li{
        display: flex;
        align-items: center;
        
        height: 32px;
        padding: 0 16px;
        border-radius: 8px;
        background-color:#e5e8f5;
        color: #0d0f1c;
        font-size: 14px;
        font-weight: 500;
        line-height: 21px;
    }
`

const StyledExperience = styled.section`
    width: 100%;
    padding: 0 16px;
`
const StyledEducation = styled.section`
    width: 100%;
    padding: 0 16px;
`
const StyledContact = styled.section`
    width: 100%;
    padding: 0 16px;
`

const Home = ()=>{
    return(
        <>
            <StyledProfile>
                <StyledImgCover></StyledImgCover>
                <StyledTitle>
                    <h2>주성훈</h2>
                    <h3>Web Publisher</h3>
                </StyledTitle>
                <StyledAboutMe>
                    <StyledH2>About Me</StyledH2>
                </StyledAboutMe>
                <StyledSkills>
                    <StyledH2>Skills</StyledH2>
                    <StyledSkillsList>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>SCSS</li>
                        <li>JAVASCRIPT</li>
                        <li>React</li>
                        <li>GIT</li>
                        <li>FIGMA</li>
                    </StyledSkillsList>
                </StyledSkills>
                <StyledExperience>
                    <StyledH2>Experience</StyledH2>
                </StyledExperience>
                <StyledEducation>
                    <StyledH2>Education</StyledH2>
                </StyledEducation>
                <StyledContact>
                    <StyledH2>Contact</StyledH2>
                </StyledContact>
            </StyledProfile>
        
        </>
    )
}

export default Home;