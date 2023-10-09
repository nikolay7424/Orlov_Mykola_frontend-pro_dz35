import { useState } from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import PhoneBook from "./components/PhoneBook"
import PhoneInput from "./components/PhoneInput"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
    const [userArr, setUserArr] = useState([
        {
            firstName: "John",
            lastName: "Doe",
            phone: "+380671234567",
        },
        {
            firstName: "Elizabeth",
            lastName: "Smith",
            phone: "+380501234567",
        },
    ])
    const [userIndex, setUserIndex] = useState(0)

    return (
        <Router>
            <div className="container">
                <Navbar />
                <div className="content-wrapper">
                    <Routes>
                        <Route
                            path="/contacts"
                            element={
                                <PhoneBook
                                    userArr={userArr}
                                    setUserArr={setUserArr}
                                    userIndex={userIndex}
                                    setUserIndex={setUserIndex}
                                />
                            }
                        ></Route>
                        <Route
                            path="/add"
                            element={
                                <PhoneInput
                                    userArr={userArr}
                                    setUserArr={setUserArr}
                                />
                            }
                        ></Route>
                        <Route
                            path="/edit/:id"
                            element={
                                <PhoneInput
                                    userArr={userArr}
                                    setUserArr={setUserArr}
                                    isEdit={true}
                                    userIndex={userIndex}
                                />
                            }
                        ></Route>
                    </Routes>
                </div>
            </div>
        </Router>
    )
}

export default App
