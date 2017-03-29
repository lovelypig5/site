import Hexagon from './hexagon.jsx';

class Home extends React.Component {

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

    async componentDidMount() {
        setTimeout(() => {
            this.setState({
                size: Math.floor($('.app').width() / 130)
            })
        }, 100)
        var response = await window.fetch('api/list');
        var results = await response.json();
        var data = results.map((result) => {
            return {image: `/images/cover/${result.name}.jpg`, name: `${result['名字']}`};
        });
        this.setState({data: data});

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

export default Home;
