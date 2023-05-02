import './App.css';
import FooterBar from "./FooterBar";
import SideBar from "./SideBar";
import {useEffect, useState} from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Dashboard from "./Dashboard";
import Frooger from "./Frogger";
import WordColour from "./WordColour";


const useLocalStorageState = (key, defaultValue) => {
    const [state, setState] = useState(() => {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : defaultValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, setState]
}

function App() {
    const [x, setX] = useLocalStorageState("x", -1)
    const [originalX, setOriginalX] = useState()
    const decX = () => {
        const newX = x - 1
        if (newX <= 0) {
            alert("Congratulations!")
            setX(originalX)
        } else {
            setX(newX)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://cgi.cse.unsw.edu.au/~cs6080/raw/data/score.json');
                const json = await response.json();
                if (x === -1) {
                    setX(json.score);
                }
                setOriginalX(json.score)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const router = createBrowserRouter([
        {
            path: "/home",
            element: <Dashboard val={x} resetX={() => setX(originalX)}/>,
        },
        {
            path: "/frogger",
            element: <Frooger decX={decX}/>,
        },
        {
            path: "/wordcolour",
            element: <WordColour decX={decX}/>,
        },
    ]);

    return (
        <div className={"container"}>

            <SideBar/>
            <div className={"right"}>
                <div className={"content"}>
                    <RouterProvider router={router}/>

                </div>
                <FooterBar/>
            </div>

        </div>
    );
}

export default App;
