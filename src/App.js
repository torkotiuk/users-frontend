import { Route, Routes } from 'react-router-dom';
import AppBar from './Components/AppBar/AppBar';
import Container from './Components/Container/Container';
import Welcome from './Components/Welcome';
import Users from './Components/Users/Users';
import Groups from './Components/Groups';

export default function App() {
  return (
    <Container>
      <AppBar />
      
      <Routes>
        <Route path="/" exact
            element={<Welcome />}
              />
              
        <Route path="/users" exact
            element={<Users />}
        />
              
         <Route path="/groups" exact
            element={<Groups />}
        />
      </Routes>
    </Container>
  );
}