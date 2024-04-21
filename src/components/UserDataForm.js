import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import useLocalStorage from "../hooks/useLocalStorage";
import { useDispatch } from "react-redux";
import { addFormData } from "../slices/formSlice";

const UserDataForm = ({ setFormData }) => {
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    function generateUserId() {
        return Math.random().toString(36).substring(2, 9); // Generate a random alphanumeric string
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const userId = generateUserId();

        dispatch(addFormData(JSON.stringify({ userId, name, address, email, phone })));
        setFormData({ userId, name, address, email, phone });

        setName("");
        setAddress("");
        setEmail("");
        setPhone("");
    };


    return (
        <div className="flex justify-center items-center">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col border border-gray-300 rounded-lg shadow-xl px-8 py-10 w-[30rem]"
            >
                <h1 className="text-3xl font-bold mb-4 self-center">
                    User Data Form
                </h1>
                <TextField
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fullWidth
                    margin="normal"
                    placeholder="Enter your name"
                    required
                />
                <TextField
                    label="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    multiline
                    rows={4}
                    fullWidth
                    margin="normal"
                    placeholder="Enter your address"
                    required
                />
                <TextField
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    margin="normal"
                    placeholder="Enter your email"
                    required
                />
                <TextField
                    label="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    fullWidth
                    margin="normal"
                    placeholder="Enter your phone number"
                    required
                />
                <Button variant="contained" size="large" type="submit" color="success" className="mt-[1rem!important]">
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default UserDataForm;
