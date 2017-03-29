import ReactDOM from 'react-dom';
import Home from './home/index.jsx';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <Home/>;
    }

}

ReactDOM.render(
    <App/>, $('.app')[0]);
