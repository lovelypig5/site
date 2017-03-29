class Hexagon extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let index = this.props.index;
        let size = this.props.size || 0;
        if (size < 3) {
            size = 3;
        }
        let combo = size * 2 - 1;
        let row = Math.floor(index / combo) * 2 + Math.floor(index % combo / size);
        let col = Math.floor(index % combo / size);
        let clear = <div></div>;
        if ((index + 1) % combo == 0) {
            clear = <div className="clear"></div>
        }

        return (
            <div>
                <div className="hex" style={{
                    top: -37 * row,
                    left: 65 * col
                }}>
                    <div className="hexagon hexagon2">
                        <div className="hexagon-in1">
                            <div className="hexagon-in2" style={{
                                backgroundImage: "url('" + this.props.data.image || 'default' + "')"
                            }}></div>
                        </div>
                    </div>
                </div>
                {clear}
            </div>
        );
    }

}

export default Hexagon;
