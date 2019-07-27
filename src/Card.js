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
          27 September 2019
        </a>
        <h3 className="article__category" style={styles}>
          {details.category}
        </h3>
      </div>
      <div class="ui comments">
        <div class="comment">
          <div class="avatar">
            <img src="https://i.pravatar.cc/200" />
          </div>
          <div class="content">
            <a class="author">Stevie Feliciano</a>
          </div>
          <div class="metadata">
            <div>Today at 5:42PM</div>
            <div class="ui label">
              <i aria-hidden="true" class="users icon" />
              23 submits
            </div>
          </div>
        </div>
      </div>
      {/* <div class="ui comments">
        <div class="comment">
          <div class="content">
            <div class="author">Stevie Feliciano</div>
            <div class="metadata">
              <div class="ui label">
                <i aria-hidden="true" class="users icon" />
                23 submits
              </div>
              <div>2 days ago</div>
            </div>
          </div>
          <a class="avatar">
            <img alt="avatar" src="https://i.pravatar.cc/200" />
          </a>
        </div>
      </div> */}
      <div class="ui card">
        <div class="content">
          <h2 className="article__title">
            {" "}
            <i aria-hidden="true" class="map marker alternate icon" />
            {details.title}
          </h2>
        </div>
        <div class="content">
          {/* <div class="description">{details.excerpt}</div> */}
          <ol role="list" class="ui list">
            <li value="*" role="listitem" class="">
              Signing Up
            </li>
            <li value="*" role="listitem" class="">
              User Benefits
            </li>
            <li value="*" role="listitem" class="">
              User Types
              <ol role="listitem" class="item">
                <li value="-" role="listitem" class="">
                  Admin
                </li>
                <li value="-" role="listitem" class="">
                  Power User
                </li>
                <li value="-" role="listitem" class="">
                  Regular User
                </li>
              </ol>
            </li>
            <li value="*" role="listitem" class="">
              Deleting Your Account
            </li>
          </ol>
        </div>
        <div class="extra content">
          <i aria-hidden="true" class="clock outline icon" /> 12:00 - 15:00 AM
          (GMT)
        </div>
      </div>

      <div class="ui card ">
        <div class="content">
          <div class="ui feed">
            <div class="event">
              <div class="content">
                <div class="date">1 day ago</div>
                <div class="summary">
                  <a href="/">Jenny Hess</a>
                  submitted this task.
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
