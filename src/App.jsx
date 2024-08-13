import cardSection from './data';
import Card from './Card';

const App = () => {
    return (
        <div className="flex flex-col items-center p-6 w-[80%] mx-auto">
            <header className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-4">{cardSection.title}</h1>
                <p className="text-lg">{cardSection.description}</p>
            </header>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cardSection.cards.map((item) => (
                    <Card
                        key={item.id}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default App;
