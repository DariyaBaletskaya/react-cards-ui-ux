import React from "react";

const Card = props => {
  const details = props.details;
  const styles = {
    backgroundColor: "#" + details.color
  };

  return (
    <article className="article">
      <div className="tags">
        <a href="/" className="ui image red label">
          {details.dateCompletion}
        </a>
        <h3 className="article__status" style={styles}>
          {details.status}
        </h3>
      </div>
      <div className="ui comments">
        <div className="comment">
          <div className="avatar">
            <img alt="avatar" src={details.avatar} />
          </div>
          <div className="content">
            <a href="/" className="author">
              {details.author}
            </a>
          </div>
          <div className="metadata">
            <div>{details.postingTime}</div>
            <div className="ui label">
              <i aria-hidden="true" className="users icon" />
              {details.submits} submits
            </div>
          </div>
        </div>
      </div>

      <div className="ui card">
        <div className="content">
          <h2 className="article__title">
            <i aria-hidden="true" className="map marker alternate icon" />
            {details.organization}
          </h2>
        </div>
        <div className="content">
          <ol className="ui list">
            {details.skills.map(li => (
              <li value="*">{li}</li>
            ))}
          </ol>
        </div>

        <div className="extra content">
          <div className="ui red pointing basic label">
            <i aria-hidden="true" className="clock outline icon" />
            {details.workTime}
          </div>
        </div>
      </div>

      <div className="ui card ">
        <div className="content">
          <div className="ui feed">
            <div className="event">
              <div className="content">
                <div className="date">{details.acceptanceTime}</div>
                <div className="summary">
                  <a href="/">{details.acceptedBy}</a>
                  accepted this task.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
