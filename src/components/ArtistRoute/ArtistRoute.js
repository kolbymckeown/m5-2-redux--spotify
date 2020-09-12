import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchArtistProfile } from "../../helpers/api-helpers";
import {
  receiveArtistInfo,
  requestArtistInfo,
  receiveArtistInfoError,
} from "../../actions";
import styled from "styled-components";

const ArtistRoute = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.auth.token);

  const { artistId } = useParams();

  const artist = useSelector((state) => state.artists.currentArtist);
  console.log(artist);

  React.useEffect(() => {
    dispatch(requestArtistInfo());
    console.log(accessToken);
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

  return (
    <Wrapper>
      <InfoCont>
        <div>
          <ArtistImg src={artist.images[0].url} />
        </div>
        <div
          style={{
            fontSize: "45px",
            marginBottom: "15px",
            marginTop: "-50px",
            fontWeight: "bold",
          }}
        >
          {artist.name}
        </div>
        <div>
          <p style={{ fontSize: "22px", marginBottom: "0" }}>Tags</p>
          {artist.genres.slice(0, 2).map((genre) => {
            return <span>{genre + " "}</span>;
          })}
        </div>
        <div>
          <p style={{ fontSize: "22px" }}>
            Followers: {artist.followers.total}
          </p>
        </div>
      </InfoCont>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

const InfoCont = styled.div`
  margin-top: 8%;
`;

const ArtistImg = styled.img`
  height: 275px;
  border-radius: 50%;
`;

export default ArtistRoute;
