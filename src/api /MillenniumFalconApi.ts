import {post} from "./api";
import {EmpireInformation} from "../types/empireInformation";

function postMillenniumFalconOdds(empireInformation: EmpireInformation) {
    return post<number>("", empireInformation);
}

export default postMillenniumFalconOdds;
