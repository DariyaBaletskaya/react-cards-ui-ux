import React, { Component } from "react";
import "./App.scss";
import CardConatiner from "./Card";

class App extends Component {
  state = {
    cards: [
      {
        id: "0",
        color: "FEC006",
        author: "Stevie Feliciano",
        avatar: "https://i.pravatar.cc/300",
        dateCompletion: "27 July 2019",
        postingTime: "Today at 5:42PM",
        submits: 4,
        organization: "Health University Hospital",
        skills: [
          "Commercial awareness.",
          "Working under pressure",
          "Problem-solving and initiative",
          "Verbal communication",
          "Self-Motivation"
        ],
        status: "Pending",
        acceptedBy: "Joe Henderson",
        acceptanceTime: "1 day ago",
        workTime: "12:00 - 15:00AM (GMT)"
      },
      {
        id: "1",
        color: "db2828",
        author: "Joe Henderson",
        avatar: "https://i.pravatar.cc/150",
        dateCompletion: "24 August 2019",
        postingTime: "Today at 8:45AM",
        submits: 3,
        organization: "Centinela Medical Center",
        skills: [
          "English",
          "Working under pressure",
          "Responsibility.",
          "Verbal communication",
          "Customer service and communication skills"
        ],
        status: "Paid",
        acceptedBy: "Stevie Felician",
        acceptanceTime: "2 days ago",
        workTime: "10:00 - 16:00AM (GMT)"
      },
      {
        id: "2",
        color: "6435c9",
        author: "Elliot Fu",
        avatar: "https://i.pravatar.cc/205",
        dateCompletion: "13 September 2019",
        postingTime: "Yesterday at 9:42PM",
        submits: 8,
        organization: "Phs Indian Hospital",
        skills: [
          "English",
          "Customer service and communication skills",
          "Time management",
          "Verbal communication",
          "Cultural awareness"
        ],
        status: "Submited",
        acceptedBy: "Steve Jobes",
        acceptanceTime: "2 days ago",
        workTime: "12:00 - 15:00AM (GMT)"
      },
      {
        id: "3",
        color: "db2828",
        author: "Tom Lukic",
        avatar: "https://i.pravatar.cc/209",
        dateCompletion: "30 July 2019",
        postingTime: "Today at 5:49PM",
        submits: 6,
        organization: "Mayo Clinic Hospital",
        skills: [
          "Customer service and communication skills",
          "Working under pressure",
          "Customer service and communication skills",
          "Verbal communication",
          "Problem-solving and initiative"
        ],
        status: "Paid",
        acceptedBy: "Steve Jobes",
        acceptanceTime: "1 day ago",
        workTime: "10:00 - 16:00AM (GMT)"
      },
      {
        id: "4",
        color: "FEC006",
        author: "Steve Jobes",
        avatar: "https://i.pravatar.cc/280",
        postingTime: "Yesterday at 6:42PM",
        dateCompletion: "03 August 2019",
        submits: 8,
        organization: "Beth Hospital Needham",
        skills: [
          "English",
          "Working under pressure",
          "Commercial awareness",
          "Verbal communication",
          "Self-Motivation"
        ],
        status: "Pending",
        acceptedBy: "Tom Lukic",
        acceptanceTime: "3 days ago",
        workTime: "12:00 - 15:00AM (GMT)"
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
        <div className="container">
          {this.state.cards.map(el => this.renderCard(el.id))}
        </div>
      </div>
    );
  }
}

export default App;
