interface Props {
  character: any;
}

export default function Thumbnail({ character }: Props) {
  return (
    <div>
      <img src={character.imageUrl} alt="chr" loading="lazy"/>
      <p>{character.name}</p>
      <div>
        {character.films.length > 0 ? (
          <div>
            <p>Movies: </p>
            {character.films.map((film: string | null | undefined) => (
              <p>{film}</p>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>

      <div>
        {character.tvShows.length > 0 ? (
          <div>
            <p>TV Shows: </p>
            {character.tvShows.map((show: string | null | undefined) => (
              <p>{show}</p>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
