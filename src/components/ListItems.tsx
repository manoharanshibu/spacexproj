import * as React from "react";
import moment from 'moment';
import { useEffect, useState } from "react";
import { AgGridColumn, AgGridReact, } from 'ag-grid-react';
import RocketDialog from '../ui/RocketDialog';
import { ActionType } from '../state/action-types/index'

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import './ListItems.scss';

import { State } from '../state';
import { useDispatch, useSelector } from "react-redux";

import { fetchItems } from "../state/action-creators";

import { MAX_ITEMS } from '../AppConstants';
import { RowClickedEvent } from "ag-grid-community";

const ListItems = () => {
  const dispatch = useDispatch();
  const { items, loadedItems } = useSelector((state: State) => state.itemsReducer);

  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  useEffect(() => {
    items.sort((a: any, b: any) => {
      return new Date(b.launch_date_utc).getTime() - new Date(a.launch_date_utc).getTime();
    })
    items.map((item: any) => {
      item.launch_date_utc = moment(item.launch_date_utc).format('YYYY-MM-DD HH:MM:SS');
    })
    setRowData(items.slice(0, MAX_ITEMS));
  }, [loadedItems])

  const columnDefs = [
    { headerName: 'Mission Name', field: 'mission_name', isSortable: true, isFilterable: true },
    {
      headerName: 'Rocket Name', field: 'rocket', cellRenderer: (params: any) => {
        console.log(params.value.rocket_name)
        if (params.value && params.value) {
          return `<a href='#' name="rocket-link">${params.value.rocket_name}</a>`
        } else {
          return '<span>-</span>'
        }
      }
    },
    { headerName: 'Details', field: 'details' },
    { headerName: 'Launch Date', field: 'launch_date_utc', isSortable: true },
    { headerName: 'Launch Success', field: 'launch_success' },
    { headerName: 'Ships', field: 'ships' },
    { headerName: 'Flight Number', field: 'flight_number' },
    {
      headerName: 'Links', field: 'links', cellRenderer: (params: any) => {
        if (params.value.mission_patch_small) {
          return '<span><img width="30" height="30" src=' + params.value.mission_patch_small + '></span>'
        } else {
          return '<span></span>'
        }
      }
    }
  ]

  const onRowClicked = (e: any) => {
    if (e.event.target.name === 'rocket-link') {
      dispatch({
        type: ActionType.SHOW_ROCKET_DETAILS,
        payload: {
          showRocketDetails: true,
          selectedRocket: e.data["rocket"]
        }
      });
    }
  }

  const onRowDoubleClicked = (e: RowClickedEvent) => {
    if (e.data["links"].article_link) {
      window.open(e.data["links"].article_link, '_blank');
    }
  }

  return (
    <div className="ag-theme-alpine container">
      <RocketDialog open={false} />
      {items && <AgGridReact data-testid="ag-grid-react" rowData={rowData} onCellClicked={onRowClicked} onRowDoubleClicked={onRowDoubleClicked} domLayout={'autoHeight'}>
        {
          columnDefs.map((column, index) => {
            return <AgGridColumn key={`ag-grid-column${index}`} resizable={true} width={250} sortable={column.isSortable} filter={column.isFilterable} headerName={column.headerName} field={column.field} cellRenderer={column.cellRenderer}></AgGridColumn>
          })
        }
      </AgGridReact>}
    </div>
  )
}

export default ListItems;
