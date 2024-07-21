import logo from './logo.svg';
import './App.css';
import { Grid } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Component/Dashboard';
import Login from './Component/Login';
import LoanApplicationForm from './Component/LoanApplicationForm';
import { LoanReports } from './Component/LoanReports';
import ApplicationContactDetails from './Component/ApplicationContactDetails';
import DocumentUpload from './Component/DocumentUpload';

function App() {
  return (

    <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/loan-application' element={<LoanApplicationForm/>}></Route>
      <Route path='/loan-reports' element={<LoanReports/>}></Route>
      <Route path='/application-details' element={<ApplicationContactDetails/>}></Route>
      <Route path='/document-upload' element={<DocumentUpload/>}></Route>
    </Routes>
  );
}

export default App;
