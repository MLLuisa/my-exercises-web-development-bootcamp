import '../styles/App.scss';
import getDataApi from '../services/ContactApi';
import { useEffect , useState} from 'react';
import UserList from './UserList';
import Filters from './Filters';

function App() {

  const [dataUsers, setDataUsers] = useState([]);
  const [filterByGender, setFilterByGender] = useState("all");



  useEffect(() => {
    getDataApi().then((dataFromApi) => {
      console.log(dataFromApi);
      setDataUsers(dataFromApi)
    });
  }, []);

  const handleFilterByGender = (value) => {
    setFilterByGender(value);
  }

  const userFilters = dataUsers
  .filter((user) => {
    if(filterByGender === "all") {
      return true;
    } else {
    return user.gender === filterByGender;
    }
  })

  return (
    <>
    <div className="App">
      <h1>Directorio de personas</h1>
      <Filters 
      filterByGender={filterByGender}
      handleFilterByGender={handleFilterByGender}/>
      <UserList 
      users={userFilters}/>
      
    </div>
    </>
  );
}

export default App;
