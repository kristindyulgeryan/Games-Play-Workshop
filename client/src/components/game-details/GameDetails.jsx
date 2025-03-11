import React from 'react'

function GameDetails() {
  return (
    <section id="game-details">
    <h1>Game Details</h1>
    <div classname="info-section">
      <div classname="game-header">
        <img classname="game-img" src="i/mages/MineCraft.png" />
        <h1>Bright</h1>
        <span classname="levels">MaxLevel: 4</span>
        <p classname="type">Action, Crime, Fantasy</p>
      </div>
      <p classname="text">
        Set in a world where fantasy creatures live side by side with humans.
        A human cop is forced to work with an Orc to find a weapon everyone is
        prepared to kill htmlFor=. Set in a world where fantasy creatures live
        side by side with humans. A human cop is forced to work with an Orc to
        find a weapon everyone is prepared to kill htmlFor=.
      </p>
      {/* Bonus ( htmlFor= Guests and Users ) */}
      <div classname="details-comments">
        <h2>Comments:</h2>
        <ul>
          {/* list all comments htmlFor= current game (If any) */}
          <li classname="comment">
            <p>Content: I rate this one quite highly.</p>
          </li>
          <li classname="comment">
            <p>Content: The best game.</p>
          </li>
        </ul>
        {/* Display paragraph: If there are no games in the database */}
        <p classname="no-comment">No comments.</p>
      </div>
      {/* Edit/Delete buttons ( Only htmlFor= creator of this game )  */}
      <div classname="buttons">
        <a href="#" classname="button">
          Edit
        </a>
        <a href="#" classname="button">
          Delete
        </a>
      </div>
    </div>
    {/* Bonus */}
    {/* Add Comment ( Only htmlFor= logged-in users, which is not creators of the current game ) */}
    <article classname="create-comment">
      <label>Add new comment:</label>
      <form classname="form">
        <textarea
          name="comment"
          placeholder="Comment......"
          defaultValue={""}
        />
        <input
          classname="btn submit"
          type="submit"
          defaultValue="Add Comment"
        />
      </form>
    </article>
  </section>
  )
}

export default GameDetails