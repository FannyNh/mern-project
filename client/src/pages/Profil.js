import React, { useContext } from 'react';
import Log from '../components/Log'
import UidContext from '../components/AppContext'

const Profil = () => {
    const uid = useContext(UidContext)
    return (
        <div className="profil-page">
            {console.log(uid)}
            <div className="log-container">
                {uid ? <h1>update</h1> : <Log signUpM={false} signUpM={true} />}
            <div className="img-container"><img src="./img/log.svg" alt="img-log" /></div>
            </div>
        </div>
    );
};

export default Profil;