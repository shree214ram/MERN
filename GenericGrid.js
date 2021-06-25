import React from 'react';
import { AgGridReact, AgGridColumn } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import GridOverlay from './GridOverlay';

export const ROUND = Math.round;
export const FLOOR = Math.round;
export const CEIL = Math.ceil;

/* ROWSPAN : function is using for set  Row Span behalf of the count of respective field 
  input : is field name like (objective/milestoneStatus)
  params : is current params object of respective row , Like {milestoneStatus-Count:4, milestoneStatus : open  } in which a key which has string `-Count` is coming , shows this milestoneStatus
  will be same for next 3 rows 
  So one Big cell is appearing behalf of this of 4 row and one collumn 
  -------------
  |           |
  |   open    |
  |           |
  -------------
*/
const ROWSPAN = (input) => (params) => {
    if (params.data[input + '-Count']) {
        return params.data[input + '-Count'];
    } else {
        return 1;
    }
};
/* 
  createShowCellRenderer : function is using for set  dynamic cell html with background ; 
  white and a cell 4X1 
*/
function createShowCellRenderer() {
    function ShowCellRenderer() { }
    ShowCellRenderer.prototype.init = function (params) {
        var cellBlank = !params.value;
        if (cellBlank) {
            return null;
        }
        this.ui = document.createElement('div');
        this.ui.className = "show-name-parent";
        this.ui.style.width = params.column.actualWidth + "px";
        this.ui.innerHTML =
            '<div class="show-name" >' +
            params.value +
            '</div>';
    };
    ShowCellRenderer.prototype.getGui = function () {
        return this.ui;
    };
    return ShowCellRenderer;
}

const GenericGrid = (props) => {
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    const getTableHeight = (tablerow) => {
        let tabLen = tablerow.length;
        tabLen = tabLen > 10 ? 10 : tabLen;
        tabLen = tabLen === 0 ? 1 : tabLen;
        return tabLen < 2 ? tabLen * 40 + 40 : tabLen < 3 ? tabLen * 35 + 40 : tabLen * 31 + 40;
    };
    const getTableWidth = (tablecolumn) => {
        return tablecolumn.length > 5 || tablecolumn.length === 0 ? window.width : tablecolumn.length * (window.innerWidth / 6.38);
    };
    const onGridReady = (params, a, b) => {
        params.api.hideOverlay();
        // const props = props
        if (props.disableResizable) {
            const thisGridColumnApi = params.columnApi;
            var allColumnIds = [];
            thisGridColumnApi.getAllColumns().forEach(function (column) {
                props.columnDefs
                    .filter((columnDef) => columnDef.resizable && columnDef.field === column.colId)
                    .map((obj) => {
                        allColumnIds.push(column.colId);
                        return true;
                    });
            });
            thisGridColumnApi.autoSizeColumns(allColumnIds, false);
        }
    };
    const getDefaultColDef = () => {
        return {
            flex: 1,
            minWidth: 100,
            resizable: !props.disableResizable,
            filter: !props.disableFilters,
            suppressMovable: props.disableReordering,
            editable: props.isEditable,
            sortable: !props.disableSorts,
        };
    };
    const showTitle = () => {
        if (props.showTitle) {
            return (
                <div>
                    <br />
                    <span className='gridStyle'> {props.title} </span>
                    <br />
                </div>
            );
        }
        return null;
    };
    const percentageFormatter = (typeFn) => (params) => {
        return !isNaN(params.value) ? typeFn(params.value) + '%' : params.value;
    };

    const createCombinations = (...args) => {
        var r = [],
            max = args.length - 1;
        function helper(arr, i) {
            for (var j = 0, l = args[i].length; j < l; j++) {
                var a = arr.slice(0); // clone arr
                a.push(args[i][j]);
                if (i === max) r.push(a);
                else helper(a, i + 1);
            }
        }
        helper([], 0);
        return r;
    };
    /* generateGridData : function is using for generate Grid Data as expected format for Rowspan style 
     1. if groupBy is null means no row span will be perform on the cell 
     2. in the inner part of if condition removing the repating cell and increasing the count in the previous row
        like Array = [ {objective:"User Experience1", milestoneStatus : open  },
                       {objective:"User Experience2", milestoneStatus : open  },
                       {objective:"User Experience2", milestoneStatus : open  },
                       {objective:"User Experience2", milestoneStatus : open  }
                     ]
        Result Array will be =  [ {objective:"User Experience1" , objective-Count:1,  milestoneStatus : open, milestoneStatus-Count:4  },
                                  {objective:"User Experience2", objective-Count:3   },
                                  {},
                                  {}
                                ]
  */
    const generateGridData = (newRowData) => {
        const keyArray = props.groupBy;
        if (!newRowData || newRowData.length === 0 || !keyArray || keyArray.length === 0) {
            return newRowData;
        }
        //convert data into RowSpanning Format
        let newUpdatedArray = [];
        if (keyArray && keyArray.length > 0) {
            /*
          Order by and sort by on behalf of given keys like (objective => milestoneStatus)
          Previously they were coming in Non order now coming together and sorted format  
          */
            //Sort By
            var flags = {},
                outputOfUniqueKeys = {},
                l = newRowData.length,
                i,
                j,
                k = keyArray.length;
            keyArray.forEach((val) => {
                flags[val] = [];
                outputOfUniqueKeys[val] = [];
            });

            //Unique Keys
            for (i = 0; i < l; i++) {
                //multiple level
                for (j = 0; j < k; j++) {
                    if (flags[keyArray[j]][newRowData[i][keyArray[j]]]) continue;
                    flags[keyArray[j]][newRowData[i][keyArray[j]]] = true;
                    outputOfUniqueKeys[keyArray[j]].push(newRowData[i][keyArray[j]]);
                }
            }
            //merge all keys unique keys array's Like first key : ["A","B","C"]
            //second key: ["a","b","d"] third key :[2, 5, 7]
            //Result will be [ ["A","B","C"],  ["a","b","d"], [2, 5, 7]]
            const params = [];
            for (let key in outputOfUniqueKeys) {
                params.push(outputOfUniqueKeys[key]);
            }

            const resultOfAllPossibleCombinations = createCombinations(...params);
            //Unique Keys arrangement
            const orderedByGroupKeys = [];

            resultOfAllPossibleCombinations.forEach((selectedCombinationObj, selectedIndex) => {
                // selectedCombinationObj =["Big12","TX"]
                const filteredData = newRowData.filter((dataObj) => {
                    // dataObj = {"school": "Texas","mascot": "Longhorn", "state": "TX","conference": "Big12"}
                    for (var i = 0; i < keyArray.length; i++)
                        //keyArray[i] = conference
                        if (dataObj[keyArray[i]] !== selectedCombinationObj[i]) return false;
                    return true;
                });
                orderedByGroupKeys.push(...filteredData);
            });
            //Set up the according to AGgrid sowspan structure reference from https://www.ag-grid.com/react-grid/row-spanning/
            const updatedNewRowData = orderedByGroupKeys;
            let oldStatusObject = updatedNewRowData[0];
            //set count for first row
            keyArray.forEach((currentValue, currentIndex) => {
                oldStatusObject[currentValue + '-Count'] = 1;
                oldStatusObject[currentValue + '-LastIndex'] = 0;
            });
            updatedNewRowData.forEach((object, index) => {
                //array loop
                const newObj = {};
                for (let innerKay in object) {
                    // current object's key loop
                    if (keyArray.includes(innerKay) && (object[innerKay] !== oldStatusObject[innerKay] || index === 0)) {
                        newObj[innerKay] = object[innerKay];
                        //set count and index
                        newObj[innerKay + '-Count'] = 1;
                        newObj[innerKay + '-LastIndex'] = index;
                        oldStatusObject[innerKay] = object[innerKay];
                        oldStatusObject[innerKay + '-LastIndex'] = index;
                    } else if (keyArray.includes(innerKay) && object[innerKay] === oldStatusObject[innerKay]) {
                        if (
                            (oldStatusObject[innerKay + '-LastIndex'] || oldStatusObject[innerKay + '-LastIndex'] === 0) &&
                            newUpdatedArray[oldStatusObject[innerKay + '-LastIndex']]
                        ) {
                            const oldCount = newUpdatedArray[oldStatusObject[innerKay + '-LastIndex']][innerKay + '-Count'];
                            const newCount = oldCount + 1;
                            newUpdatedArray[oldStatusObject[innerKay + '-LastIndex']][innerKay + '-Count'] = newCount;
                        }
                    } else if (!keyArray.includes(innerKay)) {
                        newObj[innerKay] = object[innerKay];
                    }
                }
                newUpdatedArray.push(newObj);
                return true;
            });
        } else {
            newUpdatedArray = newRowData;
        }
        return newUpdatedArray;
    };

    const newRowData = [];
    if (props && props.data && props.data.length) {
        (props && props.data ? props.data : []).map((obj) => {
            const newObj = {};
            for (var key in props.data[0] || {}) {
                newObj[key] = obj[key];
            }
            newRowData.push(newObj);
            return obj;
        });
    }
    const newUpdatedArray = generateGridData(newRowData);
    const tableHeight = props.height ? props.height : getTableHeight(newUpdatedArray);
    const tableWidth = props.width ? props.width : getTableWidth(props.columnDefs);
    const newFormatedColumnData = [];
    props.columnDefs.forEach((columnDef) => {
        if (columnDef.format && columnDef.format === 'percent') {
            columnDef.valueFormatter = percentageFormatter(columnDef.roundFunc);
        }
        if (props.groupBy && props.groupBy.includes(columnDef.field)) {
            columnDef.cellRenderer = 'showCellRenderer';
            columnDef.rowSpan = ROWSPAN(columnDef.field);
            columnDef.cellClassRules = { 'show-cell': 'value !== undefined' };
        }
        newFormatedColumnData.push(<AgGridColumn {...columnDef} />);
        return true;
    });
    return (
        <>
            {props.showTitle ? showTitle() : null}
            <div className='ag-theme-balham gridContainer' style={{ width: tableWidth, height: tableHeight }}>
                <AgGridReact
                    className='gridStyle'
                    defaultColDef={getDefaultColDef()}
                    rowData={newUpdatedArray}
                    onGridReady={onGridReady.bind(this)}
                    components={{ showCellRenderer: createShowCellRenderer() }}
                    suppressRowTransform={true}
                >
                    {newFormatedColumnData}
                </AgGridReact>
                {props.loading || !newUpdatedArray || newUpdatedArray.length === 0 ? (
                    <div className='gridLoadingOverlay' cds-layout='horizontal align:center'>
                        <GridOverlay loading={props.loading} />
                    </div>
                ) : null}
            </div>
        </>
    );
};

export default GenericGrid;
