import PropTypes from 'prop-types';
import { ListItem, Text, Button } from './ContactListItem.styled';

export const ContactListItem = ({ id, name, number, deleteContact }) => {
  return (
    <ListItem>
      <Text>
        {name}: {number}
      </Text>
      <Button type="button" onClick={() => deleteContact(id)}>
        Delete Contact
      </Button>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
