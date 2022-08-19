import { kFormatter } from 'utils/numbers';
import styled from 'styled-components';
import { COLORS } from 'consts/colors';
import { ReactComponent as StarIcon } from 'assets/svg/star.svg';
import { ReactComponent as ForkIcon } from 'assets/svg/forks.svg';
import { Fragment } from 'react';

const COLOR_MAP = {
  JavaScript: COLORS.L_YELLOW,
  TypeScript: COLORS.L_BLUE,
};

const Repository = (props) => {
  const { repository, onClick } = props;

  const {
    nameWithOwner,
    description,
    primaryLanguage,
    stargazerCount,
    forkCount,
  } = repository;

  const primaryLanguageName = primaryLanguage?.name;

  return (
    <RepositoryContainer onClick={() => onClick(repository)}>
      <RepositoryNameWithOwner>{nameWithOwner}</RepositoryNameWithOwner>
      <RepositoryDescription>{description}</RepositoryDescription>
      <RepositoryFooter>
        {primaryLanguageName && (
          <Fragment>
            <RepositoryLanguageCircle language={primaryLanguageName} />
            <span>{primaryLanguageName} </span>
          </Fragment>
        )}
        <span>
          <StarIcon />
          {kFormatter(stargazerCount)}{' '}
        </span>
        <span>
          <ForkIcon />
          {kFormatter(forkCount)}
        </span>
      </RepositoryFooter>
    </RepositoryContainer>
  );
};

export default Repository;

const RepositoryNameWithOwner = styled.div`
  color: ${COLORS.ACCENT_FG};
  &:hover {
    text-decoration: underline;
  }
`;

const RepositoryFooter = styled.div`
  margin-top: auto;
  font-size: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  white-space: pre-wrap;
  span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  svg {
    margin-right: 5px;
    margin-left: 5px;
  }
`;

const RepositoryLanguageCircle = styled.span`
  position: relative;
  top: 1px;
  display: inline-block;
  width: 10px;
  height: 10px;
  border: 1px solid var(--color-primer-border-contrast);
  border-radius: 50%;
  background-color: ${({ language }) => COLOR_MAP[language] || COLORS.RED};
  margin-right: 5px;
`;

const RepositoryDescription = styled.div`
  font-size: 12px;
  color: ${COLORS.FG_MUTED};
  margin-top: 10px;
`;

const RepositoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  width: 43%;
  height: 125px;
  background-color: ${COLORS.WHITE};
  border-color: ${COLORS.BORDER_DEFAULT};
  border-style: solid;
  border-width: 1px;
  border-radius: 6px;
  margin-bottom: 16px;
  margin-right: 16px;
  cursor: pointer;
`;
