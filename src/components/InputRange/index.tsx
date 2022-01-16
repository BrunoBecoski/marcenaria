import { Container, Slider } from "./style";

type InputRangeProps = {
  handleChange: (value: number) => void;
} & React.InputHTMLAttributes<HTMLInputElement>

export function InputRange({ handleChange, ...props }: InputRangeProps) {
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
        value={Number(props.value)}
      >
        <input 
          type="range" 
          name="volume" 
          onChange={(event) => handleChange(Number(event.target.value))}
          {...props}
        />
        <div className="track">
          <div className="inactive"></div>
          <div className="active"></div>
          <div className="tick-marks">
            <div className="tick-mark-active"></div>
            <div className="tick-mark-active"></div>
            <div className="tick-mark-active"></div>
            <div className="tick-mark-active"></div>
            <div className="tick-mark-active"></div>
            <div className="tick-mark-active"></div>
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