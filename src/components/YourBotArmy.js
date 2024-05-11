import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom"
import EnlistedBot from './EnlistedBot';


function YourBotArmy() {

  const { id } = useParams()

  const [robot, setRobot] = useState({})

  const [enlistedBots, setEnlistedBots] = useState([]);

  useEffect(() => {
    fetch(`https://db-json-g24s.onrender.com/bots/${id}`)
      .then(res => res.json())
      .then(data => {
        setRobot(data)
      })
  }, [id])

  function enlistBot(bot) {
    if (enlistedBots.length < 4 && !enlistedBots.find(b => b.id === bot.id)) {
      setEnlistedBots([...enlistedBots, bot]);
      
    }
  }

  function removeFromArmy(id) {
    setEnlistedBots(enlistedBots.filter(bot => bot.id !== id));
  }


  return (
    <div>
      <div key={robot.id} className='col-sm-3 mb-4'>
        <div className="card" >

          <img src={robot.avatar_url} className="card-img-top" alt={robot.name} />
          <div className="card-body">
            <h5 className="card-title">name:{robot.name}</h5>
            <EnlistedBot army={enlistedBots} removeFromArmy={removeFromArmy} />
            <p className="card-text">Catchphrase  :{robot.catchphrase}</p>
            <p className="card-text">Health {robot.health}</p>
            <p className="card-text">Damage {robot.damage}</p>
            <p className="card-text">Armor {robot.armor}</p>
            <p className="card-text">Created At {robot.created_at}</p>
            <p className="card-text">Updated At {robot.updated_at}</p>
            <p className="card-text">{robot.bot_class}</p>

            

            <Link to="/Bot-battlr-Alvin-code-challenge-2-ph2">
              <button className='btn btn-success btn-sm m-2'>Back</button>
            </Link>

          </div>
        </div>
      </div>
    </div>
  )
}

export default YourBotArmy