import ChildComponent from "./childComponent";

const ParentComponent = () => {
   
    const people = [
        { name: "MARIYA", age: 20, profession: "Software Developer", favoritedish: "Microni" },
        { name: "ALI", age: 30, profession: "Data Scientist", favoritedish: "Pizza" },
        { name: "AYESHA", age: 28, profession: "Product Manager", favoritedish: "Pasta" },
    ];

    return (
        <div className="mt-10 hover:shadow-lg p-4 transition duration-300">
            {/* Array ko map karte hue ChildComponent render karein */}
            {people.map((person, index) => (
                <ChildComponent
                    key={index}
                    name={person.name}
                    age={person.age}
                    profession={person.profession}
                    Favoritedish={person.favoritedish}
                />
            ))}
        </div>
    );
};

export default ParentComponent;
