import { useEffect } from "react";
import { Container, Slider } from "./style";

type InputRangeProps = {
  handleChange: (value: number) => void;
} & React.InputHTMLAttributes<HTMLInputElement>

export function InputRange({ handleChange, ...props }: InputRangeProps) {

    const value = Number(props.value);

    let sliderValue = 0;

    switch (value) {
      case 1:
        sliderValue = 1
        break;
      case 2:
        sliderValue = 9
        break;
      case 3: 
        sliderValue = 21
        break;
      case 4:
        sliderValue = 33
        break;
      case 5:
        sliderValue = 45
        break;
      case 6: 
        sliderValue = 57      
        break;
      case 7:
        sliderValue = 68
        break;
      case 8:
        sliderValue = 80
        break;
      case 9: 
        sliderValue = 92
        break;
      case 10:
        sliderValue = 100
        break;
    }

  return(
    <Container>
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
            <div 
              onClick={() => handleChange(1)} 
              className={value > 1 ? "tick-mark-active" : "tick-mark-inactive"}
            >
              {value === 1 && <div className="thumb"/>} 
            </div>

            <div 
              onClick={() => handleChange(2)}
              className={value > 2 ? "tick-mark-active" : "tick-mark-inactive"}
            >
              {value === 2 && <div className="thumb"/>} 
            </div>

            <div 
              onClick={() => handleChange(3)}
              className={value > 3 ? "tick-mark-active" : "tick-mark-inactive"}
            >
              {value === 3 && <div className="thumb"/>} 
            </div>

            <div 
              onClick={() => handleChange(4)}
              className={value > 4 ? "tick-mark-active" : "tick-mark-inactive"}
            >
              {value === 4 && <div className="thumb"/>}             
            </div>

            <div 
              onClick={() => handleChange(5)}
              className={value > 5 ? "tick-mark-active" : "tick-mark-inactive"}
            >
              {value === 5 && <div className="thumb"/>} 
            </div>

            <div 
              onClick={() => handleChange(6)}
              className={value > 6 ? "tick-mark-active" : "tick-mark-inactive"}
            >
              {value === 6 && <div className="thumb"/>}
            </div>

            <div 
              onClick={() => handleChange(7)}
              className={value > 7 ? "tick-mark-active" : "tick-mark-inactive"}
            >
              {value === 7 && <div className="thumb"/>}   
            </div>

            <div 
              onClick={() => handleChange(8)}
              className={value > 8 ? "tick-mark-active" : "tick-mark-inactive"}
            >
              {value === 8 && <div className="thumb"/>} 
            </div>

            <div 
              onClick={() => handleChange(9)}
              className={value > 9 ? "tick-mark-active" : "tick-mark-inactive"}
            >
              {value === 9 && <div className="thumb"/>} 
            </div>

            <div 
              onClick={() => handleChange(10)}
              className={value > 10 ? "tick-mark-active" : "tick-mark-inactive"}
            >
              {value === 10 && <div className="thumb"/>} 
            </div>
          </div>
        </div>
        <div className="thumb">
          <div className="value-indicator-container" aria-hidden="true">
            <div className="value-indicator">
              <span className="value-indicator-text">
                {value}
              </span>
            </div>
          </div>
          <div className="thumb-knob"></div>
        </div>
      </Slider>
    </Container>
  );
}