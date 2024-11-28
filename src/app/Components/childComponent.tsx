const ChildComponent = (props: any) => {
    return (
        <div className="mb-8 p-4 border rounded shadow-lg flex flex-row justify-center gap-x-8">
            <div className="text-xl text-center">
                <div className="font-bold">Name: {props.name}</div>
                <div>Age: {props.age}</div>
                <div>Profession: {props.profession}</div>
                <div>Favorite Dish: {props.Favoritedish}</div>
            </div>
        </div>
    );
};
export default ChildComponent;
