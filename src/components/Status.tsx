import {useState, useContext, useEffect} from 'react'
import {UserContext} from './Account'

type Props = {}

export const Status = (props: Props) => {

    const [status, setStatus] = useState(false)

    //@ts-ignore
    const {getSession, LogOut} = useContext(UserContext)

    useEffect(() => {
       getSession()
       .then((session:any)=> {
           setStatus(true)
       })
    }, [])
    

  return (
    <div>
        {
            status ? <button onClick={LogOut}>Log Out</button> : <div>Not logged in</div>
        }
    </div>
  )
}