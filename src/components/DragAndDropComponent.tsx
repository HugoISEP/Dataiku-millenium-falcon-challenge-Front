import React from "react";
import {EmpireInformation} from "../types/empireInformation";

type Props = {
    // eslint-disable-next-line no-unused-vars
    setEmpireInformation: (empireInformation: EmpireInformation) => void
}

function DragAndDropComponent({setEmpireInformation}: Props) {

    function convertFileToEmpireInformation(fileContent: any) {
        const empireInformationFile: EmpireInformation = fileContent;
        if (empireInformationFile.countdown && empireInformationFile.bounty_hunters) {
            setEmpireInformation(empireInformationFile);
        } else {
            // send Error message
        }
    }

    function onFileUpload(event: any) {
        const file = event.target.files[0]
        const fileReader = new FileReader();
        fileReader.readAsText(file, "UTF-8");
        fileReader.onload = () => {
            if (typeof fileReader.result === "string") {
                convertFileToEmpireInformation(JSON.parse(fileReader.result));
            }
        }
        fileReader.onerror = () => {
            // send Error message
        }
    }

    return <div className="flex justify-center items-center w-full h-full">
        <label htmlFor="dropzone-file"
            className="flex flex-col justify-center items-center w-3/4 h-3/4 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer bg-inherit">
            <div className="flex flex-col justify-center items-center pt-5 pb-6">
                <svg aria-hidden="true" className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or
                    drag and drop</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">JSON</p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" value="" accept="application/JSON" onChange={onFileUpload}/>
        </label>
    </div>
}
export default DragAndDropComponent;
