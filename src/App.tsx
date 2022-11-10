import React, {useState} from "react";
import { Toaster } from "react-hot-toast";
import FileUploadComponent from "./components/fileUpload/FileUploadComponent";
import DisplayResultComponent from "./components/displayResult/DisplayResultComponent";

function App() {
    const [odds, setOdds] = useState<number | undefined>(undefined);

    return <div className="bg-[url('/public/images/death-star.jpeg')] h-screen flex flex-col">
        <Toaster
            toastOptions={{
                style: {
                    color: "white",
                    background: "#4A4F54",
                },
            }}
        />
        <h1 className="text-5xl font-bold underline text-white text-center pt-5">Millennium Falcon Challenge</h1>
        <FileUploadComponent setOdds={setOdds} />
        <DisplayResultComponent odds={odds} />
    </div>;
}
export default App;
