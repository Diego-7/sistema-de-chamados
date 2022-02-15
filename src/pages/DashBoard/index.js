import {useContext} from 'react';

import {AuthContext} from '../../contexts/auth';

export default function DashBoard(){
    const {signOut} = useContext(AuthContext);
    return(
        <div>
            <h1>PAGINA DASHBOARD</h1>
            <button onClick={()=> signOut()}>Sair</button>
        </div>
    )
}