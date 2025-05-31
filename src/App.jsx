import './App.css'
import Counter from './features/counter/Counter'
import User from './features/user/User'
import Ejemplo from './components/Ejemplo'
// import CompConAxios from './components/CompConAxios'
// import ComponentPattern from './components/ComponentPattern'
// import { ComponenteCustomHooks } from './components/ComponenteCustomHooks'
// import { CompUseStateYUseEffect } from './components/CompUseStateYUseEffect'
// import ComponenteHijo from './components/ComponenteHijo';
// import { UserContext } from './context/UserContext'
// import CompUseRef from './components/CompUseRef'

function App() {
  return(
    <div>
  <Ejemplo>
  <h2>Hola devs</h2>
  <p>Ejemplo con composición</p>
</Ejemplo>
    </div>
  )
}

export default App

// return (
  // const user = {name: "Lauti", role: "Admin", age:25 }
//   // <UserContext.Provider value={user}>
//   //   <ComponenteHijo/>
//   // </UserContext.Provider>
//   <div>
//     {/* //     <ComponenteCustomHooks/> */}
//     {/* //     <CompUseStateYUseEffect/> */}
//     {/* //     <ComponentPattern nombre="Lautaro" edad={25} direccion="Salta, Capital">
//     //       <button>Llamar</button>
//     //     </ComponentPattern>
//     //     <ComponentPattern nombre="Galo" edad={19} direccion="Salta, Capital">
//     //       <button>Llamar</button>
//     //     </ComponentPattern>
//     //     <ComponentPattern nombre="Eugenia" edad={50} direccion="Cerrillos">
//     //       <button>Llamar</button>
//     //     </ComponentPattern> */}
//     {/* <CompUseRef/> */}
//     {/* <CompConAxios/> */}
//   </div>
//   )