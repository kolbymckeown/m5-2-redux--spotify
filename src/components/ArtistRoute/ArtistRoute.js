import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchArtistProfile } from "../../helpers/api-helpers";
import {
  receiveArtistInfo,
  requestArtistInfo,
  receiveArtistInfoError,
} from "../../actions";

const ArtistRoute = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.auth.token);

  const { artistId } = useParams();

  const artist = useSelector((state) => state.artists.currentArtist);
  console.log(artist);

  
  React.useEffect(() => {
    dispatch(requestArtistInfo());
    console.log(accessToken)
    fetchArtistProfile(accessToken, artistId)
      .then((json) => dispatch(receiveArtistInfo(json)))
      .catch((err) => {
        console.error(err);
        dispatch(receiveArtistInfoError());
      });
  }, [accessToken]);
  
  if (!accessToken) {
    return "Loading...";
  }


return <div>{artist.name}</div>
};

export default ArtistRoute;
