import React from 'react';

class GifSearch extends React.Component {
    constructor() {
        super();
        this.state = {
            query: ""
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.fetchGIFs(this.state.query)
    }

    render() {
        return (
            <div style={{margin: "10px"}}>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        value={this.state.query}
                        onChange={event => this.setState({ query: event.target.value })}
                    />
                </form>
            </div>
        )
    }
}

export default GifSearch;