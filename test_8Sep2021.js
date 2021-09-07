import B from './B'
class A extends React.Component {
	constructor() {
		super();
		
		 this.state = {
            showLoadingImage: false,
        };
	}
	setStateFromB =(stateFromB) => {
		this.setSate({showLoadingImage: stateFromB})
	}
    render() {
        return (
            <B callBackFn={this.setStateFromB} />

        )
    }
}




class B extends React.Component {
	constructor() {
		super();
		
		 this.state = {
            showLoadingImage: true,
        };
	}
	componentWillMount() {
		this.props.callBackFn(this.state.showLoadingImage);
	}
}