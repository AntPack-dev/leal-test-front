import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';


interface itemBuyListProps {
  itemsSelected: any
}

export default function ItemBuyList({ itemsSelected }: itemBuyListProps) {
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };


  return (
    <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {itemsSelected.map((data: any, value: number) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem
            key={value}
            // secondaryAction={
            //   <Checkbox
            //     edge="end"
            //     onChange={handleToggle(value)}
            //     checked={checked.indexOf(value) !== -1}
            //     inputProps={{ 'aria-labelledby': labelId }}
            //   />
            // }
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${value + 1}`}
                  src={data?.url}
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={data?.name} />
              <h3>${data.price}</h3>
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}