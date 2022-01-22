import styled from "styled-components";

export const Container = styled.div`
`;

type SliderProps = {
  value: number;
}

export const Slider = styled.div<SliderProps>`
  input {
    display: none;
  }

  .track {
    width:100%;
    height: 8px;
    position: relative;

    border-radius: 6px;
    display: flex;
    align-items: center;
  
    background: var(--primary_200);

    
    .active {
      width: ${(props) => `${props.value}%`};
      height: 12px;
      background: var(--primary_500);
      position: absolute;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
      border-radius: 6px;
    }

    .tick-marks {
      width: 100%;
      height: 100%;
      z-index: 2;
      padding: 0 4px;

      display: flex;
      align-items: center;
      justify-content: space-between;
      


      .tick-mark-active, 
      .tick-mark-inactive {
        height: 20px;

        padding: 0 calc(5% - 2.5px);

        position: relative;

        display: flex;
        align-items: center;
        justify-content: center;

        /* border: 1px solid yellow; */

        &:first-child{
          padding-left: 0;
        }

        &:last-child {
          padding-right: 0;
        }

        &::before {
          content: "";
          width: 5px;
          height: 5px;
          border-radius: 50%;
          left: 100px;


        }

        .thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--primary_600);
          /* background: rgba(0,75,0, .5); */

          position: fixed;
        }

      }
      
      .tick-mark-active::before {
        background: var(--primary_200);
      }

      .tick-mark-inactive:before {
        background: var(--primary_600);
    }
  }

  input {
    
  }
`;