import React, { Component } from "react";
import "./App.scss";
import CardConatiner from "./Card";

class App extends Component {
  state = {
    cards: [
      {
        id: "0",
        color: "FEC006",
        title: "Snow in Turkey Brings Travel Woes",
        thumbnail: "",
        category: "Pending",
        excerpt:
          "Heavy snowstorm in Turkey creates havoc as hundreds of villages left without power, and hundreds of roads closed",
        date: new Date()
      },
      {
        id: "1",
        color: "2196F3",
        title: "Landslide Leaving Thousands Homeless",
        thumbnail: "",
        category: "Paid",
        excerpt:
          "An aburt landslide in the Silcon Valley has left thousands homeless and on the streets.",
        date: new Date()
      },
      {
        id: "2",
        color: "FE5621",
        title: "Hail the size of baseballs in New York",
        thumbnail: "",
        category: "Submited",
        excerpt:
          "A rare and unexpected event occurred today as hail the size of snowball hits New York citizens.",
        date: new Date()
      },
      {
        id: "3",
        color: "673AB7",
        title: "Earthquake destorying San Fransisco",
        thumbnail: "",
        category: "Paid",
        excerpt:
          "A massive earthquake just hit San Fransisco leaving behind a giant crater.",
        date: new Date()
      },
      {
        id: "4",
        color: "673AB7",
        title: "Earthquake destorying San Fransisco",
        thumbnail: "",
        category: "Paid",
        excerpt:
          "A massive earthquake just hit San Fransisco leaving behind a giant crater.",
        date: new Date()
      }
    ]
  };

  renderCard(key) {
    return (
      <div className="column">
        <CardConatiner key={key} index={key} details={this.state.cards[key]} />
      </div>
    );
  }
  render() {
    return (
      <div className="app">
        {" "}
        <div className="container">
          {this.state.cards.map(el => this.renderCard(el.id))}
        </div>
      </div>
    );
  }
}

export default App;
