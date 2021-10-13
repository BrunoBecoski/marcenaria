import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgba(0, 0, 0, .8);
  width: 380px;
  height: 50%;

  padding: 10px;

  gap: 120px;

  h2, h3, h4 {
    color: white;
  }

  form {
    div {
      border: 3px solid white;
      padding: 8px;
      margin: 16px 0;


      label {
        color: white;
        margin: 8px;
        font-weight: bold;      
      }

      input {
        border: none;
      }

      h3 {
        width: 35%;
        padding: 0 8px;
      }
    }
  }
`;