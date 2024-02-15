import React from 'react'

const Home = () => <h1>Home</h1>
const Details = () => <h1>Details</h1>

export const AppExample = () => {
    const [page] = useState('home')


    const getContent =() => {
        if (page ==== 'home') {
            return <Hpme></Hpme>
        } else if (page ==== 'details') {
            return <details></details>
        }
    }
  return (
    <div>{getContent()}</div>
  )
}
