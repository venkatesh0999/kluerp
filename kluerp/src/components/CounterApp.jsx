import React, { useState } from 'react'

const CounterApp = () => {
  const [count, setCount] = useState(0)

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Simple Counter</h2>
      <table border="1" style={{ margin: "auto", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ fontSize: "20px", padding: "15px" }}>Counter</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ textAlign: "center", width: "220px", height: "180px" }}>
              {/* Separate Box for Counter Value */}
              <div style={{
                fontSize: "28px",
                color: "red",
                fontWeight: "bold",
                border: "2px solid black",
                borderRadius: "6px",
                width: "100px",
                margin: "auto",
                marginBottom: "15px",
                padding: "10px",
                background: "#f8f8f8"
              }}>
                {count}
              </div>
<div>
  <br/>
</div>
              {/* Buttons */}
              <button style={{ fontSize: "18px", padding: "8px 15px" }} onClick={() => setCount(count + 1)}>+</button> &nbsp;
              <button style={{ fontSize: "18px", padding: "8px 15px" }} onClick={() => setCount(count - 1)}>-</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CounterApp
