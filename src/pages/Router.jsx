import { Routes, Route} from 'react-router';
import Layout from "./Layout";
import About from "./About";
import Catalogo from "./Catalogo";
import Detail from "./Detail";
import MiDiseno from "./MiDiseno";

const RouterDefinition = () => {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route index element={<Catalogo/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/pokemon/:id" element={<Detail />} />
                <Route path="/midiseno" element={<MiDiseno />} />
            </Route>
        </Routes>
    );
}

export default RouterDefinition;