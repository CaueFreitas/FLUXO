import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 3em;
  
  .lista-produtos {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
  }

  .carousel-container {
    width: 100%;
    height: 21em;
  }
`
export { Container }