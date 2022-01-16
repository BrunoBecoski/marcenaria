import styled from "styled-components";

export const Container = styled.div`

`;

type SliderProps = {
  value: number;
}

export const Slider = styled.div<SliderProps>`
  input {

    ::-moz-range-thumb {
    background: var(--primary_400);
    border-radius: 50%;
    border: none;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  
  ::-moz-range-track {
    
  }
}

  .track {
    border-radius: 6px;
    width: 100%;
    height: 12px;
    position: relative;

    display: flex;
    align-items: center;
    
    .inactive {
      background: var(--primary_200);
      width: 100%;
      height: 8px;
      position: absolute;
      border-radius: 6px;
    }
    
    .active {
      width: ${(props) => `${props.value}0%`};
      height: 12px;
      background: var(--primary_400);
      position: absolute;
      border-radius: 6px;

    }
  }

  input {
  }
`;