import Image from 'next/image'

type Anime = {
  id_anime: number
  nom: string
  image: string
  synopsis: string
}

type Props = {
  animes: Anime[]
}

export default function AnimeList({ animes }: Props) {
  return (
    <ul className='flex flex-wrap gap-4 w-2/3'>
        {animes?.map((anime) => (
          <li key={anime.id_anime} className='overflow-scroll w-[14vw] h-[40vh] border border-slate-200 rounded-md p-4 bg-slate-800 hover:bg-slate-700 transition-all duration-300'>
              <a 
              className=""
              href={`/anime/${anime.id_anime}`}
              target='_blank'>
              <h1>{anime.id_anime} - {anime.nom}</h1>
              <Image 
              key={anime.id_anime}
              src={anime.image}
              alt={anime.nom}
              width={200}
              height={300}
              className="rounded-md"
              />
              <p className='text-white'>{anime.synopsis}</p>
            </a>
          </li>
        ))}
      </ul>
  )
}