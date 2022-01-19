import { useEffect } from "react";
import { Container, Slider } from "./style";

type InputRangeProps = {
  handleChange: (value: number) => void;
} & React.InputHTMLAttributes<HTMLInputElement>

export function InputRange({ handleChange, ...props }: InputRangeProps) {

    let sliderValue = 0;

    switch (props.value) {
      case 1:
        sliderValue = 1
        break;
      case 2:
        sliderValue = 12
        break;
      case 3: 
        sliderValue = 23
        break;
      case 4:
        sliderValue = 34
        break;
      case 5:
        sliderValue = 45
        break;
      case 6: 
        sliderValue = 56      
        break;
      case 7:
        sliderValue = 67
        break;
      case 8:
        sliderValue = 78
        break;
      case 9: 
        sliderValue = 89
        break;
      case 10:
        sliderValue = 100
        break;
    }

  return(
    <Container>
      {/* <input 
        type="range" 
        onChange={(event) => handleChange(Number(event.target.value))} 
        list="tickmarks"
        {...props}
      />

      <datalist id="tickmarks">
        <option value="1" label="1" >1</option>
        <option value="2" label="2" >2</option>
        <option value="3" label="3" >3</option>
        <option value="4" label="4" >4</option>
        <option value="5" label="5" >5</option>
        <option value="6" label="6" >6</option>
        <option value="7" label="7" >7</option>
        <option value="8" label="8" >8</option>
        <option value="9" label="9" >9</option>
        <option value="10" label="10" >10</option>
      </datalist> */}

      <Slider
        value={sliderValue}
      >
        <input 
          type="range" 
          name="volume" 
          onChange={(event) => handleChange(Number(event.target.value))}
          {...props}
        />
        <div className="track">
          <div className="active"></div>
         
          <div className="tick-marks">
            <div className="tick-mark-active"></div>
            <div className="tick-mark-active"></div>
            <div className="tick-mark-active"></div>
            <div className="tick-mark-active">
              <div className="thumb" onDrag={(event => console.log(event))} />
            </div>
            <div className="tick-mark-inactive"></div>
            <div className="tick-mark-inactive"></div>
            <div className="tick-mark-inactive"></div>
            <div className="tick-mark-inactive"></div>
            <div className="tick-mark-inactive"></div>
            <div className="tick-mark-inactive"></div>
          </div>
        </div>
        <div className="thumb">
          <div className="value-indicator-container" aria-hidden="true">
            <div className="value-indicator">
              <span className="value-indicator-text">
                {props.value}
              </span>
            </div>
          </div>
          <div className="thumb-knob"></div>
        </div>
      </Slider>
    </Container>
  );
}