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
    fetchArtistProfile(accessToken, artistId)
      .then((json) => dispatch(receiveArtistInfo(json)))
      .catch((err) => {
        console.error(err);
        dispatch(receiveArtistInfoError());
      });
  }, []);

  if (!accessToken) {
    return "Loading...";
  }


  console.log(artist)
  return <div>TODO</div>
};

export default ArtistRoute;
