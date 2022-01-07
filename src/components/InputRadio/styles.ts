import styled from 'styled-components';

export const Field = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
`;

export const Radio = styled.div`
  input {
    display: none;    
  }

  .background {
    width: 2rem;
    height: 2rem;
    /* background: var(--primary_50); */
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center; 

    position: relative;
  
    .outer-circle {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: transparent;
      border: 2px solid var(--on-surface_medium);
      position: absolute;
    }
    
    .inner-circle {
      width: 10px;
      height: 10px;
      border-radius: 50%;    
      background: var(--primary_500);
      position: absolute;
    }
  }
`;

export const Label = styled.label`
  margin-left: 1rem;
`;