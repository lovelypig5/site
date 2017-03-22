class Hexagon extends React.Component {

    constructor(props) {
        super(props);
        this.style = {
            backgroundImage: "url(" + this.props.image + ")"
        }
    }

    render() {
        return (
            <div className="hex col-sm-6">
                <div>
                    <div className="hexagon hexagon2 gallery-item">
                        <div className="hexagon-in1">
                            <div className="hexagon-in2" style={this.style}>
                                <div className="overlay">
                                    <a href={this.props.image} data-rel="lightbox" className="fa fa-expand"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Hexagon;
