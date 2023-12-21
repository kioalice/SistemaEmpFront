import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListadoEmpleados from "./empleados/ListadoEmpleados";
import Navegar from "./plantilla/Navegar";
import AgregarEmpleados from "./empleados/AgregarEmpleados";
import EditarEmpleados from "./empleados/EditarEmpleados";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navegar />
        <Routes>
          <Route exact path="/" element={<ListadoEmpleados />} />
          <Route exact path="/agregar" element={<AgregarEmpleados />} />
          <Route exact path="/editar/:id" element={<EditarEmpleados />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
