import ReactDOM from 'react-dom';
import Hexagon from './hexagon.jsx';

class App extends React.Component {

    constructor() {
        super();

        this.state = {
            data: []
        }
    }

    render() {
        let a = [];
        this.state.data.map((item, index) => {
            a.push(<Hexagon data={item} index={index} size={this.state.size} key={'image' + index}/>);
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
            data: [
                {
                    image: '../images/cover/Yashino.jpg',
                    name: "kyo"
                }, {
                    image: '../images/cover/Kyo.jpg',
                    name: "kyo"
                }, {
                    image: '../images/cover/Zero.jpg',
                    name: "kyo"
                }, {
                    image: '../images/cover/4.jpg',
                    name: "kyo"
                }, {
                    image: '../images/cover/1.jpg',
                    name: "kyo"
                }, {
                    image: '../images/cover/2.jpg',
                    name: "kyo"
                }, {
                    image: '../images/cover/3.jpg',
                    name: "kyo"
                }, {
                    image: '../images/cover/4.jpg',
                    name: "kyo"
                }, {
                    image: '../images/cover/1.jpg',
                    name: "kyo"
                }, {
                    image: '../images/cover/2.jpg',
                    name: "kyo"
                }, {
                    image: '../images/cover/3.jpg',
                    name: "kyo"
                }, {
                    image: '../images/cover/4.jpg',
                    name: "kyo"
                }, {
                    image: '../images/cover/1.jpg',
                    name: "kyo"
                }, {
                    image: '../images/cover/2.jpg',
                    name: "kyo"
                }, {
                    image: '../images/cover/3.jpg',
                    name: "kyo"
                }, {
                    image: '../images/cover/4.jpg',
                    name: "kyo"
                }, {
                    image: '../images/cover/1.jpg',
                    name: "kyo"
                }, {
                    image: '../images/cover/2.jpg',
                    name: "kyo"
                }, {
                    image: '../images/cover/3.jpg',
                    name: "kyo"
                }, {
                    image: '../images/cover/4.jpg',
                    name: "kyo"
                }, {
                    image: '../images/cover/4.jpg',
                    name: "kyo"
                }, {
                    image: '../images/cover/1.jpg',
                    name: "kyo"
                }, {
                    image: '../images/cover/2.jpg',
                    name: "kyo"
                }, {
                    image: '../images/cover/3.jpg',
                    name: "kyo"
                }, {
                    image: '../images/cover/4.jpg',
                    name: "kyo"
                }, {
                    image: '../images/cover/4.jpg',
                    name: "kyo"
                }, {
                    image: '../images/cover/1.jpg',
                    name: "kyo"
                }, {
                    image: '../images/cover/2.jpg',
                    name: "kyo"
                }, {
                    image: '../images/cover/3.jpg',
                    name: "kyo"
                }, {
                    image: '../images/cover/4.jpg',
                    name: "kyo"
                }, {
                    image: '../images/cover/4.jpg',
                    name: "kyo"
                }, {
                    image: '../images/cover/1.jpg',
                    name: "kyo"
                }, {
                    image: '../images/cover/2.jpg',
                    name: "kyo"
                }, {
                    image: '../images/cover/3.jpg',
                    name: "kyo"
                }, {
                    image: '../images/cover/4.jpg',
                    name: "kyo"
                }
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
