import { getFirestore,setDoc ,doc,collection,getDocs } from "firebase/firestore/lite";
import { Link } from "react-router-dom";
import firebase from '../firebase';

function InsertarFeeling() {
    console.log(firebase);
    async function insertar(lugar,sentimiento,descripcion,user){
        let db=getFirestore();
        console.log(db);
        Select("feelings").then(res=>{
            if(res.length==0){
                setDoc(doc(db, "feelings", "1"), {
                    id:1,
                    lugar:lugar,
                    sentimiento:sentimiento,
                    descripcion:descripcion,
                    user:user
                });
            }
            else{
                setDoc(doc(db, "feelings", (res.length+1).toString()), {
                    id:(res.length+1),
                    lugar:lugar,
                    sentimiento:sentimiento,
                    descripcion:descripcion,
                    user,user
                });
            }
        })

        
    }

    
    async function Select(tabla) {
        const db = getFirestore();
        const coleccion = collection(db, tabla);

        const correos = await getDocs(coleccion);

        const listaDatos = correos.docs.map(doc => doc.data());
        console.log(listaDatos)
        return listaDatos;

    }

    return (
        <div className="App">
            <header>
                <nav  class="navbar navbar-light bg-light  ">
                    <div class="container-fluid " style={{justifyContent:"center"}}>
                        <span class="navbar-brand mb-0 h1 " >¿Cómo te sientes hoy?</span>
                    </div>
                </nav>
            </header>
            <div style={{textAlign:"left"}} >
                <label for="user">Usuario:</label><br/>
                <input id="user" style={{width:'20%'}} placeholder="Asi te conoceran" maxLength={20}></input>
            </div>
            <div style={{textAlign:"left"}} >
                <label for="place">¿De que Lugar nos visitas?</label><br/>
                <input id="place" style={{width:'20%'}} placeholder="Lugar" maxLength={40}></input>
            </div>
            <br/>
            <div style={{textAlign:"left"}} >
                <label for="feeling">Escribe el sentimiento que mejor te describa</label><br/>
                <input id="feeling" placeholder="Sentimiento" maxLength={20}></input>
            </div>
            <br/>
            <div style={{textAlign:"left"}} >
                <label for="description">Descripción</label><br/>
                <input id="description" style={{width:'60%'}} placeholder="Los demas tienen que saberlo" ></input>
            </div>

            <div class=''>
                <div style={{paddingBottom:10}}>
                    <button class="btn btn-secondary" onClick={()=>{
                        let lugar=document.getElementById('place').value;
                        let sentimiento=document.getElementById('feeling').value;
                        let descripcion=document.getElementById('description').value;
                        let user=document.getElementById('user').value;

                        if(lugar==null || lugar=="" || user==null || user=="" || sentimiento==null || sentimiento=="" || descripcion=="" || descripcion==null){
                            alert("No es mi intención molestar pero debes llenar todos los campos");
                        }
                        else{
                            insertar(lugar,sentimiento,descripcion,user);
                            document.getElementById('place').value="";
                            document.getElementById('user').value="";
                            document.getElementById('feeling').value="";
                            document.getElementById('description').value="";
                        }
                       
                    }} >Asi me siento</button>
                </div>
                <div>
                    <Link  className="btn btn-secondary" to="/">Regresar</Link>

                </div>
                
            </div>

        </div>
    );
}

export default InsertarFeeling;
