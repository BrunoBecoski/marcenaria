import styled from "styled-components";

export const Container = styled.div`
`;

type SliderProps = {
  value: number;
}

export const Slider = styled.div<SliderProps>`
  input {
    /* display: none; */
  }

  .track {
    width:100%;
    height: 8px;
    position: relative;

    border-radius: 6px;
    display: flex;
    align-items: center;
  
    background: var(--primary_200);

    
    > .active {
      width: ${(props) => `${props.value}%`};
      height: 12px;
      background: var(--primary_400);
      position: absolute;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    .tick-marks {
      width: 100%;
      height: 100%;
      z-index: 2;
      padding: 0 4px;

      display: flex;
      justify-content: space-between;
      align-items: center;

      .thumb {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: var(--primary_400);

        position: absolute;
      }

      .tick-mark-active, 
      .tick-mark-inactive {
        width: 5px;
        height: 5px;
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .tick-mark-active {
        background: var(--primary_200);
      }

      .tick-mark-inactive {
        background: var(--primary_400);
      }
    }
  }

  input {
  }
`;