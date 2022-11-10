import React from "react";

type Props = {
  odds: number | undefined
};

function DisplayResultComponent({odds}: Props) {

    return <div className="h-full flex justify-center items-center">
        {odds && <h1 className="text-white text-7xl">{`${odds} %`}</h1>}
    </div>;
}
export default DisplayResultComponent;
