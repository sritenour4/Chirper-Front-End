import React, { useState } from 'react';

const App = () => {
    
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const [chirps, setChirps] = useState([
        {
            username: 'Tom',
            message: 'Hey'
        },
        {
            username: 'Jane',
            message: 'Howdy'
        },
        {
            username: 'Jim',
            message: 'What\'s up'
        }
    ]); 
    

    const handleUsernameChange = e => {
        setUsername(e.target.value);
    }

    const handleSetMessage = e => {
        setMessage(e.target.value);
    }
    
    const handleClick = e => {
        setChirps([...chirps, {
            username: username,
            message: message
        }])

        setUsername('');
        setMessage('');
    }   

    // or write an in-line function onChange <input value={username} type="text" id="" onChange={e => setUsername(e.target.value)} />

    return (
        <div>
            <h1 className='text-primary col-3 text-center ml-3'>Chirper</h1>
            <div className="card card-body col-3 border border-secondary mb-5">
                <input value={username} type="text" placeholder="username" id="" onChange={handleUsernameChange} />
                <br/>
                <input value={message} type="text" placeholder="message" id="" onChange={handleSetMessage} />
                <br/>
                <button className='btn btn-primary' type='button' onClick={handleClick}>Chirp It</button>
            </div>  
            <div>
            <ul className="list-group list-group-flush w-25 h-40 border border-secondary text-center">
                {chirps.map(val => (
                    <li className='list-group-item'>@{val.username}<br></br>{val.message}</li>
                ))}
            </ul>
            </div>      
        </div>
    );
};

export default App;

