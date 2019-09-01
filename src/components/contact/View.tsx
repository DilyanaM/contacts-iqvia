import React from "react";
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { Mutation } from 'react-apollo';
import GET_CONTACT from '../../graphql/queries/contact';
import DELETE_CONTACT from "../../graphql/mutations/deleteContact";

const Contact = (props: any) => {
  const { id } = props.match.params;
  const { loading, error, data } = useQuery(GET_CONTACT, {
    variables: { id },
  });
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { name, email } = data.contact;
  
  return (
    <div>
      <p>{name}</p>
      <p>{email}</p>
      <Link to={`/contacts/${id}/update`}>
        <button>Edit contact</button>
      </Link>
      <Mutation mutation={DELETE_CONTACT}>
        {(onMutate) => {
          const submit = () => onMutate({ variables: { id } });
          return <button onClick={submit}>Delete</button>
        }}
      </Mutation>
    </div>
  );
};

export default Contact;

