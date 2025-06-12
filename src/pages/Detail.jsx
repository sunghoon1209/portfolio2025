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

const SectionBlock = ({ title, description }) => {
    return (
        <>

            <StyledSection>
                <h2>{title}</h2>
                <p>{description}</p>
            </StyledSection>
        </>
    );
};
  





const Detail = ()=>{
    return(
        <>      
            <StyledPageTitle>
                <h2>Project Details</h2>
                <p></p>
            </StyledPageTitle>           
                  
            <SectionBlock title={'Project Title'} description={'Responsive Web Design for a Local Business'}></SectionBlock>
            <SectionBlock title={'Description'} description={'Responsive Web Design for a Local Business'}></SectionBlock>
            <SectionBlock title={'Skills'} description={'Responsive Web Design for a Local Business'}></SectionBlock>
            <SectionBlock title={'Project Title'} description={'Responsive Web Design for a Local Business'}></SectionBlock>
        </>
    )
}


export default Detail;