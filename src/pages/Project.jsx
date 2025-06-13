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
`
const StyledTabItem = styled.li`
    height: 32px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background-color: #e8edf5;
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
    gap: 12px;
`

const StyledProjectItem = styled.li`
    width: calc(25% - 9px);
    aspect-ratio: 4/3;
    border-radius: 8px;
    background: #fff;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    &:hover{
        transform: translateY(-6px);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);  
    }
`
const ProjectItem = ({title,id}) =>{
    const navigate = useNavigate();

    const goToDetail = (id) => {
      navigate(`/project/detail/${id}`);
    };    
    return(
        <StyledProjectItem onClick={() => goToDetail(id)}></StyledProjectItem>
    )
}

const TabItem = ({text})=>{
    return(
        <StyledTabItem>{text}</StyledTabItem>
    )
}

const Project = ()=>{
    const [data, setData] = useState(null);

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const response = await axios.get('/data/projects.json');
                setData(response.data);
                console.log(response.data);
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
                <TabItem text={'All Projects'}></TabItem>
                <TabItem text={'React Projects'}></TabItem>
                <TabItem text={'개인 프로젝트'}></TabItem>
                <TabItem text={'실무 프로젝트'}></TabItem>
            </StyledTabList>
            <StyledProjectList>
                {data &&
                    data.map((item) => (
                        <ProjectItem
                            key={item.id}
                            title={item.title}                            
                            id={item.id}
                        />
                ))}
            </StyledProjectList>

        </StyledProject>
    )
}

export default Project;