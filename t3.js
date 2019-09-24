class App extends React.Component {
    state = {
        
        sort: [],
        
    };

    sortChange = (event) => {
      console.log(this.state.sort,'this.state.sortBEFORE')
        this.setState({
            
            sort: event.sort
        });
    }

    

    render() {
      console.log(this.state.sort,'this.state.sort')
