import React from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './List.css';

const ContactsList = (props: any) => {
  return (
    <List>
      {!!props.contacts.length && props.contacts.map(
        ({ id, name, email }: { id: string, name: string, email: string}) => (
          <ListItem key={id} className="contact-item">
            <ListItemText
              primary={name}
              secondary={email}
            />
            <ListItemSecondaryAction>
              <Link to={`/contacts/${id}`}>
                <IconButton edge="end" aria-label="delete">
                  <ArrowForwardIosIcon />
                </IconButton>
              </Link>
            </ListItemSecondaryAction>
          </ListItem>
        )
      )}
    </List>
  );
};

export default ContactsList;
