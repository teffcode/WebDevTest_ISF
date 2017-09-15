import React, { Component } from 'react';
import axios from 'axios';

import NavigationBar from '../NavigationBar/NavigationBar';
import FeaturedCoursesCards from '../FeaturedCoursesCards/FeaturedCoursesCards';
import CoursesCards from '../CoursesCards/CoursesCards';
import SearchForm from '../CoursesForm/CoursesForm';

import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      query: '',
      courses: [],
      featuredCourses: [],
      loading: false,
      error: ''
    };
  }

  getCoursesDataFromAPI = () => {
    axios.get(`https://api.cebroker.com/v2/search/courses/?expand=totalItems&pageIndex=1&pageSize=18&sortField=RELEVANCE&profession=36&courseType=CD_ANYTIME&sortShufflingSeed=27&courseName=${this.state.query}`)
      .then(result => {
        this.setState({
          courses: result.data.items,
          loading: false,
          error: ''
        });
      })
      .catch(err => {
        this.setState({
          courses: [],
          loading: false,
          error: err.message
        });
      });
  }

  handleSearchFormSubmit = (searchFormValue) => {
    this.setState({
        query: searchFormValue,
        loading: true,
        courses: [],
        error: ''
    }, this.getCoursesDataFromAPI);
  }

  renderCourses() {
    return this.state.courses.map((_course) => {

      return (
          <div 
            className="container__card"
            key={_course.course.id}
          >
            <CoursesCards
              title={_course.course.name}
              provider={_course.course.provider.name}
              description={_course.course.deliveryMethod.description}
              price={_course.price}
            />
          </div>
      );
    });
  }

  componentWillMount() {
    axios.get(`https://api.cebroker.com/v2/featuredCoursesProfession?profession=36`)
      .then(result => {
        console.log(result.data)
        this.setState({
          featuredCourses: result.data
        });
      })
      .catch(err => {
        this.setState({
          featuredCourses: [],
          loading: false,
          error: err.message
        });
      });  
  }

  renderFeaturedCourses() {
    return this.state.featuredCourses.map((featured) => {

      const {featuredBanner} = featured.coursePublication.course
      const {name} = featured.coursePublication.course

      return (
          <div 
            className="container__card"
            key={featured.coursePublication.id}
          >
            <FeaturedCoursesCards
              imageCourse={`https://storage.cebroker.com/CEBroker/${featuredBanner}`}
              title={name}
              provider={featured.coursePublication.course.provider.name}
              description={featured.coursePublication.course.deliveryMethodObject}
              price={featured.coursePublication.price}
            />
          </div>
      );
    });
  }

  render() {
    return (
      <div>
        <NavigationBar/>
          <div>              
            <SearchForm
              onSubmit={this.handleSearchFormSubmit}
              loading={this.state.loading}
            />
            {
              !!this.state.query &&
              <div>
                  You searched for: {this.state.query}
              </div>
            }
          </div>
          <div className="container__courses1">
            <h3 className="title__courses">Featured Courses</h3>
            <div className="container__provider">
              {this.renderFeaturedCourses()}
            </div>
          </div>
          <div className="container__courses1">
            <h3 className="title__courses">Results</h3>
            <div className="container__cards">
              {this.renderCourses()}
            </div>
          </div>
      </div>
    );
  }
}

export default App;
