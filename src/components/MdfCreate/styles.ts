import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgba(0, 0, 0, .8);
  padding: 15px;

  button {
    border: 2px solid white;
    padding: 8px 16px;
    background: black;
    color: white;
    margin-top: 8px;
    font-weight: bold;
  }
`;

export const Thickness = styled.div`

  h2 {
    padding-bottom: 8px;
  } 

  label + label {
    margin-top: 8px;
  }

  label {
    border: 5px double white; 
    font-weight: bold;

    font-size: 24px;

    margin: 4px;
    padding: 2px 4px;
    
    div {
      width: 50%;
    }

    input {
      display: none;
    }
  }
`;

export const Range = styled.div`
  margin-top: 15px;

  label {
    display: flex;
    align-items: center;
    margin: 8px;

    > input {
      width: 10%;
      background: none;
      border: none;
      color: white;
    }

    input + input  {
      width: 88%;
      margin-left: 2%;
    }   
  }
`;