import { useEffect,useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";



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

const SectionBlock = ({ title, contents, children  }) => {
    

    return (
        <>

            <StyledSection>
                <h2>{title}</h2>
                <p>{contents}</p>
            </StyledSection>


        </>
    );
};
  





const Detail = ()=>{
    const {id} =useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get("/data/projects.json");
            // 🔍 id 값이 일치하는 객체 찾기 (문자열 비교에 주의)
            const found = response.data.find(item => String(item.id) === String(id));
            setData(found);
            console.log("선택된 데이터:", found);
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
        </>
      );
    };


export default Detail;