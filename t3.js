class App extends React.Component {
    state = {
        
        sort: [],
        
    };

    clearSort = () => {
      console.log(this.state.sort,'this.state.sortBEFORE')
        this.setState({
            sort: []
        });
    }

    sortChange = (event) => {
      console.log(this.state.sort,'this.state.sortBEFORE')
        this.setState({
            
            sort: event.sort
        });
    }

    

      
        
        render() {
            console.log(this.state.sort,'this.state.sort')
        return (
            <div>
                <button value="Clear Sort" onClick={this.clearSort} /> //****SORT CLEAR BUTTON*****/
