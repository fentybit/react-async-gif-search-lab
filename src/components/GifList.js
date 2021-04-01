import React from 'react';

class GifList extends React.Component {
    render() {
        return (
            <div>
                {this.props.gifs.map(gif => <img src={gif} height="200px"/> )}        
            </div>
        )
    }
}

export default GifList;