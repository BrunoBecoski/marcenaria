import { useEffect } from "react";
import { Container, Slider } from "./style";

type InputRangeProps = {
  handleChange: (value: number) => void;
} & React.InputHTMLAttributes<HTMLInputElement>

type TrackProps = {
  handleChange: (value: number) => void;
  currentValue: number;
  quantity: number;
}

type MarkProps ={
  position: number;
}

function Track({ handleChange, currentValue, quantity }: TrackProps) {
  let array:number[];

  function loop() {
    for (let index = 1; index <= quantity; index++) {
      array.push(index)     
    }
  }

  loop();

  function Mark({ position }: MarkProps) {
    return (
      <div 
       onClick={() => handleChange(position)} 
       className={currentValue > position ? "tick-mark-active" : "tick-mark-inactive"}
     >
       {currentValue === position && <div className="thumb"/>} 
     </div>
   );
  }

  return (
    <div className="track">
      <div className="active" />
      <div className="tick-marks">
        {array.map((position) =>  <Mark key={position} position={position} /> )}
        {/* <Mark position={1} />
        <Mark position={2} />
        <Mark position={3} />
        <Mark position={4} />
        <Mark position={5} />
        <Mark position={6} />
        <Mark position={7} />
        <Mark position={8} />
        <Mark position={9} />
        <Mark position={10} /> */}
      </div>
      
    </div>
  );
}



export function InputRange({ handleChange, ...props }: InputRangeProps) {

    const currentValue = Number(props.value);

    let sliderValue = 0;

    switch (currentValue) {
      case 1:
        sliderValue = 2
        break;
      case 2:
        sliderValue = 13
        break;
      case 3: 
        sliderValue = 24
        break;
      case 4:
        sliderValue = 35
        break;
      case 5:
        sliderValue = 46
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
      <Slider
        value={sliderValue}
      >
        <input 
          type="range" 
          name="volume" 
          onChange={(event) => handleChange(Number(event.target.value))}
          {...props}
        />
        <Track 
          currentValue={currentValue}
          quantity={10}
          handleChange={handleChange}
        />
        {/* <div className="track">
          <div className="active"></div>
         
          <div className="tick-marks">
            <div 
              onClick={() => handleChange(1)}
              className={currentValue > 1 ? "tick-mark-active" : "tick-mark-inactive"}
            >
              {currentValue === 1 && <div className="thumb"/>} 
            </div>

            <div 
              onClick={() => handleChange(2)}
              className={currentValue > 2 ? "tick-mark-active" : "tick-mark-inactive"}
            >
              {currentValue === 2 && <div className="thumb"/>} 
            </div>

            <div 
              onClick={() => handleChange(3)}
              className={currentValue > 3 ? "tick-mark-active" : "tick-mark-inactive"}
            >
              {currentValue === 3 && <div className="thumb"/>} 
            </div>

            <div 
              onClick={() => handleChange(4)}
              className={currentValue > 4 ? "tick-mark-active" : "tick-mark-inactive"}
            >
              {currentValue === 4 && <div className="thumb"/>}             
            </div>

            <div 
              onClick={() => handleChange(5)}
              className={currentValue > 5 ? "tick-mark-active" : "tick-mark-inactive"}
            >
              {currentValue === 5 && <div className="thumb"/>} 
            </div>

            <div 
              onClick={() => handleChange(6)}
              className={currentValue > 6 ? "tick-mark-active" : "tick-mark-inactive"}
            >
              {currentValue === 6 && <div className="thumb"/>}
            </div>

            <div 
              onClick={() => handleChange(7)}
              className={currentValue > 7 ? "tick-mark-active" : "tick-mark-inactive"}
            >
              {currentValue === 7 && <div className="thumb"/>}   
            </div>

            <div 
              onClick={() => handleChange(8)}
              className={currentValue > 8 ? "tick-mark-active" : "tick-mark-inactive"}
            >
              {currentValue === 8 && <div className="thumb"/>} 
            </div>

            <div 
              onClick={() => handleChange(9)}
              className={currentValue > 9 ? "tick-mark-active" : "tick-mark-inactive"}
            >
              {currentValue === 9 && <div className="thumb"/>} 
            </div>

            <div 
              onClick={() => handleChange(10)}
              className={currentValue > 10 ? "tick-mark-active" : "tick-mark-inactive"}
            >
              {currentValue === 10 && <div className="thumb"/>} 
            </div>
          </div>
        </div> */}

        <div className="thumb">
          <div className="value-indicator-container" aria-hidden="true">
            <div className="value-indicator">
              <span className="value-indicator-text">
                {currentValue}
              </span>
            </div>
          </div>
          <div className="thumb-knob"></div>
        </div>
      </Slider>
    </Container>
  );
}