import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { setActiveSong, playPause } from '../redux/features/playerSlice';
// import { useSongDetailsQuery } from '../redux/services/shazamCore';

const SongDetails = () => {
  const dispatch = useDispatch();
  const { songid } = useParams();
  const { setActiveSong, isPlaying } = useSelector((state) => state.player);
  const { data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery({ songid });

  console.log(songid);

  return (
    <div className="flex flex-col">
      {/* <DetailsHeader artistID={artistID} songData={songData} /> */}

      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lyrics:</h2>

        <div className="mt-5">
          {songData?.sections[1].type === 'Lyrics'
          ? songData?.sections[1].text.map((Line, i) => (
            <p className="tex-gray-400 text-base my-1">{Line}</p>
          )) : <p>Sorry, No lyrics Found!</p>}
        </div>
         
      </div>
    </div>
  );

//   return <div>SongDetails</div>;
};

export default SongDetails;
