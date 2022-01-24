import { useEffect, useState } from "react";
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
  let array:number[] = [];

  function loop() {
    for (let index = 1; index <= quantity; index++) {
      array.push(index)     
    }
  }

  loop();  

  function Mark({ position }: MarkProps) {
    const [dragX, setDragX] = useState();

    function handleDrag(event: any) {
      console.log(event.type)

      if(event.type === 'touchmove') {
        setDragX(Math.round(event.touches[0].clientX));
      }

      if(event.type === 'drag') {
        setDragX(event.clientX);
      }

      const element = document.getElementById('thumb')?.parentNode;
      const elementWidth = element.offsetWidth;      
      const elementPosition = Math.round(element.getBoundingClientRect().left);
      
      const left = elementPosition;
      const right = elementWidth + elementPosition;

      if(dragX < left) {
        handleChange(position - 1);
      }

      if(dragX > right) {
        handleChange(position + 1);
      }
    }  

    return (
      <div 
        id={String(position)}
        onClick={() => handleChange(position)} 
        className={currentValue > position ? "tick-mark-active" : "tick-mark-inactive"}
      >
       {currentValue === position && 
          <div 
            id="thumb"
            className="thumb" 
            onDrag={(event) => handleDrag(event)}
            onTouchMove={(event) => handleDrag(event)}
          />
        } 
     </div>
   );
  }

  return (
    <div className="track">
      <div className="active" />
      <div className="tick-marks">
        {array.map((position) =>  <Mark key={position} position={position} /> )}
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