import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const StyledProject = styled.section`
    h2{
        padding: 16px;
    }
`

const StyledTabList = styled.ul`
    display: flex;
    padding: 12px;
    gap: 12px;
    @media (max-width:768px){
        flex-direction: column;
    }
`
const StyledTabItem = styled.li`
    height: 32px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;    
    background-color: ${({ isDarkMode }) => (isDarkMode ? '#21364A' : '#e8edf5')};
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    font-family: 'GmarketSansMedium';      
    cursor: pointer;
    

`

const StyledProjectList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding: 16px;
    gap: 18px 12px;
`

const StyledProjectItem = styled.li`
    width: calc((100% - 24px)/3);
    /* aspect-ratio: 16/9; */
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 10px;


    img{
        width: 100%;
        height: 100%;
        display: block;
        cursor: pointer;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);

        &:hover{
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            box-shadow: 0 8px 16px rgba(0,0,0,0.15);
            transform: translateY(-4px);
        }
    }

    p{
        text-align: center;
        font-weight: 600;
        font-size: 14px;
    }
    @media (max-width:768px){
        width: 100%;
    }
    
`
const ProjectItem = ({ title, id, src, alt }) => {
    const navigate = useNavigate();
  
    const goToDetail = (id) => {
      navigate(`/project/detail/${id}`);
    };
  
    return (
      <StyledProjectItem>
        {src ? <img src={src} alt={alt || title}  onClick={() => goToDetail(id)}/> : null}
        <p>{title}</p>
      </StyledProjectItem>
    );
  };

const TabItem = ({text, isDarkMode, onClick})=>{
    return(
        <StyledTabItem isDarkMode={isDarkMode} onClick={onClick}>{text}</StyledTabItem>
    )
}

const Project = ({isDarkMode})=>{
    const [data, setData] = useState(null);
    const [originData, setOriginData] = useState(null);

    const handleSort = (type)=>{
        let base = originData; 
        if(type == 'react'){
           // console.log(data);           
           const filterdData = base.filter((item)=> item.skills.includes('REACT'));
        //    console.log(filterdData);
            setData(filterdData);
            
        }else if(type =='personal'){
            const filterdData = base.filter((item)=> item.type.includes(type))
            setData(filterdData);
        }else if(type =='company'){
            const filterdData = base.filter((item)=> item.type.includes(type))
            setData(filterdData);
        } else {
            setData(originData); 
        }
    }

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const response = await axios.get(`${import.meta.env.BASE_URL}data/projects.json`);
                setData(response.data);
                setOriginData(response.data);
            }catch(error){
                console.error('데이터 불러오기 실패:',error)
            }
        };
        fetchData();

    },[])
    return(
        <StyledProject>
            <h2>My Works</h2>
            <StyledTabList>
                <TabItem text={'All Projects'} isDarkMode={isDarkMode} onClick={() => handleSort()}/>
                <TabItem text={'React Projects'} isDarkMode={isDarkMode} onClick={() => handleSort('react')} />
                <TabItem text={'개인 프로젝트'} isDarkMode={isDarkMode} onClick={() => handleSort('personal')}/>
                <TabItem text={'실무 프로젝트'} isDarkMode={isDarkMode} onClick={() => handleSort('company')}/>
            </StyledTabList>
            <StyledProjectList>
                {data &&
                    data.map((item) => (
                        <ProjectItem
                            key={item.id}
                            title={item.title}                            
                            id={item.id}
                            src={`${import.meta.env.BASE_URL}${item.src}`} 
                            alt={item.alt}                            
                        />
                ))}
            </StyledProjectList>

        </StyledProject>
    )
}

export default Project;