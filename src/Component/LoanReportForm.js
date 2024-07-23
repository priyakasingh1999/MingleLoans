import { Grid } from '@mui/material'
import React from 'react'
import '../App.css'
import Header from './Header'
import PageHeading from './PageHeading'

const LoanReportForm = () => {
  return (
    <div>
        
        <table className='style'> 
            <tr>
                <th>Sr. No.</th>
                <th>Application No.</th>
                <th>Application Date</th>
                <th>Application Status</th>
            </tr>
            <tr>
                <td>1</td>
                <td>11</td>
                <td>23/07/2024</td>
                <td>Approved</td>
            </tr>
            <tr>
                <td>2</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </table>
       
    </div>
  )
}

export default LoanReportForm