import AnimatedBackground from "../AnimatedBackground/AnimatedBackground.jsx"
import { Form, Button } from "react-bootstrap"
import { useState, useEffect } from "react"
import { UserInfo } from "../MainPage/MainPage.jsx"
// import db from "../../firebase/firebase";
// import { doc, onSnapshot } from "firebase/firestore";


const AdminForm = () => {
    return (
        <div id="pageDiv">
            <AnimatedBackground content={<AdminFormFunc />} />
        </div>
    )
}

export default AdminForm

const AdminFormFunc = () => {
    // const [data, setData] = useState()
    // const fetchData = async () => {
    //     const docRef = doc(db, "user", "0AUUjjMKkiyYjZIgzFtT")
    //     console.log("response", docRef)
    //     onSnapshot(docRef, (doc) => {
    //         console.log(doc.data())
    //     })
    // }
    // useEffect(() => {
    //     fetchData();
    // }, [])
    const [name, setName] = useState(UserInfo().name)
    const [surname, setSurname] = useState(UserInfo().surname)
    const [city, setCity] = useState(UserInfo().city)
    const [country, setCountry] = useState(UserInfo().country)


    const nameChangeHandle = (e) => {
        setName(e.target.value)
        console.log(name)
    }

    const surnameChangeHandle = (e) => {
        setSurname(e.target.value)
    }

    const cityChangeHandle = (e) => {
        setCity(e.target.value)
    }

    const countryChangeHandle = (e) => {
        setCountry(e.target.value)
    }
    return (
        <div>
            <p>Hello, {name}</p>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control placeholder="Name" value={name} onChange={nameChangeHandle}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Surname</Form.Label>
                    <Form.Control placeholder="Surname" value={surname} onChange={surnameChangeHandle}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>City, Country</Form.Label>
                    <Form.Control placeholder="City" value={city} onChange={cityChangeHandle}/>
                    <Form.Control placeholder="Country" value={country} onChange={countryChangeHandle}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}