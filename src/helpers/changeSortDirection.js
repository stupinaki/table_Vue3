import {sortDirections} from "@/data/headers";

export function changeSortDirection(currentDirection) {
    if(currentDirection === sortDirections.asc) {
        return sortDirections.des;
    }
    return sortDirections.asc;
}