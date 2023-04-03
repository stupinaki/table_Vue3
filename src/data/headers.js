export const sortDirections = {
    asc: "asc",
    des: "des",
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
        direction: '',// todo sort direction should not be part of table config
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
        specialStyle(content){ // todo should be a render function not just styles
            return `background-color: ${content}; border-radius: 50%; height: 2em;  width: 2em; margin: 0 auto`;
        },
    },
]





