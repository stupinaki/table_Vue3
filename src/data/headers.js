export const sortDirections = {
    ascending: "ascending",
    descending: "descending",
    empty: ""
}
export const headers = [
    {
        title: 'Имя',
        id: 'firstName',
        direction: '',
        visible: true,
    },
    {
        title: 'Фамилия',
        id: 'lastName',
        direction: '',
        visible: true,
    },
    {
        title: 'Описание',
        id: 'about',
        direction: '',
        visible: true,
        //todo
        // specialStyle() {
        //     return "overflow: hidden; max-height: 3rem; -webkit-line-clamp: 2;display: -webkit-box; -webkit-box-orient: vertical;"
        // }
    },
    {
        title: 'Цвет глаз',
        id: 'eyeColor',
        direction: '',
        visible: true,
        specialStyle(content){
            return `background-color: ${content}; border-radius: 50%; height: 2em;  width: 2em; margin: 0 auto`;
        },
    },
]





