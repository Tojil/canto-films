const filmsList = [
    'La Ronde de Nuit1',
    'Aksandari',
    'Perlimplin avec Belisa en son Jardin',
    'La Ronde de Nuit 2',
    'Samulnori 2004',
    `Impressions d'un Songe`,
    'Ainsi parla Zarathoustra 1',
    'Ainsi parla Zarathoustra 2'
]

function FilmsList() {
    return (
        <ul>
            {filmsList.map((film, index) => (
                <li key={`${film}-${index}`}>{film}</li>
            ))}
        </ul>
    )
}

export default FilmsList