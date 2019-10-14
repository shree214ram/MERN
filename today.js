
class ParentComponanat extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isSort: false
        }
    }
    onSortChange = () => {
        
        this.setState({isSort:true}) 
    }
    onSortButtonClick = (event, state) => {
        //CAL API AGAI
        // ****COVERT ******//
        this.commonFunction(state, event.sort)
        this.setState({isSort:true}) 
    }
    resetButtonClick = () => {
        this.setState({isSort:false})
    }
    render() {
        return (
            <div>
                <GridComponanat
                    data={APIRESPONSEDATA}
                    allowUnsort={true}
                    isSort={this.state.isSort}  //**********IMPORTANT********/
                    multiple={true}
                    sort={true}
                    onSortChange={this.onSortChange}
                    onSortButtonClick={this.onSortButtonClick}

                    //****FILTERATION*****//
                    filter= {{
                        logic: "and",
                        filters: [
                            { field: "ProductName", operator: "contains", value: "Chef" } //****YAHA PAR TUMHARE COLUMN KE NAME DENA****/
                        ]
                    }}
                    onSearch={this.onSearchChange}
                />
                <SearchComponanat
                    
                    resetButtonClick={this.resetButtonClick}

                />
                
                </div>)
    }
}

class SearchComponanat extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    
    resetButtonClick = () => {
        this.props.resetButtonClick() 
    }
    

    render() {
        return (
            <div>
                
                <button value="RESET" onClick={this.resetButtonClick} /> //****RESET BUTTON*****/
                
                <Grid
                    style={{ height: '300px' }}
                    data={this.props.data}
                    sortable={{
                        allowUnsort: this.props.allowUnsort,
                        mode: this.props.multiple ? 'multiple' : 'single'
                    }}
                    sort={this.props.sort}
                    onSortChange={this.sortChange}

                    //**FILTERATION****//
                    filterable
                    filter={this.props.filter}
                    onFilterChange={(e) => {
                        this.setState({
                            filter: e.filter
                        });
                    }}
                    >
                    {/* //****YAHA PAR TUMHARE COLUMN KE NAME DENA**** */}
                    <Column field="ProductID" title="ID" filterable={false} 
                    /* ****JIS COLUMN PAR FILTER NAHI CHAHIYE filterable={false}**** */
                    width="60px" />
                    <Column field="ProductName" title="Product Name" />
                    <Column field="FirstOrderedOn" width="240px" filter="date" format="{0:d}" />
                    <Column field="UnitPrice" width="180px" filter="numeric" format="{0:c}" />
                    <Column field="Discontinued" width="190px" filter="boolean" />
                </Grid></div>)
    }
}

class GridComponanat extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            sortStae: [],// please check it Array OR Object required 
            //********FILTERATION******//
            searchCondition:null,
            searchFilterCondition: []
        }
    }
    componentWillReceiveProps(nextProps) {
        
        if (this.props !== nextProps) {
          if (
            this.props.isSort &&
            (this.props.isSort !== nextProps.isSort && this.state.sort.length > 0)
          ) {
            this.setSate({ sort: [] })
            }
        }
    }
    buttonClickSort = () => {
        this.props.onSort(this.state.sortStae, this.state) // pass 'this.state.sortStae' AT PLace of event.sort 
    }
    sortChange = (event) => {
            this.setSate({ sortStae: event.sort })
            this.props.onSortChange();
    }

    render() {
        return (
            <div>
                <button value="Sort" onClick={this.buttonClickSort} /> //****SORT BUTTON*****/
                <select onChange={this.searchConditionChange}>
                    <option>AND</option>
                    <option>ANY</option>
                </select>
                <button value="SEARCH" onClick={this.buttonClickSearch} /> //****SEARCH BUTTON*****/
                
                <Grid
                    style={{ height: '300px' }}
                    data={this.props.data}
                    sortable={{
                        allowUnsort: this.props.allowUnsort,
                        mode: this.props.multiple ? 'multiple' : 'single'
                    }}
                    sort={this.props.sort ? this.state.sort : []} // **********IMPORTANT*********}
                    onSortChange={this.sortChange}

                    //**FILTERATION****//
                    filterable
                    filter={this.props.filter}
                    onFilterChange={(e) => {
                        this.setState({
                            filter: e.filter
                        });
                    }}
                    >
                    {/* //****YAHA PAR TUMHARE COLUMN KE NAME DENA**** */}
                    <Column field="ProductID" title="ID" filterable={false} 
                    /* ****JIS COLUMN PAR FILTER NAHI CHAHIYE filterable={false}**** */
                    width="60px" />
                    <Column field="ProductName" title="Product Name" />
                    <Column field="FirstOrderedOn" width="240px" filter="date" format="{0:d}" />
                    <Column field="UnitPrice" width="180px" filter="numeric" format="{0:c}" />
                    <Column field="Discontinued" width="190px" filter="boolean" />
                </Grid></div>)
    }
}
