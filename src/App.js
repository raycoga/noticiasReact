import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import Tidings from "./components/news/Tidings";
import Form from './components/Form'
class App extends Component {
  state = {
    news: []
  };

  componentDidMount() {
    this.checkNews();
  }

  checkNews = async (state={category:'business',country:'ve'}) => {
   
    const url = `https://newsapi.org/v2/top-headlines?country=${state.country}&category=${state.category}&apiKey=995e939ec0aa42e48c755a1c99381508`;
    console.log(url);
    let response = await fetch(url);
    let news = await response.json();
    await this.setState({ news: news.articles });
    
  };

  render() {
    return (
      <Fragment>
        <Header title="React API News" />
        <div className="container white contenedor-noticias">
            <Form checkNews={this.checkNews}/>
            <Tidings
              news={this.state.news}
            />
        </div>
      </Fragment>
    );
  }
}

export default App;
