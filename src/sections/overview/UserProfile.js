import styled from 'styled-components';
import { COLORS } from 'consts/colors';
import { kFormatter } from 'utils/numbers';
import { ReactComponent as FollowersIcon } from 'assets/svg/followers.svg';
import { ReactComponent as CompanyIcon } from 'assets/svg/company.svg';
import { ReactComponent as EmailIcon } from 'assets/svg/email.svg';
import { ReactComponent as TwitterIcon } from 'assets/svg/twitter.svg';
import { SIDE_BAR_WIDTH } from 'consts/style';

const UserProfile = (props) => {
  const { userData } = props;

  const {
    login,
    name,
    twitterUsername,
    email,
    company,
    avatarUrl,
    followers,
    following,
  } = userData;

  return (
    <UserProfileContainer>
      <div>
        <ProfileImg
          alt="Avatar"
          width="260"
          height="260"
          className="avatar avatar-user width-full border color-bg-default"
          src={avatarUrl}
        />
      </div>
      <UserProfileNameContainer>
        <ProfileFullName>{name}</ProfileFullName>
        <ProfileLogin>{login}</ProfileLogin>
      </UserProfileNameContainer>

      <UserProfileButton>Follow</UserProfileButton>
      <FollowersContainer>
        <FollowersItem>
          <FollowersIcon />{' '}
          <TextBold>{kFormatter(followers.totalCount ?? 0)}</TextBold> followers
        </FollowersItem>
        <span> · </span>
        <FollowersItem>
          <TextBold>{kFormatter(following.totalCount ?? 0)}</TextBold> following
        </FollowersItem>
      </FollowersContainer>
      <ProfileContactDetails>
        {company && (
          <ProfileContactDetailsItem>
            <CompanyIcon />
            <ProfileContactItem fontWeight="600">{company}</ProfileContactItem>
          </ProfileContactDetailsItem>
        )}
        {email && (
          <ProfileContactDetailsItem>
            <EmailIcon />
            <ProfileContactItem href={email}>{email}</ProfileContactItem>
          </ProfileContactDetailsItem>
        )}

        {twitterUsername && (
          <ProfileContactDetailsItem>
            <TwitterIcon />
            <ProfileContactItem href={`https://twitter.com/${twitterUsername}`}>
              @{twitterUsername}
            </ProfileContactItem>
          </ProfileContactDetailsItem>
        )}
      </ProfileContactDetails>
    </UserProfileContainer>
  );
};

export default UserProfile;
const ProfileContactItem = styled.a`
  color: ${COLORS.FG_DEFAULT};
  text-decoration: none;
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
  &:hover {
    color: ${COLORS.ACCENT_FG};
    text-decoration: underline;
  }
`;
const ProfileContactDetails = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 18px;
  padding: 0;
  list-style: none;
`;

const ProfileContactDetailsItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
  padding: 0;

  svg {
    fill: ${COLORS.FG_MUTED};
    margin-right: 8px;
    width: 16px;
  }
`;

const FollowersItem = styled.span`
  cursor: pointer;
  display: inline-flex;
  align-items: center;

  &:hover {
    color: ${COLORS.ACCENT_FG};
  }
  svg {
    fill: currentColor;
    margin-right: 5px;
  }
`;

const FollowersContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: ${COLORS.FG_MUTED};
  font-size: 14px;
  white-space: pre-wrap;
  margin-top: 15px;
`;

const TextBold = styled.span`
  font-weight: 600 !important;
`;

const UserProfileButton = styled.button`
  margin: 0;
  overflow: visible;
  padding: 5px 16px;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  vertical-align: middle;
  text-align: center;
  cursor: pointer;
  border: 1px solid ${COLORS.BTN_BORDER};
  border-radius: 6px;
  color: ${COLORS.BTN_COLOR};
  background-color: ${COLORS.BTN_BG};
  box-shadow: ${COLORS.BTN_SHADOW},
    ${COLORS.BTN_INSET_SHADOW} inset 0 1px 0 rgba(255, 255, 255, 0.25);
  width: 100%;
  &:hover {
    background-color: ${COLORS.BTN_HOVER_BG};
    border-color: ${COLORS.BTN_HOVER_BORDER};
  }
`;

const UserProfileContainer = styled.aside`
  display: flex;
  flex-direction: column;
  width: ${SIDE_BAR_WIDTH}px;
  min-width: ${SIDE_BAR_WIDTH}px;
  color: ${COLORS.FG_DEFAULT};
`;

const UserProfileNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 16px;
  padding-bottom: 16px;
`;

const ProfileFullName = styled.div`
  font-size: 24px;
  line-height: 24px;
  font-weight: 600;
  color: ${COLORS.FG_DEFAULT};
`;

const ProfileLogin = styled.div`
  font-size: 20px;
  line-height: 20px;
  color: ${COLORS.FG_MUTED};
`;

const ProfileImg = styled.img`
  border-radius: 50%;
  height: auto;
`;
