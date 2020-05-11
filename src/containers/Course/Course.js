import React, { Component } from 'react';

class Course extends Component {
    render () {
        return (
            <div>
                <h1>{this.props.courseName}</h1>
                <p>You selected the Course with ID:{this.props.courseid}</p>
            </div>
        );
    }
}

export default Course;