import Nav from './Nav';
import { AgGridReact } from 'ag-grid-react'; 
import React, { useState, useRef, useEffect, useMemo, useCallback} from 'react';
import { render } from 'react-dom';

import 'ag-grid-community/styles/ag-grid.css'; 
import 'ag-grid-community/styles/ag-theme-alpine.css'; 
const Grid = () => {
    const gridRef = useRef(); // Optional - for accessing Grid's API
 const [rowData, setRowData] = useState(); // Set rowData to Array of Objects, one Object per Row

 // Each Column Definition results in one Column.
 const [columnDefs, setColumnDefs] = useState([
   {field: 'make', filter: true},
   {field: 'model', filter: true},
   {field: 'price'}
 ]);

 // DefaultColDef sets props common to all Columns
 const defaultColDef = useMemo( ()=> ({
     sortable: true
   }));

 // Example of consuming Grid Event
 const cellClickedListener = useCallback( event => {
   console.log('cellClicked', event);
 }, []);

 // Example load data from sever
 useEffect(() => {
   fetch('https://www.ag-grid.com/example-assets/row-data.json')
   .then(result => result.json())
   .then(rowData => setRowData(rowData))
 }, []);

 // Example using Grid's API
 const buttonListener = useCallback( e => {
   gridRef.current.api.deselectAll();
 }, []);
    return <><Nav/>
     <div>

<div className="ag-theme-alpine" style={{width: 500, height: 500}}>

  <AgGridReact
      ref={gridRef} 

      rowData={rowData} 

      columnDefs={columnDefs}
      defaultColDef={defaultColDef} 

      animateRows={true} 
      rowSelection='multiple' 

      onCellClicked={cellClickedListener}
      />
</div>
</div>
    </>

}

export default Grid;