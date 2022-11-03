import React, {useEffect, useState} from "react";
import {EmpireInformation} from "./types/empireInformation";
import postMillenniumFalconOdds from "./api /MillenniumFalconApi";
import DragAndDropComponent from "./components/DragAndDropComponent";

function App() {
    const [empireInformation, setEmpireInformation] = useState<EmpireInformation | undefined>(undefined);
    const [odds, setOdds] = useState<number | undefined>(undefined);

    useEffect(() => {
        if (empireInformation) {
            postMillenniumFalconOdds(empireInformation).then(oddsResult => {
                setOdds(oddsResult);
            })
        }
    }, [empireInformation])

    return <div className="bg-[url('/public/images/death-star.jpeg')] h-screen flex flex-col">
        <h1 className="text-5xl font-bold underline text-white text-center pt-5">Millennium Falcon Challenge</h1>
        <div className="flex pt-10 min-h-[24rem]">
            <div className="flex-1 h-full">
                <DragAndDropComponent setEmpireInformation={setEmpireInformation} />
            </div>
            <div className="flex-1 h-full flex justify-center items-center">
                {empireInformation ? <pre className="text-white h-3/4 w-full overflow-y-auto">{JSON.stringify(empireInformation, null, 3)}</pre>
                    : <p className="text-white text-3xl text-center">No content loaded</p>
                }
            </div>
        </div>
        <div className="h-full flex justify-center items-center">
            {odds && <h1 className="text-white text-7xl">{`${odds} %`}</h1>}
        </div>
    </div>;
}

export default App;
