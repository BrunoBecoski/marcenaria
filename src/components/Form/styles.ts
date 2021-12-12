import styled from 'styled-components';

export const Container = styled.form`
  background-color: rgba(0, 0, 0, .8);
  padding: 1rem;

  h2 {
    color: white;
  }

  > div {
    
    display: flex;
    gap: 8px;
    > div  {
      > h3 {
        color: white;
        margin-bottom: 8px;
      }
      border: 1px solid black;
      border-color: white;
      padding: 8px 16px;
    
      > button {
        background: black;
        color: white;
        border: 3px solid white;
        font-size: 32px;
        padding-bottom: 8px;
        height: 32px;

      
        display: flex;
        align-items: center;
        justify-content: center;

        margin-bottom: 12px;

        &:hover {
          color: green;
          border-color: green;
        }
      }
    }
  }
  
  > button {
    margin-top: 16px;
    color: white;
    background: black;
    font-weight: bold;
    border: none;
    padding: 8px;
  }
`;