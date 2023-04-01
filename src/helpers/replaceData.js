
export function replaceData(oldArr, newData) {
    const newArr = [...oldArr];
    const targetRowIndex = newArr.findIndex(el => el.id === newData.id);
    newArr.splice(targetRowIndex, 1, newData);
    return newArr;
}