import React from "react";
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import Display from "./Display";
import Form from "./Form";


function App() {

const url = "https://mern-app-cp.herokuapp.com"

const [cars, setCars] = React.useState([])

const emptyCar = {
  year: "",
  make:"",
  model:"",
  img:"",
  description:""

}

const [selectedCar, setSelectedCar] = React.useState (emptyCar)

const getCars = () => {
fetch(url + "/cars/")
.then((response) => response.json())
.then ((data) => {
  setCars(data)
})
}


React.useEffect(() => {
  getCars()
}, [])


const handleCreate = (newCar) => {
  fetch(url + "/cars/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newCar)
  })
  .then(() => getCars(2))
}


const handleUpdate = (car) => {
  fetch(url + "/cars/" + car._id, {
    method: "PUT",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(car)
  })
  .then(() => getCars())
}


const selectCar =(car) => {
  setSelectedCar(car)
}


const deleteCar = (car) => {
  fetch(url + "/cars/" + car._id, {
    method: "DELETE"
  })
  .then(() => {
    getCars()
  })
}




  return (
    <div className="App">

      <hr />

      <div className="logo-header">
      <img className="logo-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI-7X6EkLzO-sY3zi8Bivuma5TNJP9QAiO2g&usqp=CAU" alt="car-logo"/>

      <h1 className="header">Classic Muscle Cars</h1>

      <img className="logo-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI-7X6EkLzO-sY3zi8Bivuma5TNJP9QAiO2g&usqp=CAU" alt="car-logo"/>
      </div>

      <Link to="/create">
        <button className='create'>Muscle Cars: Add 'Em</button>
      </Link>

      <hr />
      

      <main>

        <Switch>

        <Route 
        exact 
        path="/" 
        render={(rp) => (
          <Display {...rp}
          cars={cars}
          selectCar={selectCar}
          deleteCar={deleteCar}
          />
        )} 
        />

        
        <Route
        exact
        path="/create"
        render={(rp) => (
          <Form
            {...rp}
            label="create"
            car={emptyCar}
            handleSubmit={handleCreate}
          />
        )}
        />


          <Route  
          exact 
          path="/edit"
          render= {(rp) => (
            <Form  
            {...rp}
            label="update"
            car={selectedCar}
            handleSubmit={handleUpdate}
            />
          )}
          />



        </Switch>

      </main>
      
      
    </div>
  );
}

export default App;
