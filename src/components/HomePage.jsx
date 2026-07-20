import './HomePage.css'

function HomePage() {

  return (
    <div>

    <p>
    Half unhinged sci-fi comedy, half 3 AM existential crisis
    </p>

    <div className="characters">

    <div>
    <h3>Rick</h3>
    <img
    src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    alt="Rick"
    />
    </div>

    <div>
    <h3>Morty</h3>
    <img
    src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
    alt="Morty"
    />
    </div>
    </div>

    <p>
    Picture a mind-bending sci-fi fever dream colliding head-on with a late-night panic attack about the meaning of life. 
    </p>

    <div>
      <h2>Where to Watch</h2>
      <ul className="streamingOptions">
        <li>
            <a href="https://www.hulu.com" target="_blank" rel="noreferrer">
            <img src=" https://www.google.com/s2/favicons?domain=hulu.com&sz=128" alt="Hulu"/>
            </a>
        </li>
        <li>
            <a href="https://www.hbomax.com/" target="_blank" rel="noreferrer">
            <img src="https://www.google.com/s2/favicons?domain=max.com&sz=128" />
            </a>
        </li>
      </ul>  
    </div>


    </div>
  )
}

export default HomePage