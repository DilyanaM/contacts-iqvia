import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import GET_CONTACTS from '../../graphql/queries/contactsList';

const List = () => {
  const { loading, error, data } = useQuery(GET_CONTACTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <Link to="/contacts/add">
        <button>New</button>
      </Link>
      {data.contacts.map(
        ({ id, name, email }: { id: string, name: string, email: string}) => (
          <div key={id}>
            <p>
              {name}: {email}
            </p>
            <Link to={`/contacts/${id}`}>
              <button>View more</button>
            </Link>
          </div>
        )
      )}
    </div>
  );
};

export default List;
