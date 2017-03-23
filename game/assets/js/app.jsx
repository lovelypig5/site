import ReactDOM from 'react-dom';
import Hexagon from './hexagon.jsx';

class App extends React.Component {

    constructor() {
        super();

        this.state = {
            images: [],
            size: 0
        }
    }

    render() {
        let a = [];
        this.state.images.map((image, index) => {
            a.push(<Hexagon image={image} index={index} size={this.state.size} key={'image' + index}/>);
        });
        return <div>{a}</div>
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                size: Math.floor($('.app').width() / 130)
            })
        }, 100)
        this.setState({
            images: [
                '../images/team/1.jpg',
                '../images/team/2.jpg',
                '../images/team/3.jpg',
                '../images/team/4.jpg',
                '../images/team/1.jpg',
                '../images/team/2.jpg',
                '../images/team/3.jpg',
                '../images/team/4.jpg',
                '../images/team/1.jpg',
                '../images/team/2.jpg',
                '../images/team/3.jpg',
                '../images/team/4.jpg',
                '../images/team/1.jpg',
                '../images/team/2.jpg',
                '../images/team/3.jpg',
                '../images/team/4.jpg',
                '../images/team/1.jpg',
                '../images/team/2.jpg',
                '../images/team/3.jpg',
                '../images/team/4.jpg',
                '../images/team/4.jpg',
                '../images/team/1.jpg',
                '../images/team/2.jpg',
                '../images/team/3.jpg',
                '../images/team/4.jpg',
                '../images/team/4.jpg',
                '../images/team/1.jpg',
                '../images/team/2.jpg',
                '../images/team/3.jpg',
                '../images/team/4.jpg',
                '../images/team/4.jpg',
                '../images/team/1.jpg',
                '../images/team/2.jpg',
                '../images/team/3.jpg',
                '../images/team/4.jpg'
            ]
        })

        window.addEventListener('resize', () => {
            this.setState({
                size: Math.floor($('.app').width() / 130)
            })
        });
    }

    componentWillUnmount() {
        window.removeEventListener('resize');
    }
}

ReactDOM.render(
    <App/>, $('.app')[0]);
