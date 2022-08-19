import { useQuery } from '@apollo/client';
import { FIND_ISSUE_BY_ID } from 'services/github-schema';
import { useNavigate, useParams } from 'react-router-dom';
import { ROUTES } from 'consts/app';
import { dateToView } from 'utils/date';

const Issue = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { loading, error, data } = useQuery(FIND_ISSUE_BY_ID, {
    variables: {
      owner: params.owner,
      name: params.name,
      number: Number(params.number),
    },
  });

  if (loading) {
    return 'Loading...';
  }

  if (error) {
    return `Error! ${error}`;
  }

  const { bodyHTML, title, number, author, createdAt } = data.repository.issue;

  return (
    <div>
      <button onClick={() => navigate(ROUTES.HOME)}>Go to home page</button>
      <h3>{title}</h3>
      <h4>Issue: #{number}</h4>
      <h5>
        Created by: {author.login} on {dateToView(createdAt)}
      </h5>
      <h5>Issue body:</h5>
      {/* Just in test purposes */}
      <div dangerouslySetInnerHTML={{ __html: bodyHTML }} />
    </div>
  );
};

export default Issue;
