import React, { useState } from 'react'

const Basiccalculator = () => {
  const [value, setValue] = useState('')

  return (
    <div style={{ width: "260px", margin: "20px auto" }}>
      <form>
        <fieldset style={{ border: "2px solid black", padding: "15px", borderRadius: "8px" }}>
          <div>
            <h1>Calculator</h1>
            <input
              type="text"
              value={value}
              readOnly
              style={{ width: "100%", height: "35px", fontSize: "18px", textAlign: "right" }}
            />
          </div>

          <div style={{ marginTop: "10px" }}>
            <input type="button" value="AC" onClick={e => setValue('')} style={{ background: "blue", color: "white" }} /> &nbsp;
            <input type="button" value="DEL" onClick={e => setValue(value.slice(0, -1))} style={{ background: "red", color: "white" }} /> &nbsp;
            <input type="button" value="." onClick={e => setValue(value + e.target.value)} /> &nbsp;
            <input type="button" value="/" onClick={e => setValue(value + e.target.value)} /> &nbsp;
          </div>

          <div>
            <input type="button" value="7" onClick={e => setValue(value + e.target.value)} /> &nbsp;
            <input type="button" value="8" onClick={e => setValue(value + e.target.value)} /> &nbsp;
            <input type="button" value="9" onClick={e => setValue(value + e.target.value)} /> &nbsp;
            <input type="button" value="+" onClick={e => setValue(value + e.target.value)} /> &nbsp;
          </div>

          <div>
            <input type="button" value="4" onClick={e => setValue(value + e.target.value)} /> &nbsp;
            <input type="button" value="5" onClick={e => setValue(value + e.target.value)} /> &nbsp;
            <input type="button" value="6" onClick={e => setValue(value + e.target.value)} /> &nbsp;
            <input type="button" value="-" onClick={e => setValue(value + e.target.value)} /> &nbsp;
          </div>

          <div>
            <input type="button" value="1" onClick={e => setValue(value + e.target.value)} /> &nbsp;
            <input type="button" value="2" onClick={e => setValue(value + e.target.value)} /> &nbsp;
            <input type="button" value="3" onClick={e => setValue(value + e.target.value)} /> &nbsp;
            <input type="button" value="*" onClick={e => setValue(value + e.target.value)} /> &nbsp;
          </div>

          <div>
            <input type="button" value="0" onClick={e => setValue(value + e.target.value)} /> &nbsp;
            <input type="button" value="00" onClick={e => setValue(value + e.target.value)} /> &nbsp;
            <input type="button" value="000" onClick={e => setValue(value + e.target.value)} /> &nbsp;
            <input type="button" value="=" onClick={e => setValue(eval(value))} /> &nbsp;
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default Basiccalculator
