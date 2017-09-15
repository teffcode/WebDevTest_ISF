import React from 'react';

import './CoursesForm.css';

class CoursesForm extends React.Component {
    constructor() {
        super();

        this.state = {
            searchQuery: ''
        };
    }

    handleOnChange = (event) => {
        this.setState({
            searchQuery: event.target.value
        });
    }

    handleOnSubmit = (event) => {
        event.preventDefault();

        // Call function props.onSubmit with the search input value
        this.props.onSubmit(this.state.searchQuery);

        // Reset state.searchQuery to ''
        this.setState({
            searchQuery: ''
        });
    }

    render() {

        return (
            <div className="container">
                <div style={{height:"99px"}}></div>
                <div className="container__banner__filter"></div>
                <div className="container__banner">
                    <form onSubmit={this.handleOnSubmit}>
                        <div className="container__input__button"> 
                            <h1>Course Search</h1>
                            <div className="input__button">
                                <input
                                    className="input__search"
                                    type="search"
                                    placeholder="Search courses and providers..."
                                    value={this.state.searchQuery}
                                    onChange={this.handleOnChange}
                                />
                                <button
                                    className="button__search"
                                    type="submit"
                                >
                                    +
                                </button>
                            </div>
                            <h2>Florida | Registered Nurse Florida</h2>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

CoursesForm.defaulProps = {
    loading: false
};

export default CoursesForm;