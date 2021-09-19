import React, {   useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import clsx from 'clsx'
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';





const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    minWidth: 300
  },
  media: {
    height: 200,
    paddingTop: '56.25%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const MenuCard = ({ avatarName, title, img, aboutdish, remaining,handleAddItem,all }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);



  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  



  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {avatarName}
            </Avatar>
          }

          title={title}
          // subheader={date}
          // subheader={left}

        />

        <CardMedia
          className={classes.media}
          image={img} />


        <CardActions disableSpacing>
      
          Add to cart


          <IconButton onClick={()=>handleAddItem(all)}>
            <AddShoppingCartIcon />
          </IconButton>


          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{aboutdish}</Typography>

          </CardContent>
        </Collapse>
      </Card>
    </>
  )
}

export default MenuCard
