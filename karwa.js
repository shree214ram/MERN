



class GridComponanat extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showSortButton: false
        }
    }

    componentDidUpdate(prevProps, prevState) {
    //checking Old state and new sate 
        if (prevState.sortStae !== this.state.sortStae) {
       // if length of array is greater than 0 then show
            if (this.state.sortStae.length > 0) {
                this.setState({ showSortButton: true });
            } else {
                this.setState({ showSortButton: fasle });
            }
        }
    }

    sortChange = (event) => {
        this.setSate({ sortStae: event.sort })
    }

render() {
    return (
        <div>
            <button hide={!this.state.showSortButton} value="Sort" onClick={this.buttonClickSort} /> //****SORT BUTTON*****/
            </div>
    )
}
}
