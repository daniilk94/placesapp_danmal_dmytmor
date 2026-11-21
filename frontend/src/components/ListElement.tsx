type ListElementProps = {
    name: string;
};
const ListElement = ({ name }: ListElementProps) => {
    return (
        <li>
            <button>{name}</button>
        </li>
    );
};

export default ListElement;
