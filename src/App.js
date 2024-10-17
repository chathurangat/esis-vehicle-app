import {BrowserRouter, Route, Switch} from "react-router-dom";
import VehicleDetails from "./Vehicle/VehicleDetails";

function App() {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"} component={VehicleDetails}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
