import { useDispatch } from "react-redux";
import "./App.css";
import Counter from "./components/Counter";
import RichTextEditor from "./components/RichTextEditor";
import UserDataForm from "./components/UserDataForm";
import { useEffect } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import { addFormData } from "./slices/formSlice";

function App() {
    const [formData, setFormData] = useLocalStorage("formData", null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(addFormData(formData))
    }, [])

    return (
        <div className="min-h-screen w-full p-8 relative flex gap-8">
            <div className="flex-1 flex flex-col gap-8">
                <Counter />
                <RichTextEditor setFormData={setFormData} />
            </div>
            <UserDataForm setFormData={setFormData} />
        </div>
    );
}

export default App;
