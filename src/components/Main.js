import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import firebase from '../firebase';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
function App() {
    console.log(firebase);
    const [datass, setData] = useState([]);
    async function Select(tabla) {
        const db = getFirestore();
        const coleccion = collection(db, tabla);

        const correos = await getDocs(coleccion);

        const listaDatos = correos.docs.map(doc => doc.data());
        console.log(listaDatos)
        setData(listaDatos);
        return listaDatos;

    }








    return (
        <div className="App">
            <header className="App-header bg-primary bg-gradient text-white">
                <div class="container px-4 text-center">
                    <h1 className="fw-bolder">Bienvenido a Feelings.com</h1>
                    <p className="lead">En este sitio podras saber como se sienten o que estan pensando personas de todo el mundo</p>
                    <a className="btn btn-lg btn-light" href="#section">Bajar a las publicaciones</a>
                </div>
            </header>
            <div id="section">
                <h2>Lista de Feelings</h2>
            </div>

            {datass.length == 0 ? <p>No hay publicaciones</p> : datass.map(dat =>
                <Card>
                    <Card.Header><b>Publicacion numero: {dat.id}</b></Card.Header>
                    <Card.Body style={{ textAlign: "left" }}>
                        <Card.Title>El usuario {dat.user}</Card.Title>
                        <Card.Text>
                            nos visita desde <b>{dat.lugar}</b> <br />
                            ha dicho que se siente <b>{dat.sentimiento}</b><br />
                            cuya descripcion es <b>{dat.descripcion}</b><br />
                        </Card.Text>
                    </Card.Body>
                </Card>


            )
            }

            <div>
                <button className="btn btn-success" onClick={()=>{
                    Select("feelings");
                }}>Recargar</button><br/>
                <Link className='btn btn-success' to="/feeling">Agregar feeling</Link>
            </div>

        </div>
    );
}



export default App;
