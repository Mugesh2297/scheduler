import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import "./tables.css"


export default function Tables() {
  
  const WeekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const [monday, setMonday] = useState([])
  const [tuesday, setTuesday] = useState([])
  const [wed, setwed] = useState([])
  const [thu, setThu] = useState([])
  const [fri, setFri] = useState([])
  const data = [1, 2, 3, 4, 5, 6]

  const onChange = (event) => {
    const value = event.target.value;
    setMonday([...monday, value]);
  }
 
  const onTue = (event) => {
    const value = event.target.value;
    setTuesday([...tuesday, value]);
  }
  const onWed = (event) => {
    const value = event.target.value;
    setwed([...wed, value]);
  }
  const onThu = (event) => {
    const value = event.target.value;
    setThu([...thu, value]);
  }
  const onFri = (event) => {
    const value = event.target.value;
    setFri([...fri, value]);
  }
  let repeated = monday.filter((item,index)=>{
    return monday.indexOf(item)!==index
})

let tue = tuesday.filter((item,index)=>{
  return tuesday.indexOf(item)!==index
})
let Wednesday = wed.filter((item,index)=>{
  return wed.indexOf(item)!==index
})
let thurday = thu.filter((item,index)=>{
  return thu.indexOf(item)!==index
})
let Friday = fri.filter((item,index)=>{
  return fri.indexOf(item)!==index
})
  return (
    <div>
      <h3 className='heading'>Scheduler</h3>
      <div className='table'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th></th>
              {
                WeekDays.map((item) => {
                  return <th >{item}</th>
                })
              }
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Morning Up Stairs</td>
              <td>
                <select  onChange={onChange}>
                <option>Select </option>
                  <option value="X1">X1</option>
                  <option value="X2">X2</option>
                  <option value="X3">X3</option>
                  <option value="X4">X4</option>
                  <option value="X5">X5</option>
                  <option value="X6">X6</option>
                  <option value="X7">X7</option>
                </select>
              </td>
              <td>
                <select  onChange={onTue}>
                <option>Select </option>
                  <option value="X1">X1</option>
                  <option value="X2">X2</option>
                  <option value="X3">X3</option>
                  <option value="X4">X4</option>
                  <option value="X5">X5</option>
                  <option value="X6">X6</option>
                  <option value="X7">X7</option>
                </select>
              </td>
              <td>
                <select  onChange={onWed}>
                <option>Select </option>
                  <option value="X1">X1</option>
                  <option value="X2">X2</option>
                  <option value="X3">X3</option>
                  <option value="X4">X4</option>
                  <option value="X5">X5</option>
                  <option value="X6">X6</option>
                  <option value="X7">X7</option>
                </select>
              </td>
              <td>
                <select  onChange={onThu}>
                <option>Select </option>
                  <option value="X1">X1</option>
                  <option value="X2">X2</option>
                  <option value="X3">X3</option>
                  <option value="X4">X4</option>
                  <option value="X5">X5</option>
                  <option value="X6">X6</option>
                  <option value="X7">X7</option>
                </select>
              </td>
              <td>
                <select  onChange={onFri}>
                <option>Select </option>
                  <option value="X1">X1</option>
                  <option value="X2">X2</option>
                  <option value="X3">X3</option>
                  <option value="X4">X4</option>
                  <option value="X5">X5</option>
                  <option value="X6">X6</option>
                  <option value="X7">X7</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Morning Down Stair</td>
              <td>
              <select  onChange={onChange}>
              <option>Select </option>
                  <option value="X1">X1</option>
                  <option value="X2">X2</option>
                  <option value="X3">X3</option>
                  <option value="X4">X4</option>
                  <option value="X5">X5</option>
                  <option value="X6">X6</option>
                  <option value="X7">X7</option>
                </select>
              </td>
              <td>
                <select  onChange={onTue}>
                <option>Select </option>
                  <option value="X1">X1</option>
                  <option value="X2">X2</option>
                  <option value="X3">X3</option>
                  <option value="X4">X4</option>
                  <option value="X5">X5</option>
                  <option value="X6">X6</option>
                  <option value="X7">X7</option>
                </select>
              </td>
              <td>
                <select  onChange={onWed}>
                <option>Select </option>
                  <option value="X1">X1</option>
                  <option value="X2">X2</option>
                  <option value="X3">X3</option>
                  <option value="X4">X4</option>
                  <option value="X5">X5</option>
                  <option value="X6">X6</option>
                  <option value="X7">X7</option>
                </select>
              </td>
              <td>
                <select  onChange={onThu}>
                <option>Select </option>
                  <option value="X1">X1</option>
                  <option value="X2">X2</option>
                  <option value="X3">X3</option>
                  <option value="X4">X4</option>
                  <option value="X5">X5</option>
                  <option value="X6">X6</option>
                  <option value="X7">X7</option>
                </select>
              </td>
              <td>
                <select  onChange={onFri}>
                <option>Select </option>
                  <option value="X1">X1</option>
                  <option value="X2">X2</option>
                  <option value="X3">X3</option>
                  <option value="X4">X4</option>
                  <option value="X5">X5</option>
                  <option value="X6">X6</option>
                  <option value="X7">X7</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Morning Parking Lot	</td>
              <td>
              <select onChange={onChange}>
              <option>Select </option>
                  <option value="X1">X1</option>
                  <option value="X2">X2</option>
                  <option value="X3">X3</option>
                  <option value="X4">X4</option>
                  <option value="X5">X5</option>
                  <option value="X6">X6</option>
                  <option value="X7">X7</option>
                </select>
              </td>
              <td>
                <select  onChange={onTue}>
                <option>Select </option>
                  <option value="X1">X1</option>
                  <option value="X2">X2</option>
                  <option value="X3">X3</option>
                  <option value="X4">X4</option>
                  <option value="X5">X5</option>
                  <option value="X6">X6</option>
                  <option value="X7">X7</option>
                </select>
              </td>
              <td>
                <select  onChange={onWed}>
                <option>Select </option>
                  <option value="X1">X1</option>
                  <option value="X2">X2</option>
                  <option value="X3">X3</option>
                  <option value="X4">X4</option>
                  <option value="X5">X5</option>
                  <option value="X6">X6</option>
                  <option value="X7">X7</option>
                </select>
              </td>
              <td>
                <select  onChange={onThu}>
                <option>Select </option>
                  <option value="X1">X1</option>
                  <option value="X2">X2</option>
                  <option value="X3">X3</option>
                  <option value="X4">X4</option>
                  <option value="X5">X5</option>
                  <option value="X6">X6</option>
                  <option value="X7">X7</option>
                </select>
              </td>
              <td>
                <select  onChange={onFri}>
                <option>Select </option>
                  <option value="X1">X1</option>
                  <option value="X2">X2</option>
                  <option value="X3">X3</option>
                  <option value="X4">X4</option>
                  <option value="X5">X5</option>
                  <option value="X6">X6</option>
                  <option value="X7">X7</option>
                </select>
              </td>
            </tr>
            <tr>
              <td colSpan={6}></td>
            </tr>
            <tr>
              <td>Lunch A</td>
              <td>
              <select >
              <option>Select </option>
                  <option value="X1">X1</option>
                  <option value="X2">X2</option>
                  <option value="X3">X3</option>
                  <option value="X4">X4</option>
                  <option value="X5">X5</option>
                  <option value="X6">X6</option>
                  <option value="X7">X7</option>
                </select>
              </td>
              <td>
                <select >
                <option>Select </option>
                  <option value="X1">X1</option>
                  <option value="X2">X2</option>
                  <option value="X3">X3</option>
                  <option value="X4">X4</option>
                  <option value="X5">X5</option>
                  <option value="X6">X6</option>
                  <option value="X7">X7</option>
                </select>
              </td>
              <td>
                <select >
                <option>Select </option>
                  <option value="X1">X1</option>
                  <option value="X2">X2</option>
                  <option value="X3">X3</option>
                  <option value="X4">X4</option>
                  <option value="X5">X5</option>
                  <option value="X6">X6</option>
                  <option value="X7">X7</option>
                </select>
              </td>
              <td>
                <select >
                <option>Select </option>
                  <option value="X1">X1</option>
                  <option value="X2">X2</option>
                  <option value="X3">X3</option>
                  <option value="X4">X4</option>
                  <option value="X5">X5</option>
                  <option value="X6">X6</option>
                  <option value="X7">X7</option>
                </select>
              </td>
              <td>
                <select >
                <option>Select </option>
                  <option value="X1">X1</option>
                  <option value="X2">X2</option>
                  <option value="X3">X3</option>
                  <option value="X4">X4</option>
                  <option value="X5">X5</option>
                  <option value="X6">X6</option>
                  <option value="X7">X7</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Lunch B</td>
              <td>
              <select >
              <option>Select </option>
                  <option value="X1">X1</option>
                  <option value="X2">X2</option>
                  <option value="X3">X3</option>
                  <option value="X4">X4</option>
                  <option value="X5">X5</option>
                  <option value="X6">X6</option>
                  <option value="X7">X7</option>
                </select>
              </td>
              <td>
                <select  >
                <option>Select </option>
                  <option value="X1">X1</option>
                  <option value="X2">X2</option>
                  <option value="X3">X3</option>
                  <option value="X4">X4</option>
                  <option value="X5">X5</option>
                  <option value="X6">X6</option>
                  <option value="X7">X7</option>
                </select>
              </td>
              <td>
                <select >
                <option>Select </option>
                  <option value="X1">X1</option>
                  <option value="X2">X2</option>
                  <option value="X3">X3</option>
                  <option value="X4">X4</option>
                  <option value="X5">X5</option>
                  <option value="X6">X6</option>
                  <option value="X7">X7</option>
                </select>
              </td>
              <td>
                <select >
                <option>Select </option>
                  <option value="X1">X1</option>
                  <option value="X2">X2</option>
                  <option value="X3">X3</option>
                  <option value="X4">X4</option>
                  <option value="X5">X5</option>
                  <option value="X6">X6</option>
                  <option value="X7">X7</option>
                </select>
              </td>
              <td>
                <select >
                <option>Select </option>
                  <option value="X1">X1</option>
                  <option value="X2">X2</option>
                  <option value="X3">X3</option>
                  <option value="X4">X4</option>
                  <option value="X5">X5</option>
                  <option value="X6">X6</option>
                  <option value="X7">X7</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Lunch C</td>

              <td>
              <select >
              <option>Select </option>
                  <option value="X1">X1</option>
                  <option value="X2">X2</option>
                  <option value="X3">X3</option>
                  <option value="X4">X4</option>
                  <option value="X5">X5</option>
                  <option value="X6">X6</option>
                  <option value="X7">X7</option>
                </select>
              </td>
              <td>
                <select>
                <option>Select </option>
                  <option value="X1">X1</option>
                  <option value="X2">X2</option>
                  <option value="X3">X3</option>
                  <option value="X4">X4</option>
                  <option value="X5">X5</option>
                  <option value="X6">X6</option>
                  <option value="X7">X7</option>
                </select>
              </td>
              <td>
                <select >
                <option>Select </option>
                  <option value="X1">X1</option>
                  <option value="X2">X2</option>
                  <option value="X3">X3</option>
                  <option value="X4">X4</option>
                  <option value="X5">X5</option>
                  <option value="X6">X6</option>
                  <option value="X7">X7</option>
                </select>
              </td>
              <td>
                <select >
                <option>Select </option>
                  <option value="X1">X1</option>
                  <option value="X2">X2</option>
                  <option value="X3">X3</option>
                  <option value="X4">X4</option>
                  <option value="X5">X5</option>
                  <option value="X6">X6</option>
                  <option value="X7">X7</option>
                </select>
              </td>
              <td>
                <select >
                <option>Select </option>
                  <option value="X1">X1</option>
                  <option value="X2">X2</option>
                  <option value="X3">X3</option>
                  <option value="X4">X4</option>
                  <option value="X5">X5</option>
                  <option value="X6">X6</option>
                  <option value="X7">X7</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Lunch D</td>

              <td>
              <select >
              <option>Select </option>
                  <option value="X1">X1</option>
                  <option value="X2">X2</option>
                  <option value="X3">X3</option>
                  <option value="X4">X4</option>
                  <option value="X5">X5</option>
                  <option value="X6">X6</option>
                  <option value="X7">X7</option>
                </select>
              </td>
              <td>
                <select>
                <option>Select </option>
                  <option value="X1">X1</option>
                  <option value="X2">X2</option>
                  <option value="X3">X3</option>
                  <option value="X4">X4</option>
                  <option value="X5">X5</option>
                  <option value="X6">X6</option>
                  <option value="X7">X7</option>
                </select>
              </td>
              <td>
                <select >
                <option>Select </option>
                  <option value="X1">X1</option>
                  <option value="X2">X2</option>
                  <option value="X3">X3</option>
                  <option value="X4">X4</option>
                  <option value="X5">X5</option>
                  <option value="X6">X6</option>
                  <option value="X7">X7</option>
                </select>
              </td>
              <td>
                <select >
                <option>Select </option>
                  <option value="X1">X1</option>
                  <option value="X2">X2</option>
                  <option value="X3">X3</option>
                  <option value="X4">X4</option>
                  <option value="X5">X5</option>
                  <option value="X6">X6</option>
                  <option value="X7">X7</option>
                </select>
              </td>
              <td>
                <select >
                <option>Select </option>
                  <option value="X1">X1</option>
                  <option value="X2">X2</option>
                  <option value="X3">X3</option>
                  <option value="X4">X4</option>
                  <option value="X5">X5</option>
                  <option value="X6">X6</option>
                  <option value="X7">X7</option>
                </select>
              </td>
              
            </tr>
            <tr>
              <td colSpan={6}></td>
            </tr>
            <tr>
              <td>Afternoon Up Stairs	</td>
              <td>
              <select onChange={onChange}>
              <option>Select </option>
                  <option value="X1">X1</option>
                  <option value="X2">X2</option>
                  <option value="X3">X3</option>
                  <option value="X4">X4</option>
                  <option value="X5">X5</option>
                  <option value="X6">X6</option>
                  <option value="X7">X7</option>
                </select>
              </td>
              <td>
                <select  onChange={onTue}>
                <option>Select </option>
                  <option value="X1">X1</option>
                  <option value="X2">X2</option>
                  <option value="X3">X3</option>
                  <option value="X4">X4</option>
                  <option value="X5">X5</option>
                  <option value="X6">X6</option>
                  <option value="X7">X7</option>
                </select>
              </td>
              <td>
                <select  onChange={onWed}>
                <option>Select </option>
                  <option value="X1">X1</option>
                  <option value="X2">X2</option>
                  <option value="X3">X3</option>
                  <option value="X4">X4</option>
                  <option value="X5">X5</option>
                  <option value="X6">X6</option>
                  <option value="X7">X7</option>
                </select>
              </td>
              <td>
                <select  onChange={onThu}>
                <option>Select </option>
                  <option value="X1">X1</option>
                  <option value="X2">X2</option>
                  <option value="X3">X3</option>
                  <option value="X4">X4</option>
                  <option value="X5">X5</option>
                  <option value="X6">X6</option>
                  <option value="X7">X7</option>
                </select>
              </td>
              <td>
                <select  onChange={onFri}>
                <option>Select </option>
                  <option value="X1">X1</option>
                  <option value="X2">X2</option>
                  <option value="X3">X3</option>
                  <option value="X4">X4</option>
                  <option value="X5">X5</option>
                  <option value="X6">X6</option>
                  <option value="X7">X7</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Afternoon Down Stairs	</td>
              <td>
              <select onChange={onChange}>
              <option>Select </option>
                  <option value="X1">X1</option>
                  <option value="X2">X2</option>
                  <option value="X3">X3</option>
                  <option value="X4">X4</option>
                  <option value="X5">X5</option>
                  <option value="X6">X6</option>
                  <option value="X7">X7</option>
                </select>
              </td>
              <td>
                <select  onChange={onTue}>
                <option>Select </option>
                  <option value="X1">X1</option>
                  <option value="X2">X2</option>
                  <option value="X3">X3</option>
                  <option value="X4">X4</option>
                  <option value="X5">X5</option>
                  <option value="X6">X6</option>
                  <option value="X7">X7</option>
                </select>
              </td>
              <td>
                <select  onChange={onWed}>
                <option>Select </option>
                  <option value="X1">X1</option>
                  <option value="X2">X2</option>
                  <option value="X3">X3</option>
                  <option value="X4">X4</option>
                  <option value="X5">X5</option>
                  <option value="X6">X6</option>
                  <option value="X7">X7</option>
                </select>
              </td>
              <td>
                <select  onChange={onThu}>
                <option>Select </option>
                  <option value="X1">X1</option>
                  <option value="X2">X2</option>
                  <option value="X3">X3</option>
                  <option value="X4">X4</option>
                  <option value="X5">X5</option>
                  <option value="X6">X6</option>
                  <option value="X7">X7</option>
                </select>
              </td>
              <td>
                <select  onChange={onFri}>
                <option>Select </option>
                  <option value="X1">X1</option>
                  <option value="X2">X2</option>
                  <option value="X3">X3</option>
                  <option value="X4">X4</option>
                  <option value="X5">X5</option>
                  <option value="X6">X6</option>
                  <option value="X7">X7</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Afternoon Parking Lot	</td>
              <td>
              <select onChange={onChange}>
              <option>Select </option>
                  <option value="X1">X1</option>
                  <option value="X2">X2</option>
                  <option value="X3">X3</option>
                  <option value="X4">X4</option>
                  <option value="X5">X5</option>
                  <option value="X6">X6</option>
                  <option value="X7">X7</option>
                </select>
              </td>
              <td>
                <select  onChange={onTue}>
                <option>Select </option>
                  <option value="X1">X1</option>
                  <option value="X2">X2</option>
                  <option value="X3">X3</option>
                  <option value="X4">X4</option>
                  <option value="X5">X5</option>
                  <option value="X6">X6</option>
                  <option value="X7">X7</option>
                </select>
              </td>
              <td>
                <select  onChange={onWed}>
                <option>Select </option>
                  <option value="X1">X1</option>
                  <option value="X2">X2</option>
                  <option value="X3">X3</option>
                  <option value="X4">X4</option>
                  <option value="X5">X5</option>
                  <option value="X6">X6</option>
                  <option value="X7">X7</option>
                </select>
              </td>
              <td>
                <select  onChange={onThu}>
                <option>Select </option>
                  <option value="X1">X1</option>
                  <option value="X2">X2</option>
                  <option value="X3">X3</option>
                  <option value="X4">X4</option>
                  <option value="X5">X5</option>
                  <option value="X6">X6</option>
                  <option value="X7">X7</option>
                </select>
              </td>
              <td>
                <select  onChange={onFri}>
                <option>Select </option>
                  <option value="X1">X1</option>
                  <option value="X2">X2</option>
                  <option value="X3">X3</option>
                  <option value="X4">X4</option>
                  <option value="X5">X5</option>
                  <option value="X6">X6</option>
                  <option value="X7">X7</option>
                </select>
              </td>
            </tr>

          </tbody>
         
        </Table>
        <br/>
        <div>
          {
            repeated.length === 0 ? null  : <div className='error'>Shift Repeated in Monday, Please Refresh and create new Shift</div> 
          }
          {
            tue.length === 0 ? null : <div className='error'>Shift Repeated in Tuesday, Please Refresh and create new Shift</div>
          }
          {
            Wednesday.length === 0 ? null : <div className='error'>Shift Repeated in Wednesday, Please Refresh and create new Shift</div>
          }
          {
            thurday.length === 0 ? null : <div className='error'>Shift Repeated in thurday, Please Refresh and create new Shift</div>
          }
          {
            Friday.length === 0 ? null : <div className='error'>Shift Repeated in Friday, Please Refresh and create new Shift</div>
          }
          </div>
        <br />
        <h3>Lead</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Staff Member</th>
              {
                WeekDays.map((item) => {
                  return <th >{item}</th>
                })
              }
              <th>Totals</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>X1</td>
              {
                data.map((item) => {
                  return <td>0</td>
                })
              }
            </tr>
            <tr><td>X2</td>
              {
                data.map((item) => {
                  return <td>0</td>
                })
              }</tr>
            <tr><td>X3</td>
              {
                data.map((item) => {
                  return <td>0</td>
                })
              }</tr>
            <tr><td>X4</td>
              {
                data.map((item) => {
                  return <td>0</td>
                })
              }</tr>
            <tr><td>X5</td>
              {
                data.map((item) => {
                  return <td>0</td>
                })
              }</tr>
            <tr><td>X6</td>
              {
                data.map((item) => {
                  return <td>0</td>
                })
              }</tr>
            <tr><td>X7</td>
              {
                data.map((item) => {
                  return <td>0</td>
                })
              }</tr>

          </tbody>
        </Table>
      </div>
    </div>
  )
}
