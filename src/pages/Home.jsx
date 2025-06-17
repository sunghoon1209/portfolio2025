import styled from "styled-components";
import myImg from "../assets/my_img.png"
import companyIcon from "../assets/icon_company.png";
import educationIcon from "../assets/icon_education.png"
import companyIconWhite from "../assets/icon_company_white.png";
import educationIconWhite from "../assets/icon_education_white.png"
import { useState } from "react";
const StyledProfile =styled.section`
    width: 100%;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`

const StyledImgCover =styled.div`
    width: 192px;
    height: 192px;
    border-radius: 50%;
    border: 1px solid ${({ $isDarkMode }) => $isDarkMode ? '#fff' : '#000'};
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

    p{
        padding:12px 16px;
    }

    @media (max-width:768px){
        padding:0;

        p{
            padding: 0;
        }
    }
`

const StyledSkills = styled.section`
    width: 100%;
    padding: 0 16px;

    @media (max-width:768px){
        padding: 0;
    }
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
        cursor: pointer;
    }

    @media (max-width:768px){
        padding: 0;

        li{
            padding: 0 12px;
        }
    }
`

const StyledSkillsDescription = styled.p`
    padding:12px 16px;

    @media (max-width:768px){
        padding: 0;
    }

`

const StyledExperience = styled.section`
    width: 100%;
    padding: 0 16px;
    @media (max-width:768px){
        padding: 0;
    }
`

const StyledExperienceList = styled.ul`
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (max-width:768px){
        padding: 0;
    }
    

`
const StyledExperienceItem = styled.li`
    padding-left:40px;    
background-image: url(${({ $isDarkMode }) => $isDarkMode ? companyIconWhite : companyIcon});
    background-repeat: no-repeat;
    p{
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        font-family: 'GmarketSansMedium';  
        color:inherit;

        span{
            color: #47579E;
            font-weight:400;
            font-family: 'SUIT-Regular';
        }
    }
`
const StyledEducationList = styled.ul`
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (max-width:768px){
        padding: 0;
    }

`
const StyledEducationItem = styled.li`
    padding-left:40px;    
background-image: url(${({ $isDarkMode }) => $isDarkMode ? educationIconWhite : educationIcon});

    background-repeat: no-repeat;
    p{
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        font-family: 'GmarketSansMedium';  
        color:inherit;

        span{
            color: #47579E;
            font-weight:400;
            font-family: 'SUIT-Regular';
        }
    }
`

const StyledEducation = styled.section`
    width: 100%;
    padding: 0 16px;

    @media (max-width:768px){
        padding: 0;
    }
`
// const StyledContact = styled.section`
//     width: 100%;
//     padding: 0 16px;
// `


const Home = ({isDarkMode})=>{
    const [skillsDescription,setSkillsDescription] = useState(0);

    const handledSkillsDesc = (skill)=>{
        setSkillsDescription(skill)
    }
    
    return(
        <>
            <StyledProfile>
                <StyledImgCover $isDarkMode={isDarkMode} />
                <StyledTitle>
                    <h2>주성훈</h2>
                    <h3>Web Publisher</h3>
                </StyledTitle>
                <StyledAboutMe>
                    <StyledH2>About Me</StyledH2>
                        <p>구조적이고 유지보수에 강한 마크업을 지향하는 웹 퍼블리셔입니다. 정확한 디자인 구현은 물론, 협업을 위한 효율적인 코드 설계에 집중합니다. JavaScript를 활용한 동적인 UI 구현 경험을 바탕으로 React 등 프론트엔드 영역으로 꾸준히 확장해가고 있습니다. 끊임없이 배우고 성장하려는 자세로 더 나은 사용자 경험과 퍼블리싱 품질을 위해 노력하고 있습니다.</p>
                </StyledAboutMe>
                <StyledSkills>
                    <StyledH2>Skills</StyledH2>
                    <StyledSkillsList>
                        <li onClick={()=>{handledSkillsDesc("html")}}>HTML</li>
                        <li onClick={()=>{handledSkillsDesc("css")}}>CSS</li>                        
                        <li onClick={()=>{handledSkillsDesc("js")}}>JAVASCRIPT</li>
                        <li onClick={()=>{handledSkillsDesc("react")}}>React</li>
                        <li onClick={()=>{handledSkillsDesc("git")}}>GIT</li>
                        <li onClick={()=>{handledSkillsDesc("figma")}}>FIGMA</li>
                    </StyledSkillsList>
                    <StyledSkillsDescription>
                        {skillsDescription === "html" && `다양한 실무 프로젝트를 통해 시맨틱한 HTML 구조를 작성하며, 웹 접근성과 유지보수성을 고려한 마크업을 중요하게 생각합니다.반복되는 컴포넌트를 구조화하고, 효율적인 클래스 네이밍과 섹션 구분으로 퍼블리싱의 일관성을 유지하는 데 강점을 가지고 있습니다.`}
                        {skillsDescription === "css" && `디자인 시안을 정확하게 구현하며, 반복되는 스타일은 공통 클래스로 분리하여 유지보수를 용이하게 합니다. 실무에서 컴포넌트 단위로 CSS를 모듈화하고, 반응형 및 적응형 레이아웃을 상황에 따라 유연하게 적용해왔습니다.`}
                        {skillsDescription === "js" && "ES6+ 문법에 익숙하며, 이벤트 처리, DOM 조작, 자바스크립트 기능을 능숙하게 다룰 수 있습니다. 특히 Vanilla JS로 사용자 인터랙션 기능을 직접 구현한 경험이 많습니다."}
                        {skillsDescription === "react" && "useState, useEffect, axios로 상태 및 데이터 관리를 했으며, styled-components와 React Router를 활용한 컴포넌트 중심 개발 경험이 있습니다."}
                        {skillsDescription === "git" && "원격 레포지토리 생성부터 git clone, git status, git add, git commit, git push 등 기본적인 Git 명령어를 사용하여 개인 프로젝트를 관리해본 경험이 있습니다."}
                        {skillsDescription === "figma" && "Figma 시안을 기반으로 컴포넌트 구조를 분석하고, 레이아웃 및 스타일을 웹 표준에 맞게 구현할 수 있습니다. 디자인 시스템과 오토 레이아웃 등 Figma 기능을 이해하고 있어 디자이너와의 원활한 협업이 가능합니다."}
                    </StyledSkillsDescription>
                </StyledSkills>
                <StyledExperience>
                    <StyledH2>Experience</StyledH2>
                    <StyledExperienceList>
                        <StyledExperienceItem $isDarkMode={isDarkMode}>
                            <p>시스포유 웹 퍼블리셔</p>
                            <p><span>2024.6 - Present</span></p>
                            
                        </StyledExperienceItem>
                    </StyledExperienceList>
                </StyledExperience>
                <StyledEducation>
                    <StyledH2>Education</StyledH2>
                    <StyledEducationList>
                        <StyledEducationItem $isDarkMode={isDarkMode}>
                            <p>한국방송통신대학교 컴퓨터과학과 재학중</p>
                            <p><span>2025.3 (편입) - Present</span></p>
                        </StyledEducationItem>
                        <StyledEducationItem $isDarkMode={isDarkMode}>
                            <p>이젠 컴퓨터 아카데미 웹퍼블리셔 과정 수료</p>
                            <p><span>2023.9 - 2024.3</span></p>
                        </StyledEducationItem>
                    </StyledEducationList>
                </StyledEducation>
                {/* <StyledContact>
                    <StyledH2>Contact</StyledH2>
                </StyledContact> */}
            </StyledProfile>
        
        </>
    )
}

export default Home;