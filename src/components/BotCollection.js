import React, { useEffect, useState } from 'react'
import './BotCollection.css';
import Button from './Button';
import EnlistedBot from './EnlistedBot';

function BotCollection() {

    const [botItems, setBotItems] = useState([])

    const [enlistedBots, setEnlistedBots] = useState([]);


    


    useEffect(() => {
        fetch('https://db-json-g24s.onrender.com/bots')
            .then(res => res.json())
            .then(data => setBotItems(data))
            .catch(err => console.log(err))
    }, [])

    function handleDelete(id) {
        setBotItems(botItems.filter(bot => bot.id !== id));

    }
    
    function enlistBot(bot) {
        if (enlistedBots.length < 4 && !enlistedBots.find(b => b.id === bot.id)) {
          setEnlistedBots([...enlistedBots, bot]);
          
        }
      }
    
      function removeFromArmy(id) {
        setEnlistedBots(enlistedBots.filter(bot => bot.id !== id));
      }
    


    return (


        <div className='container'>
            <div className='row'>
            <EnlistedBot army={enlistedBots} removeFromArmy={removeFromArmy} />

                {botItems.map(bot => (
                    <div key={bot.id} className='col-sm-3 mb-4'>
                        <div className="card" >
                            <a href={`/Bot-battlr-Alvin-code-challenge-2-ph2/${bot.id}`}>
                                <img src={bot.avatar_url} className="card-img-top" alt={bot.name} />
                            </a>
                            <div className="card-body">
                                <h5 className="card-title">name:{bot.name}</h5>
                                <p className="card-text">{bot.created_at}</p>
                                <p className="card-text">{bot.updated_at}</p>
                                <Button id={bot.id} onDelete={handleDelete} />
                                <button className="btn btn-primary btn-sm m-3" onClick={() => enlistBot(bot)}>Enlist</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>


    )


    //     
}

export default BotCollection