import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Project from './pages/Project';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(_existing,incoming) {
            return incoming;
          }
        },
        projects: {
          merge(_existing,incoming) {
            return incoming;
          }
        }
      }
    }
  }
});

const client = new ApolloClient({
  uri: 'https://project-management-rkb5.vercel.app/graphql',
  cache
});

function App() {

  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Header />
          <div className="container">
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='*' element={<NotFound/>}/>
              <Route path='/project/:id' element={<Project/>}/>
            </Routes>
          </div>
        </>
      </Router>

    </ApolloProvider>

  )
}

export default App
