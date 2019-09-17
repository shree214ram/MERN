
class ParentComponanat extends React.Component {
    onSubmitFunction = (state) => {
        // On Submit Date picker Button First Time Called 
        //API CALL 
        //Pass default "order by" first AutoIncrementColumn Like "Id" and "LIMIT" 0, InputBoxPageLimit
        //Response 
        //SET STATE
    }
    commonFunction = (state, sort = 0) => {
        // On Pagination Page change 
        // WE will have to convert this function like  
        if(sort === 0) //*****meanse user not clicked any sorting only pagination*****
        {
        //Pass default "order by" first AutoIncrementColumn Like "Id" and "LIMIT" state.skip, state.pageLimit
        } else if (sort !== 0){  //*****meanse user  clicked any sorting with pagination*****

            // FOR Example my 'sort' coming like that 
            /*
            sort:[ 0:{
            Dir:asv,
            Field: column name,}] 
            */

            const SortingParamsList = [];
            (sort|| []).map(obj=>{
                const sortObject = {
                    "sortOrder" : obj.Dir, 
                    "columnName": obj.Field
                    }
                    SortingParamsList.push(sortObject);
            })
        
            /* UPPER CODE WILL PRODUCE DYNAMIC SortingParamsList ARRAY like that :-
            SortingParamsList[{
            "sortOrder" : ASC, 
            "columnName": "Id"
            },{
            "sortOrder" : DESC, 
            "columnName": "NAME"
            },{
            "sortOrder" : ASC, 
            "columnName": "Slaray"
            }]
            */
            //Pass  "order by"  "users selected column('convert sort in format what Backend wants ====>' at place of that pass 'SortingParamsList')" and "LIMIT" state.skip, state.pageLimit

        }
        //Response 
        //SET STATE
    }
    onSortChange = (event, state) => {
        //CAL API AGAI
        // ****COVERT ******//
        this.commonFunction(state, event.sort)
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
                /></div>)
    }

class GridComponanat extends React.Component {
    sortChange = (event) => {
        this.props.onSort(event.sort, this.state)
    }

    render() {
        return (
            <div>
                <Grid
                    style={{ height: '300px' }}
                    data={this.props.data}
                    sortable={{
                        allowUnsort: this.props.allowUnsort,
                        mode: this.props.multiple ? 'multiple' : 'single'
                    }}
                    sort={this.props.sort}
                    onSortChange={this.sortChange}
                /></div>)
    }
