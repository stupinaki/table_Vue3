
export function chunk(array, size){
    const pages = [];
    for(let i = 0; i < array.length; i += size){
        const page = array.slice(i, i + size);
        pages.push(page);
    }
    return pages;
}

