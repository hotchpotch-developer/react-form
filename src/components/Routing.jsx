import { Route, Routes } from "react-router-dom";
import AddLead from "../Lead/AddLead";

const Routing = () => {

    return (
        <Routes>
            <Route path="/" caseSensitive={false} element={<AddLead />} />
        </Routes>
    )
}

export default Routing;