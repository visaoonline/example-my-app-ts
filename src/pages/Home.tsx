import { useContext, useState } from 'react';
import { GlobalContext } from '../context/globalState';
import { Link } from 'react-router-dom';

const Home = () => {
    const { state, setState } = useContext(GlobalContext);

    const [localState, setLocalState] = useState(1)

    function count(){
        setState({
        ...state,
        number: state.number + 1
        })
    }

    const addLocal = () => {
        setLocalState(localState + 1)
    }
    return(
        <>
            <p>Login</p>
            <input />
            <button> Logar </button> <br/>
            
            <hr/>


            <p>
                <button onClick={addLocal}>
                    Add localState
                </button>
                Estado do componente
                <p>{localState}</p>
            </p>
            <hr/>

            <p>Estado global</p>

            <button onClick={count}>
                Add
            </button>
            {state.number}

            <Link to='/conta'> Conta </Link>
        </>
    )
}

export default Home;
