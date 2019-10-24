

class ParentComponanat extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sortState: []
            
        }
    }
    sortChange = (sort) => {
                this.setSate({ sortState: sort })
    }

    render() {
        return (
            <div>
                <GridComponanat
                    data={APIRESPONSEDATA}
                    allowUnsort={true}
                    multiple={true}
                    sort={true}
                    onSort={this.onSortChange}
                    sortChange={this.sortChange}
                    sortState={this.state.sortState}
                    //****FILTERATION*****//
                    filter= {{
                        logic: "and",
                        filters: [
                            { field: "ProductName", operator: "contains", value: "Chef" } //****YAHA PAR TUMHARE COLUMN KE NAME DENA****/
                        ]
                    }}
                    onSearch={this.onSearchChange}
                /></div>)
    }
}

class GridComponanat extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showSortButton: false
        }
    }

    componentWillReceiveProps(nextProps) {
        
        if (this.props !== nextProps) {
          if (
            this.props.sortState &&
            (this.props.sortState !== nextProps.sortState && this.state.sort.length > 0)
          ) {
            this.setState({ showSortButton: true });
            } else {
                this.setState({ showSortButton: fasle });
            }
        } else {
            this.setState({ showSortButton: fasle });
        }
    }

    sortChange = (event) => {
        this.props.sortChange(event.sort);
    }

render() {
    return (
        <div>
            <button hide={!this.state.showSortButton} value="Sort" onClick={this.buttonClickSort} /> //****SORT BUTTON*****/
            </div>
    )
}
}
