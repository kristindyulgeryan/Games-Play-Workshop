import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import gameService from '../../services/gameService.js'
import CommentsShow from '../comments-show/CommentsShow.jsx'
import CommentsCreate from '../comments-create/CommentsCreate.jsx'

export default function GameDetails({
  email,
}) {
const navigate = useNavigate()
  const[game, setGame] = useState({})
  const {gameId} = useParams()


useEffect(()=>{
(async () => {
  const result = await gameService.getOne(gameId)
  setGame(result)
})();
  }, [gameId])
 


const gameDeleteClickHandler = async()=>{
  const hasConfirm = confirm(`Are you sure you want to delete ${game.title} game?`)

 if(!hasConfirm){
  return
 }

 await gameService.delete(gameId)
 navigate('/')
}

  return (
    <section id="game-details">
    <h1>Game Details</h1>
    <div className="info-section">
      <div className="game-header">
        <img className="game-img" src={game.imageUrl} />
        <h1>{game.title}</h1>
        <span className="levels">MaxLevel: {game.maxLevel}</span>
        <p className="type">{game.category}</p>
      </div>
      <p className="text">
      {game.summary}
      </p>
   
   <CommentsShow/>
     
      <div className="buttons">
        <Link to={`/games/${gameId}/edit`} className="button">
          Edit
        </Link>
        <button onClick={gameDeleteClickHandler} className="button">
          Delete
        </button>
      </div>
    </div>
   
    
    <CommentsCreate email={email}/>
  </section>
  )
}

