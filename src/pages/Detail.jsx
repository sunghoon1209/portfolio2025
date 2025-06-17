import { useEffect,useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


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
    
`


const StyledPageTitle = styled.section`
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;

    h2{

          color:inherit;
        font-size: 32px;
        font-weight: 700;
        line-height: 40px;
    }

`
const StyledPostNav = styled.div`
  display: flex;
  gap:16px;
  
  position: absolute;
  top: 36px;
  right: 176px;
`
const SyledButton = styled.button`
  padding: 6px 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  color: #333;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.2s ease;

   &:hover{
    background-color: #f2f2f2;
    border-color: #999;
   }
`


const SectionBlock = ({ title, contents, children }) => {
  return (
    <StyledSection>
      <h2>{title}</h2>
      {children ? children : <p>{contents}</p>}
      
    </StyledSection>
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
      <SyledButton onClick={()=>{goToList()}}>목록</SyledButton>
      {id-1 ==0?null: <SyledButton onClick={()=>{goToDetail(id-1)}}>이전</SyledButton>}
      {id == dataLength?null:<SyledButton onClick={()=>{goToDetail(id+1)}}>다음</SyledButton>}
      
      
      
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
          <StyledPageTitle>
            <h2>Project Details</h2>
          </StyledPageTitle>
    
          <SectionBlock title="Project Title" contents={data.title} />
          <SectionBlock title="Description" contents={data.description} />
          <SectionBlock title="Skills" >
          <ul>
            {data.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          </SectionBlock>
          
          <SectionImgBlock title="Project Image" src={data.src} />
          <PostNav id={numericId} dataLength={dataLength}/>
        </>
      );
    };


export default Detail;