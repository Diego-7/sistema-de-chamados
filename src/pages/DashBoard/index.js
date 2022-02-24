import './dashboard.css';
import {useState} from 'react';

import Header from '../../components/Header';
import Title from '../../components/Title';
import {FiMessageSquare, FiPlus, FiSearch, FiEdit2} from 'react-icons/fi';
import {Link} from 'react-router-dom';

export default function DashBoard(){
    const [chamados, setChamados] = useState([1]);
    return(
        <div>
            <Header/>

            <div className="content">
                <Title name="Atendimentos">
                    <FiMessageSquare size={25} />
                </Title>

                {chamados.length === 0 ? (
                <div className="container dashboard">
                    <span>Nenhum chamado registrado...</span>

                    <Link to="/new" className="new">
                    <FiPlus size={25} color="#FFF" />
                    Novo Chamado
                    </Link>
                </div>
                ) : (
                    <>
                    <Link to="/new" className="new">
                    <FiPlus size={25} color="#FFF" />
                    Novo Chamado
                    </Link>

                    <table>
                        {/*cabeçalho*/}
                        <thead>
                            <tr>
                                <th scope="col">Cliente</th>
                                <th scope="col">Assuntos</th>
                                <th scope="col">Status</th>
                                <th scope="col">Cadastrado em</th>
                                <th scope="col">#</th>
                            </tr>
                        </thead>
                        {/*cabeçalho até aqui*/}

                        {/*Corpo*/}
                        <tbody>
                            <tr>
                                <td data-label="Cliente">Sujeito</td>
                                <td data-label="Assunto">Suporte</td>
                                <td data-label="Status">
                                    <span className="badge" style={{backgroundColor: '#5CB85C'}}>Em aberto</span>
                                </td>
                                <td data-label="Cadastrado">20/06/2021</td>
                                <td data-label="#">
                                    <button className="action" style={{backgroundColor: '#3583F6'}}>
                                        <FiSearch color="#FFF" size={17} />
                                    </button>
                                    <button className="action" style={{backgroundColor: '#F6A935'}}>
                                        <FiEdit2 color="#FFF" size={17} />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                        {/*Fim do corpo*/}
                    </table>
                    </>
                )}

            </div>
           
        </div>
    )
}