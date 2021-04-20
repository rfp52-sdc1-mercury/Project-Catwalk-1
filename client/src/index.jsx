import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ProductDetail from './components/ProductDetail/main.jsx';
import RatingReview from './components/RatingReview/main.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      product: {},
      product_id: 17067,
      product_styles: [],
      reviews: []
    }
    this.fetchAll = this.fetchAll.bind(this);
    this.fetchOne = this.fetchOne.bind(this);
    this.fetchProductStyle = this.fetchProductStyle.bind(this);
    this.fetchReviews = this.fetchReviews.bind(this);
  }

  fetchAll() {
    axios.get('/products')
      .then((results) => {
        console.log('Success getting all products from API');
        this.setState({
          products: results.data
        });
      })
      .catch((err) => {
        console.log('Error getting all products from API');
      })
  }

  fetchOne(id) {
    axios.get('/products/' + id)
      .then((results) => {
        console.log('Success getting one product from API');
        this.setState({
          product: results.data
        })
      })
      .catch((err) => {
        console.log('Error getting one product from API');
      })
  }

  fetchProductStyle(id) {
    axios.get(`/products/${id}/styles`)
      .then((results) => {
        console.log('Success getting one product style from API');
        this.setState({
          product_styles: results.data.results
        })
      })
      .catch((err) => {
        console.log('Error getting one product style from API');
      })
  }

  fetchReviews(id) {
    axios.get('/reviews/')
      .then((results) => {
        console.log('Success getting all reviews from API');
        this.setState({
          reviews: results.data
        });
      })
      .catch((err) => {
        console.log('Error getting all reviews from API');
      })
  }

  componentDidMount() {
    this.fetchAll();
    this.fetchOne(this.state.product_id);
    this.fetchProductStyle(this.state.product_id);
    this.fetchReviews(this.state.product_id);
  }

  render() {
    return(
      <div>
        <ProductDetail product={this.state.product}/>
        <RatingReview reviews={this.state.reviews}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
