import { useContext } from 'react';
import { GlobalContext } from '../context/globalState';
import { Link } from 'react-router-dom';

const Account = () => {

    const { state, setState } = useContext(GlobalContext)

    function adicionar(){
        setState({
            ...state,
            number: state.number + 1
        })
    }

    return(
        <>
            <h1>Account</h1>
            Valor global = {state.number}
            <button onClick={adicionar}>
                Add
            </button>

            <Link to='/'>Home</Link>
        </>
    )
}

export default Account;
