import React, { Component } from 'react'

export default class SearchBar extends Component {

    state = { term: '' }

    /** 
     * This method is activated when user press Enter
    */
    onFormSubmit = (event) => {

        // Disable Default submit operation
        event.preventDefault();

        // Activate parent (App) onSubmit method
        this.props.onFormSubmit(this.state.term);
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    }
}
