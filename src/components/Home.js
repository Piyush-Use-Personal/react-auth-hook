import { useAuth } from "../store/Auth"

const Home = () => {

    const { toggleLoginPopup, state: { user, token, error, fetching } } = useAuth()

    return <div>
        <button onClick={() => toggleLoginPopup()}>Open login</button>
        <p>State changes</p>
        {
            fetching && <p>fetching: loading...</p>
        }
        {
           token && <p>token: {token}</p> 
        }
        {
            user && <p>user: {JSON.stringify(user)}</p>
        }
        {
            error && <p>error: {JSON.stringify(error)}</p>
        }

    </div>
}

export default Home