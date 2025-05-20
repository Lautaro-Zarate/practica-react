import './App.css'
import ComponentPattern from './components/ComponentPattern'
// import { ComponenteCustomHooks } from './components/ComponenteCustomHooks'
// import { CompUseStateYUseEffect } from './components/CompUseStateYUseEffect'

function App() {
  return (
      <div>
          {/* <ComponenteCustomHooks/> */}
          {/* <CompUseStateYUseEffect/> */}
          <ComponentPattern nombre="Lautaro" edad={25} direccion="Salta, Capital">
            <button>Llamar</button>
          </ComponentPattern>
          <ComponentPattern nombre="Galo" edad={19} direccion="Salta, Capital">
            <button>Llamar</button>
          </ComponentPattern>
          <ComponentPattern nombre="Eugenia" edad={50} direccion="Cerrillos">
            <button>Llamar</button>
          </ComponentPattern>
      </div>
  )
}

export default App
