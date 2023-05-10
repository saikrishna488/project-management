import AddClient from '../components/AddClient'
import Clients from '../components/Clients'
import Projects from '../components/Projects'
import AddProject from '../components/AddProject'

const Home = () => {
    return (
        <>
            <AddClient />
            <AddProject/>
            <Projects />
            <Clients />
        </>
    )
}

export default Home
