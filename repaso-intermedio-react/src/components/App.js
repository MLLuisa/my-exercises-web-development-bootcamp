import { useState } from 'react';
import '../styles/App.scss';

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
const [newContact, setNewContact] = useState("");

const handleInputSearch = (ev) => {
  setFilterName(ev.target.value);
}

const filteredNames = (str) => initialContactList.filter(({name}) => {
  let personName = name.toLowerCase()
  const searchString = str.toString().toLowerCase()
  return personName.includes(searchString)
})

let filteredListName = filteredNames(filterName)

const addNewContact = (ev) => {
  ev.preventDefault();
  const contact = {name: newContact, lastname: newContact, phone: newContact, email:newContact};
  const addToList = [...initialContactList,contact]
  setNewContact(addToList);
}

const renderDataList = (data) => {
  if(data.length === 0){
    return <p>Sorry, you have no contacts with that letter</p>
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
            : renderDataList(initialContactList)
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
          />
          <input
            className="new-contact__input"
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Apellidos"
          />
          <input
            className="new-contact__input"
            type="phone"
            name="phone"
            id="phone"
            placeholder="Teléfono"
          />
          <input
            className="new-contact__input"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
          <input className="new-contact__btn" type="submit" value="Añadir" onClick={addNewContact}/>
        </form>
      </main>
    </div>
  );
}

export default App;
