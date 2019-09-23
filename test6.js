
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
        if (sort === 0) //*****meanse user not clicked any sorting only pagination*****
        {
            //Pass default "order by" first AutoIncrementColumn Like "Id" and "LIMIT" state.skip, state.pageLimit
        } else if (sort !== 0) {  //*****meanse user  clicked any sorting with pagination*****

            // FOR Example my 'sort' coming like that 
            /*
            sort:[ 0:{
            Dir:asv,
            Field: column name,}] 
            */

            const SortingParamsList = [];
            (sort || []).map(obj => {
                const sortObject = {
                    "sortOrder": obj.Dir,
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

                    //****FILTERATION*****//
                    filter= {{
                        logic: "and",
                        filters: [
                            { field: "ProductName", operator: "contains", value: "Chef" } //****YAHA PAR TUMHARE COLUMN KE NAME DENA****/
                        ]
                    }}
                /></div>)
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

    buttonClickSort = () => {
        this.props.onSort(this.state.sortStae, this.state) // pass 'this.state.sortStae' AT PLace of event.sort 
    }
    sortChange = (event) => {
        // this.props.onSort(event.sort, this.state) //**** We will not call API call back here ****
        //****** we will just save in state *****

        FIST CASE :- 
            //HAME CHECK KARNA HOGA MULTIPLA COLUMN PAR CLICK KARNE PAR event.sort me below records merge ho rahe he ya nahi like :- 
            /*sort: [{
                Dir: asc,
                Field: Id
            }, {
                Dir: desc,
                Field: Name
            }, {
                Dir: desa,
                Field: salary
            }]*/

            this.setSate({ sortStae: event.sort })


        SECOND CASE :- 
            let mergedSort = this.state.sortStae;
            //AGAR MERGE NAHI HO RAHA HE TO HUMKO FIR KUCH NAYA ARRAY BANANA HOGA 
            // 1. If Dir(ORDERBY !== 'UNSORT'){
                const findIndex = this.state.sortStae.findIndex(obj=> obj.Field === event.sort.Field)

                if(event.sort.Dir !== 'UNSORT' ){
                    // 1. if not exist ADD 
                    if(findIndex === -1){
                        mergedSort.push({Dir: event.sort.Dir, Field: event.sort.Field})
                    }
                    // 2. if exist but different value then Replace new value with old value 
                    if(findIndex !== -1){
                        mergedSort[findIndex].Dir = event.sort.Dir
                    }
                } else {
                    // 1. check value is exist 
                    if(findIndex !== -1){
                        // then Remove from array 
                        mergedSort= this.state.sortStae.filter(obj=> obj.Field !== event.sort.Field)
                    }
                }
                //AGAIN REDECLAR THE STATE MEANS OVERIGHT THE STSTE AGAIN 
                this.setSate({ sortStae: mergedSort })
    }

    //********FILTERATION******//
    
    searchConditionChange = (e) => {
        
        this.props.onSort(this.state.searchCondition, e.target.value) // pass 'this.state.sortStae' AT PLace of event.sort 
    }
    buttonClickSearch = () => {
        // pass 'this.state.searchCondition' Like 'AND OR ANY'   AND this.state.searchFilterCondition like '@SP FILTER ARRAY EXAPMLE '
        this.props.onSearch(this.state.searchCondition, this.state.searchFilterCondition) 
    }
    filterChange = (event) => {
        //****** we will just save in state *****
        
        FIST CASE :- 
            //HAME CHECK KARNA HOGA MULTIPLA COLUMN PAR CHANGE KARNE PAR event.filter me below records merge ho rahe he ya nahi like :- 
            //@SP FILTER ARRAY EXAPMLE 
            /*filter: [{
                Condition: 'Is Equal To',
                Field: ProductName,
                SearchVale: 'Hay'
            }, {
                Condition: 'Is Equal To',
                Field: FirstOrderedOn,
                SearchVale: 'Shree'
            },
            {  
                Condition: 'Is Equal To',
                Field: UnitPrice,
                SearchVale: 'Ram'
            }]*/

            this.setSate({ searchFilterCondition: event.filter })

            
        SECOND CASE :- 
            let mergedSort = this.state.searchFilterCondition;
            //AGAR MERGE NAHI HO RAHA HE TO HUMKO FIR KUCH NAYA ARRAY BANANA HOGA 
            // 1. If Dir(ORDERBY !== 'CLEAR'){  // FIRST HAMKO CHECK KARNA HOGA KI USER NE CLEAR BUTTON PAR TO CLICK TO NAHI KIYA
                const findIndex = this.state.searchFilterCondition.findIndex(obj=> obj.Field === event.filter.Field)

                // MUJHE NAHI PATA KI JAB VO CLEAR BUTTON PAR CLICK KARTA HE TO KYA CONSOLE LOG AYEGA event.filter me TO ME ABHI ANDAJE SE 'event.filter.Dir' LE RAHA HU TUM CONSOLE LAGA KAR CHECK AKNA AND CHANGE KARNA 
                if(event.filter.Dir !== 'CLEAR' ){
                    // 1. if not exist ADD 
                    if(findIndex === -1){
                        mergedSort.push({Condition: event.sort.Condition, Field: event.sort.Field, SearchVale: event.sort.SearchVale})
                    }
                    // 2. if exist but different value then Replace new value with old value 
                    if(findIndex !== -1){
                        mergedSort[findIndex].SearchVale = event.sort.SearchVale
                        mergedSort[findIndex].Condition = event.sort.Condition
                    }
                } else {
                    // 1. check value is exist 
                    if(findIndex !== -1){
                        // then Remove from array 
                        mergedSort= this.state.searchFilterCondition.filter(obj=> obj.Field !== event.sort.Field)
                    }
                }
                //AGAIN REDECLAR THE STATE MEANS OVERIGHT THE STSTE AGAIN 
                this.setSate({ searchFilterCondition: mergedSort })
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
