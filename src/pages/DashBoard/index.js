import {useContext} from 'react';
import {AuthContext} from '../../contexts/auth';

import Header from '../../components/Header';

export default function DashBoard(){
    const {signOut} = useContext(AuthContext);
    return(
        <div>
            <Header/>
            
            <h1>PAGINA DASHBOARD</h1>
            <button onClick={()=> signOut()}>Sair</button>
        </div>
    )
}