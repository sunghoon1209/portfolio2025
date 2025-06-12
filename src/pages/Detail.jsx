import { useEffect,useState } from "react";
import axios from "axios";



import styled from "styled-components";
const StyledSection = styled.section`
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    h2{
        color:#0f1417;
        font-size: 18px;
        font-weight: 700;
        line-height: 23px;
    }

    p{
        color:#0f1417;
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
        color: #0f1417;
        font-size: 32px;
        font-weight: 700;
        line-height: 40px;
    }

`

const SectionBlock = ({ title, contents }) => {
    

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
        <>      
            <StyledPageTitle>
                <h2>Project Details</h2>
                <p></p>
            </StyledPageTitle>           
                  
            <SectionBlock title={'Project Title'} contents={data[0].title}></SectionBlock>
            <SectionBlock title={'Description'} contents={data[0].description}></SectionBlock>
            <SectionBlock title={'Skills'} contents={data[0].skills}></SectionBlock>

        </>
    )
}


export default Detail;