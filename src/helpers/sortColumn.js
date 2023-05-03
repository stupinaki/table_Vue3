import {sortDirections} from "@/data/headers";

export function sortColumn(rows, targetHeaderId, targetHeaderDirection) {
    const res = [...rows];
    res.sort((row1, row2) => {
        const str1 = row1[targetHeaderId];
        const str2 = row2[targetHeaderId];
        return targetHeaderDirection === sortDirections.asc
            ? str1.localeCompare(str2)
            : str2.localeCompare(str1);
    })
    return res;
}
