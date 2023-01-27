import Nav from './Nav';
import {useForm} from 'react-hook-form'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();
    const {register,handleSubmit,formState:errors} = useForm();
    const submitForm = (data) => {
    console.log(data);
    navigate('/grid')
    }
    const [rowData,setRowData] = useState([]);
    const [uniqueData, setUniqueData] = useState([]);
    useEffect(() => {
        fetch('https://www.ag-grid.com/example-assets/row-data.json')
        .then(result => result.json())
        .then(rowData => setRowData(rowData))
     }, []);
     useEffect(() =>{
        const dt = new Set;
        rowData.forEach((d) => {
            dt.add(d.make)
        })
        setUniqueData(Array.from(dt))
     }, [rowData]);
    return <><Nav/>
    <form onSubmit={handleSubmit(submitForm)}>
    <label>Value</label> 
    <select className='form-control' {...register('value',{required:true})}>
        {uniqueData.map((a,i) => <option key={i} value={a}>{a}</option> )}
    </select>
    <br/>
    <button type='Submit' className='btn btn-primary'>Submit</button>
    </form>
    </>
}

export default Home;