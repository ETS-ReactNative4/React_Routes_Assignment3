import React, { Component } from 'react';
import Course from '../Course/Course'
import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ],
        showCourse: false,
        selected: { id: '_ID_', title: '_COURSE_TITLE_' }
    }

    showHandler(id){
        let data=this.state.courses;
        this.setState({showCourse: true,
            selected: { id: id, title: data[id-1].title }

            })
    }

    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                {this.state.showCourse
                     ? <Course courseName={this.state.selected.title} courseid={this.state.selected.id}/>
                     :  <section className="Courses">
                     {
                         this.state.courses.map( course => {
                             return <article className="Course" onClick={()=>this.showHandler(course.id)} key={course.id}>{course.title}</article>;
                         } )
                     }
                 </section>
               }
                
               
            </div>
        );
    }
}

export default Courses;