import {sortDirections} from "@/data/headers";

export function sortColumn(rows, targetHeaderId, targetHeaderDirection) {
    const res = [...rows];

    if(targetHeaderDirection === sortDirections.ascending) {
        res.sort((row1, row2) => {
            const str1 = row1[targetHeaderId];
            const str2 = row2[targetHeaderId];
            return str1.localeCompare(str2);
        })
    }
    if(targetHeaderDirection === sortDirections.descending) {
        res.sort((row1, row2) => {
            const str1 = row1[targetHeaderId];
            const str2 = row2[targetHeaderId];
            return str2.localeCompare(str1);
        })
    }
    return res;
}

