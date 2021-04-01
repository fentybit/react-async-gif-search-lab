import React from 'react';
import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList';

class GifListContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            gifs: []
        }
    }

    componentDidMount() {
        this.fetchGIFs();
    }
    
    fetchGIFs = (query = "barbie") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
            .then(response => response.json())
            .then(({data}) => {
                this.setState({ gifs: data.map( gif => gif.images.original.url ) })
            })
    }
    
    render() {
        return (
            <div>
                <GifSearch fetchGIFs={this.fetchGIFs} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}

export default GifListContainer;