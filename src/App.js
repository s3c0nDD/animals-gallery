import React, { Component } from 'react';
import Form from './components/Form'
import imagesService from './services/animals.service'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      images: [],
      processing: false,
      type: 'shibes',
    }
  }

  handleChange = (propName, propValue) => {
    if (propName === 'count') {
      if (propValue > 10) { propValue = 10 }
      if (propValue < 1) { propValue = 1 }
    }
    this.setState({ [propName]: propValue });
  };

  handleSubmit = async () => {
    const { count, type} = this.state;
    this.setState({ processing: true });
    const images = await imagesService.fetchImages({ count, type });
    this.setState({ images: Array.from(images), processing: false });
  };

  render() {
    const {
      count,
      images,
      processing,
      type
    } = this.state;

    return (
      <div className="app">
        <Form
          onSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          type={type}
          count={count}
          processing={processing}
        />
        {images && images.map((img, index) => (
            <img
              style={{ maxWidth: 300 }}
              key={index}
              src={img}
              alt={`some ${type}, nr ${index}`}
            />
        ))}
      </div>
    );
  }
}

export default App;
