import styled from "styled-components";

export const Container = styled.div`
`;

type SliderProps = {
  value: number;
}

export const Slider = styled.div<SliderProps>`
  input {
    width: 100%;
    -webkit-appearance: none;
    z-index: 1;
    position: relative;
    top: 20px;
    background: transparent;

    // firefox
    ::-moz-range-thumb {
      border: none;
      width: 20px;
      height: 20px;
      cursor: ew-resize;
      border-radius: 50%;
      background: var(--primary_400);
    } 

    // chromium
    ::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 20px;
      height: 20px;
      cursor: ew-resize;
      border-radius: 50%;
      background: var(--primary_400);
    }
  }

  .track {
    width: 99%;
    height: 12px;
    position: relative;

    border-radius: 6px;
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
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;

    }
  }

  input {
  }
`;