import AnimatedBackground from "../AnimatedBackground/AnimatedBackground.jsx"
import { Form, Button } from "react-bootstrap"
import { useState, useEffect } from "react"
import db from "../../firebase/firebase";
import { doc, onSnapshot } from "firebase/firestore";


const AdminForm = () => {
    return (
        <div id="pageDiv">
            <AnimatedBackground content={<AdminFormFunc />} />
        </div>
    )
}

export default AdminForm

let aloha;

const AdminFormFunc = () => {
    const [data, setData] = useState()
    const fetchData = async () => {
        const docRef = doc(db, "user", "0AUUjjMKkiyYjZIgzFtT")
        console.log("response", docRef)
        onSnapshot(docRef, (doc) => {
            console.log(doc.data())
        })
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div>
            <p>Hello</p>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control placeholder="Name" value="Ivan" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}