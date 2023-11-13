import MainScreen from '../../pages/main-screen';

type AppScreenProps = {
    name: string;
    genre: string;
    releaseDate: string;
}

function App({name, genre, releaseDate}: AppScreenProps): JSX.Element {
    return (
        <MainScreen 
            name={name} 
            genre = {genre} 
            releaseDate = {releaseDate}
        />
    )
}

export default App;
