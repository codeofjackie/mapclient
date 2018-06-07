import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import ListIcon from '@material-ui/icons/List';
import Avatar from '@material-ui/core/Avatar';
import user from '../static/images/User.png';

const styles = {
    row: {
        display: 'flex',
        justifyContent: 'center',
    },
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        width: 60,
        height: 60,
    },
    list: {
        width: 250,
    }
}

class SideList extends React.Component {
    render() {

        const { classes } = this.props;
        const testname = "fencer用户";

        return <div className={classes.list}>
            <List>
                <ListItem button>
                <Avatar
                alt="Adelle Charles"
                src={user}
                button
                className={classNames(classes.avatar, classes.bigAvatar)}
                />
                <ListItemText primary={testname} style={{textAlign:"center"}} />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemIcon>
                        <ListIcon />
                    </ListItemIcon>
                    <ListItemText primary="行车记录" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <AttachMoneyIcon />
                    </ListItemIcon>
                    <ListItemText primary="充值" />
                </ListItem>
                <Divider />
            </List>
        </div>;
    }
}

SideList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideList);