import { useState } from "react"
import { useAuth } from "../store/Auth"

const Home = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { login, state: { user, token, error, fetching } } = useAuth()

    return <div>home component
        <input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={() => login({
            email,
            password
        })}>Login</button>
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