import {render} from "react-dom";
import './components/Counter.module.scss';
import { App } from "./App";

render(
    <App />,
    document.querySelector(".root")
);
