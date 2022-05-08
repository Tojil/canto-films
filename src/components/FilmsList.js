const filmsList = [
    'laRondeDeNuit1',
    'aksandari',
    'perlimplin',
    'laRondeDeNuit2',
    'samulnori2004',
    'impressionsDunSonge',
    'zarathoustra1',
    'zarathoustra2'
]

function FilmsList() {
    return (
        <ul>
            {filmsList.map((film) => (
                <li>{film}</li>
            ))}
        </ul>
    )
}

export default FilmsList