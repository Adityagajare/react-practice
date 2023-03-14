import React from 'react'

const Studentdetails = (props) => {
    let data=props.data;
  return (
    <div>
        <marquee>Students Details table</marquee>
        <br />
        <br />
        <table border="5px" align='center'>
            <tr>
                <th>Student Name</th>
                <th>Student ID</th>
                <th>Course name</th>
                <th>Stream</th>
                <th>Subjects</th>
                <th>YOP</th>
            </tr>
            {data.map((x)=>{
                return <tr>
                    <td>{x.stdName}</td>
                    <td>{x.stdId}</td>
                    <td>{x.course}</td>
                    <td>{x.stream}</td>
                    <td>
                        <ul>
                        {x.subjects.map((x)=>{
                            return <li>{x}</li>
                        })}
                        </ul>
                    </td>
                    <td>{x.YOP}</td>
                </tr>
            })}
        </table>
    </div>
  )
}

export default Studentdetails