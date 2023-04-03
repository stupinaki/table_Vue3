import {sortDirections} from "@/data/headers";

// todo it is not targetHeaderId, it is just property name
export function sortColumn(rows, targetHeaderId, targetHeaderDirection) {
    const res = [...rows];

    // todo remove conditions and remind how sorting function works
    if(targetHeaderDirection === sortDirections.asc) {
        res.sort((row1, row2) => {
            const str1 = row1[targetHeaderId];
            const str2 = row2[targetHeaderId];
            return str1.localeCompare(str2);
        })
    }
    if(targetHeaderDirection === sortDirections.des) {
        res.sort((row1, row2) => {
            const str1 = row1[targetHeaderId];
            const str2 = row2[targetHeaderId];
            return str2.localeCompare(str1);
        })
    }
    return res;
}
