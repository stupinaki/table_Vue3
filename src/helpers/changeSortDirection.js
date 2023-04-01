import {sortDirections} from "@/data/headers";

export function changeSortDirection(currentDirection) {
    if(currentDirection === sortDirections.ascending) {
        return sortDirections.descending;
    }
    return sortDirections.ascending;
}