import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import RedditIcon from "@mui/icons-material/Reddit";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)`
  background-color: #eee;
`;

const StyledTypography = styled(Typography)`
  display: flex;
  justify-content: center;
  font-size: 20px;
`;

const StyledBox = styled(Box)`
  display: flex;
  justify-content: center;
`;

const Img = styled("img")`
  height: 40px;
`;

const StyledAnchor = styled("a")`
  text-decoration: none;
  color: #b3b7bd;
`;

const StyledReddit = styled(RedditIcon)`
  font-size: 27px;
  margin-right: 10px;
  color: #ff4500;
`;

const StyledFaceBook = styled(FacebookIcon)`
  font-size: 27px;
  margin-right: 10px;
  color: #4267b2;
`;

const StyledTwitter = styled(TwitterIcon)`
  font-size: 27px;
  margin-right: 10px;
  color: #1d9cf0;
`;

function ExchangeDetails({ exchangeDetails }) {
  const { name, country, trust_score_rank, facebook_url, reddit_url, twitter_handle, image, year_established, url } =
    exchangeDetails;
  return (
    <StyledCard>
      <CardContent>
        <StyledBox>
          <Img src={image} alt="Logo" />
        </StyledBox>
        <Typography color="text.secondary" gutterBottom>
          Exchange: {name}
        </Typography>
        <Typography color="text.secondary" gutterBottom>
          Year: {year_established}
        </Typography>

        <Typography color="text.secondary" gutterBottom>
          Country: {country}
        </Typography>
        <Typography color="text.secondary" gutterBottom>
          Website:{" "}
          <StyledAnchor target="_blank" href={url}>
            {name}
          </StyledAnchor>
        </Typography>
        <Typography color="text.secondary" gutterBottom>
          Rank: {trust_score_rank}
        </Typography>
        <StyledTypography color="text.secondary" gutterBottom>
          {reddit_url ? (
            <StyledAnchor target="_blank" href={reddit_url}>
              <StyledReddit />
            </StyledAnchor>
          ) : null}
          {facebook_url ? <StyledFaceBook /> : null}
          {twitter_handle ? <StyledTwitter /> : null}
        </StyledTypography>
      </CardContent>
    </StyledCard>
  );
}

export default ExchangeDetails;
