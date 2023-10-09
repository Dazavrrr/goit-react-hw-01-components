import { Card, MainInfoBlock, ProfileImg, Username, UserTag, UserLocation, UserInfo, DetailInfo, InfoContent, InfoContentDetails } from './Profile.styled';

export const Profile = ({ items }) => {
  return (
    <Card className="profile">
      <MainInfoBlock className="description">
        <ProfileImg
          src={items.avatar}
          alt={`Avatar of ${items.username}`}
          className="avatar"
        />
        <Username className="name">{items.username}</Username>
        <UserTag className="tag">@{items.tag}</UserTag>
        <UserLocation className="location">{items.location}</UserLocation>
      </MainInfoBlock>

      <UserInfo className="stInfoContentInfoContentDetailsats">
        <DetailInfo>
          <InfoContent className="label">Followers</InfoContent>
          <InfoContentDetails className="quantity">{items.stats.followers}</InfoContentDetails>
        </DetailInfo>
        <DetailInfo>
          <InfoContent className="label">Views</InfoContent>
          <InfoContentDetails className="Quantity">{items.stats.views}</InfoContentDetails>
        </DetailInfo>
        <DetailInfo>
          <InfoContent className="label">Likes</InfoContent>
          <InfoContentDetails className="Quantity">{items.stats.likes}</InfoContentDetails>
        </DetailInfo>
      </UserInfo>
    </Card>
  );
};