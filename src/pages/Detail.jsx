import { useEffect,useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";


import styled from "styled-components";
const StyledSection = styled.section`
    
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    color:inherit;
    h2{

          color:inherit;
        font-size: 18px;
        font-weight: 700;
        line-height: 23px;
    }

    p{

        color:inherit;
        font-size:16px;
        font-weight: 400;
        line-height: 24px;
    }

    ul{
      display: flex;
      gap: 18px;
    }
    @media (max-width:768px){
      padding: 12px 0;
      gap: 6px;
    }
    
`

const StyledSectionLink = styled.section`
    padding: 16px;
    display: flex;
    flex-wrap: wrap;
    gap: 12px 24px;
    color:inherit;
    h2{
      width: 100%;
          color:inherit;
        font-size: 18px;
        font-weight: 700;
        line-height: 23px;
    }

    p{

        color:inherit;
        font-size:16px;
        font-weight: 400;
        line-height: 24px;
    }
    a{
      font-size: 24px;
    }
    ul{
      display: flex;
      gap: 18px;
    }
    @media (max-width:768px){
      padding: 12px 0;
      gap: 6px;
    }
    
`



const StyledImgSection = styled.section`
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    color:inherit;
    h2{

          color:inherit;
        font-size: 18px;
        font-weight: 700;
        line-height: 23px;
    }  
    img{
      width: 100%;
      height: 100%;
      display: block;
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
    }
    @media (max-width:768px){
      padding: 6px 0;
      gap: 6px;
    }
    

 
`



const StyledPostNav = styled.div`
  display: flex;
  gap:32px;
  padding:16px; 
  justify-content: end;
  width: 100%;
  

`
const SyledButton = styled.button`
  
  background-color: none;
  color: inherit;  
  font-family: 'GmarketSansMedium';
  border: none;
  font-size: 14px;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  padding-bottom: 5px;

  &::before{
    content: "";
    height: 1px;
    width: 0%;
    background: #000;
    position: absolute;
    bottom: 0;
    transition: 0.5s;
    left: 50%;
    transform: translateX(-50%);
  }
  &:hover::before{
    content: "";
    height: 1px;
    width: 100%;
    background: #000;
    position: absolute;

  }

`;


const SectionBlock = ({ title, contents, children }) => {
  return (
    <StyledSection>
      <h2>{title}</h2>
      {children ? children : <p>{contents}</p>}
      
    </StyledSection>
  );
};
const SectionBlockLink = ({ title, contents, children }) => {
  return (
    <StyledSectionLink>
      <h2>{title}</h2>
      {children ? children : <p>{contents}</p>}
      
    </StyledSectionLink>
  );
};

const SectionImgBlock = ({ title, src }) => {
  return (
    <StyledImgSection>
      <h2>{title}</h2>
      <img src={`${import.meta.env.BASE_URL}${src}`} alt={title} />
      
      
    </StyledImgSection>
  );
};





const PostNav = ({id, dataLength})=>{
  const navigate = useNavigate();
  
  const goToDetail = (id) => {
    navigate(`/project/detail/${id}`);
  };
  const goToList = ()=>{
    navigate('/project/')
  }
  console.log(dataLength)
  return(
    <StyledPostNav>
      <SyledButton onClick={()=>{goToList()}}>List</SyledButton>
      {id-1 ==0?null: <SyledButton onClick={()=>{goToDetail(id-1)}}>Prev</SyledButton>}
      
      {id == dataLength?null:<SyledButton onClick={()=>{goToDetail(id+1)}}>Next</SyledButton>}
      
      
      
    </StyledPostNav>
  )
}


const Detail = ()=>{
    const {id} =useParams();
    const numericId = Number(id);
    const [data, setData] = useState(null);
    const [dataLength, setDataLength] = useState(0);


    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`${import.meta.env.BASE_URL}data/projects.json`);
            // 🔍 id 값이 일치하는 객체 찾기 (문자열 비교에 주의)
            setDataLength(response.data.length);
            const found = response.data.find(item => String(item.id) === String(id));
            
            setData(found);
           
          } catch (error) {
            console.error("데이터 불러오기 실패:", error);
          }
        };
        
        fetchData();
      }, [id]);
    
      if (!data) return <p>Loading...</p>;

      return (
        <>
         <PostNav id={numericId} dataLength={dataLength}/>
    
          <SectionBlock title="Project Title" contents={data.title} />
          <SectionBlockLink title="Link">
            <a href={data.url} target="_blank"><FontAwesomeIcon icon={faHome} /></a>
            {data.gitUrl?<a href={data.gitUrl} target="_blank"><FontAwesomeIcon icon={faGithub} /></a>:null}
            
          </SectionBlockLink>
          <SectionBlock title="Date" contents={data.date}>

          </SectionBlock>
          <SectionBlock title="Skills" >
          <ul>
            {data.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          </SectionBlock>          
          <SectionBlock title="Description" contents={data.description} />

          
          <SectionImgBlock title="Project Image" src={data.src} />
         
        </>
      );
    };


export default Detail;