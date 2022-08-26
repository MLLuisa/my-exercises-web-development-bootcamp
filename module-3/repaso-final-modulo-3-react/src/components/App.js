import '../styles/App.scss';
import getDataApi from '../services/ContactApi';
import { useEffect , useState} from 'react';
import UserList from './UserList';
import Filters from './Filters';
import {matchPath, Route, Routes, useLocation} from 'react-router-dom';
import UserDetail from './UserDetail';

function App() {

  const [dataUsers, setDataUsers] = useState([]);
  const [filterByGender, setFilterByGender] = useState("all");
  const [filterCities, setFilterCities] = useState([]);



  useEffect(() => {
    getDataApi().then((dataFromApi) => {
      console.log(dataFromApi);
      setDataUsers(dataFromApi)
    });
  }, []);

  const handleFilterByGender = (value) => {
    setFilterByGender(value);
  }

  const handleFilterCity = (value) => {
    if(filterCities.includes(value)) {
      const position = filterCities.indexOf(value);
      filterCities.splice(position, 1);
      setFilterCities([...filterCities]);
    } else {
       setFilterCities([...filterCities, value]);
    }
  }

  const userFilters = dataUsers
  .filter((user) => {
    if(filterByGender === "all") {
      return true;
    } else {
    return user.gender === filterByGender;
    }
  })
  .filter(user => {
    if(filterCities.length === 0) {
      return true;
    } else {
      return filterCities.includes(user.city);
    }
    
  })

  const getCities = () => {
    const userCities = dataUsers.map(user => user.city);
    const uniqueCities = userCities.filter((city, index) => {
      return userCities.indexOf(city) === index;
    })
    return uniqueCities;
  }

  const {pathname} = useLocation();
  const dataPath = matchPath("/user/:userId", pathname)
  const userId = dataPath !== null ? dataPath.params.userId : null;
  const userFound = dataUsers.find(user => {
    return user.id === userId
  })


  return (
    <>
    <div className="App">
      <h1>Directorio de personas</h1>
      <Routes>
        <Route path="/"
        element={<><Filters 
      filterByGender={filterByGender}
      handleFilterByGender={handleFilterByGender}
      getCities={getCities()}
      handleFilterCity={handleFilterCity}/>
      <UserList 
      users={userFilters}/></>}/>

      <Route path="/user/:userId"
      element={< UserDetail user={userFound}/>}/>


      </Routes>
      
      
    </div>
    </>
  );
}

export default App;
