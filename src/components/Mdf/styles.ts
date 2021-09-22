import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgba(0, 0, 0, .5);
  width: 500px;
  height: 500px;

  padding: 10px;

  gap: 120px;

  h2, h3 {
    color: white;
  }

  div {
    border: 3px solid white;
    padding: 8px;
    margin: 16px 0;

    h3 {
      background-color: #3f3f3f;
      width: 40%;
      /* text-align: center; */
      margin-top: -20px;
      padding: 0 8px;
    }
  }
`;