import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const User = () => {

    interface IFollower {
        login: string,
        url: string,
        id: number,
    }
    
    const [user, setUser] = useState([])

    useEffect(() => {
        async function github(){
            let response = await fetch('https://api.github.com/users/nathyts/followers')
            setUser(await response.json())
        }

        github()
    }, [])

    let { id }: any = useParams();

    return(
        <>
            <h1>User</h1>
            Id: {id}
            {user.map((follower: IFollower) => {
                return(
                    <div key={follower.id}>
                        <p>{follower.login}</p>
                        <p>{follower.url}</p>
                        <p>{follower.id}</p>
                        <hr/>
                    </div>
                )
            })}
        </>
    )
}

export default User;
