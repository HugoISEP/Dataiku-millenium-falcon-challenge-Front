import React, {useEffect, useState} from "react";
import toast from "react-hot-toast";
import {EmpireInformation} from "../../types/empireInformation";
import postMillenniumFalconOdds from "../../api /MillenniumFalconApi";
import FileInputComponent from "./FileInputComponent";

type Props = {
    setOdds: Function
}

function FileUploadComponent({setOdds}: Props) {
    const [empireInformation, setEmpireInformation] = useState<EmpireInformation | undefined>(undefined);

    useEffect(() => {
        if (empireInformation) {
            postMillenniumFalconOdds(empireInformation).then(oddsResult => {
                setOdds(oddsResult);
            }).catch(error => toast.error(`Error when getting odds: ${error.message}`))
        }
    }, [empireInformation])

    return <div className="flex pt-10 min-h-[24rem]">
        <div className="flex-1 h-full">
            <FileInputComponent setEmpireInformation={setEmpireInformation} />
        </div>
        <div className="flex-1 h-full flex justify-center items-center">
            {empireInformation ? <pre className="text-white h-3/4 w-full overflow-y-auto">{JSON.stringify(empireInformation, null, 3)}</pre>
                : <p className="text-white text-3xl text-center">No content loaded</p>
            }
        </div>
    </div>
}
export default FileUploadComponent;
