import styled from 'styled-components';

export const Label = styled.label`
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 8px;

  /* cursor: pointer; */
`;

type RadioProps = {
  checked: boolean | undefined;
}

export const Radio = styled.div<RadioProps>`
  width: 32px;
  height: 32px;
  margin-right: 4px;
  
  display: flex;
  align-items: center;  
  justify-content: center;  

  border-radius: 50%;

  position: relative;

  input {
    display: none;     
   }

  .background { 
    display: flex;
    align-items: center;
    justify-content: center; 
    position: relative;  
    
    border-radius: 50%;
    background: var(--primary_50);
    width: ${(props) => props.checked ? '32px' : '0'};
    height: ${(props) => props.checked ? '32px' : '0'};
    
    transition: width .2s, height .2s;

    .ripple {    
      position: relative;     
      border-radius: 50%;
      background: var(--primary_100);

      animation: ${props => props.checked ? 'ripple' : ''} .2s;

      @keyframes ripple {
        from {
          width: 0;
          height: 0; 
        }
        to {
          width: 30px;
          height: 30px; 
        }
      }
    }
    
    .outer-circle {
      width: 20px;
      height: 20px;
      position: absolute;

      border-radius: 50%;
      background: transparent;
      border: 2px solid ${(props) => props.checked ? 'var(--primary_500)' : 'var(--on-surface_medium)'};
    }
    
    .inner-circle {
      position: absolute;

      border-radius: 50%;    
      background: var(--primary_500);
      width: ${(props) => props.checked ? '10px' : '0'};
      height: ${(props) => props.checked ? '10px' : '0'};

      transition: width .2s, height .2s;
    } 
  } 
`;