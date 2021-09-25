import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgba(0, 0, 0, .5);
  width: 380px;
  height: 210px;

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
        background: #3f3f3f;
        border: none;
        color: white;
      }

      h3 {
        background-color: #3f3f3f;
        width: 35%;
        margin-top: -20px;
        padding: 0 8px;
      }
    }
  }
`;