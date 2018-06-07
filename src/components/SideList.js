import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import Avatar from '@material-ui/core/Avatar';

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
                <div className={classes.row} button>
                    <Avatar
                    alt="Adelle Charles"
                    src="static/media/User.png"
                    className={classNames(classes.avatar, classes.bigAvatar)}
                    />
                </div>
                <ListItemText primary={testname} style={{textAlign:"center"}} />
                <Divider />
                <ListItem button>
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="行车记录" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="充值" />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="登出" />
                </ListItem>
            </List>
        </div>;
    }
}

SideList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideList);