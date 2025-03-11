import React from 'react'

function GameCreate() {
  return (
    <section id="create-page" className="auth">
    <form id="create">
      <div className="container">
        <h1>Create Game</h1>
        <label htmlfor="leg-title">Legendary title:</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Enter g/ame title..."
        />
        <label htmlfor="category">Category:</label>
        <input
          type="text"
          id="category"
          name="category"
          placeholder="E/nter game category..."
        />
        <label htmlfor="levels">MaxLevel:</label>
        <input
          type="number"
          id="maxLevel"
          name="maxLevel"
          min={1}
          plac=""
          eholder={1}
        />
        <label htmlfor="game-img">Image:</label>
        {" "}
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          placeholder="U/pload a photo..."
        />
        <label htmlfor="summary">Summary:</label>
        <textarea name="summary" id="summary" defaultValue={""} />
        <input
          className="btn submit"
          type="submit"
          defaultValue="Create Game"
        />
      </div>
    </form>
  </section>
  )
}

export default GameCreate