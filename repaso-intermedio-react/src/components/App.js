import { useEffect, useState } from 'react';
import '../styles/App.scss';
import ls from '../services/local-storage';

const initialContactList = [
  {
    name: "Lola",
    lastname: "Martínez",
    phone: "603256289",
    email: "lmartinez@adalab.es"
  },
  {
    name: "Martha",
    lastname: "Houston",
    phone: "612435678",
    email: "mhouston@adalab.es"
  },
  {
    name: "Lillie",
    lastname: "Moore",
    phone: "632456789",
    email: "lillie@adalab.es"
  },
  {
    name: "Jane",
    lastname: "Norton",
    phone: "603256679",
    email: "janenorton@adalab.es"
  }
  ]

function App() {
// estados
const [filterName, setFilterName] = useState("");
const [newContactList, setNewContactList] = useState(ls.get("newContactList", initialContactList));
const [newName, setNewName] = useState("");
const [newLastName, setLastName] = useState("");
const [newPhone, setNewPhone] = useState("");
const [newEmail, setNewEmail] = useState("");

// useEffect(() => {
//   setNewContactList(ls.get("newContactList"))
// }, [])

useEffect(() => {
  ls.set("newContactList", newContactList);
}, [newContactList])


const handleInputSearch = (ev) => {
  setFilterName(ev.target.value);
}

const filteredNames = (str) => newContactList.filter(({name}) => {
  let personName = name.toLowerCase()
  const searchString = str.toString().toLowerCase()
  return personName.includes(searchString)
})

let filteredListName = filteredNames(filterName)

const handleChangeNewName = (ev) => {
  const valueWritten = ev.target.value;
  setNewName(valueWritten);
};

const handleChangeNewLastName = (ev) => {
  const valueWritten = ev.target.value;
  setLastName(valueWritten);
};

const handleChangeNewPhone = (ev) => {
  const valueWritten = ev.target.value;
  setNewPhone(valueWritten);
};

const handleChangeNewEmail = (ev) => {
  const valueWritten = ev.target.value;
  setNewEmail(valueWritten);
};

const addNewContact = (ev) => {
  ev.preventDefault();
  const contact = {name: newName, lastname: newLastName, phone: newPhone, email: newEmail};
  setNewContactList([...newContactList, contact]);
  setNewName("");
  setLastName("");
  setNewEmail("");
  setNewPhone("");
}

const renderDataList = (data) => {
  if(data.length === 0){
    return <p>{'Sorry, you have no contacts with the searched letter(s)'}</p>
  }

  return data.map((el, index) => {
    return (<li key={index} className="contact__item">
    <p className="contact__name">
      <label className="contact__label">Nombre:</label>{el.name}
    </p>
    <p className="contact__lastName">
      <label className="contact__label">Apellido:</label>{el.lastname}
    </p>
    <p className="contact__phone">
      <label className="contact__label">Teléfono:</label>
      <a href={`tel:${el.phone}`} title={`Pulsa aquí para llamar a ${el.name}`}>
        {el.phone}
      </a>
    </p>
    <p className="contact__mail">
      <label className="contact__label">Email:</label>
      <a href={`mailto:${el.email}`} title={`Pulsa aquí para escribir a ${el.name}`}>
        {el.email}
      </a>
    </p>
  </li>)
  })
}

  return (
    <div className="page">
      <header className="header">
        <h1 className="header__title">Mi agenda de contactos</h1>
        <form>
          <input
            className="header__search"
            autoComplete="off"
            type="search"
            name="search"
            value={filterName}
            placeholder="Filtrar contactos por nombre"
            onChange={handleInputSearch}
            onKeyUp={filteredNames}
          />
        </form>
      </header>

      <main>
        <ul className="contact__list">
          {filterName
            ? renderDataList(filteredListName)
            : renderDataList(newContactList)
          }
        </ul>
        <form className="new-contact__form">
          <h2 className="new-contact__title">Añade un nuevo contacto</h2>
          <input
            className="new-contact__input"
            type="text"
            name="name"
            id="name"
            placeholder="Nombre"
            value={newName}
            onChange={handleChangeNewName}
          />
          <input
            className="new-contact__input"
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Apellidos"
            value={newLastName}
            onChange={handleChangeNewLastName}
          />
          <input
            className="new-contact__input"
            type="phone"
            name="phone"
            id="phone"
            placeholder="Teléfono"
            value={newPhone}
            onChange={handleChangeNewPhone}
          />
          <input
            className="new-contact__input"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={newEmail}
            onChange={handleChangeNewEmail}
          />
          <input className="new-contact__btn" type="submit" value="Añadir" 
          onClick={addNewContact}/>
        </form>
      </main>
    </div>
  );
}

export default App;
