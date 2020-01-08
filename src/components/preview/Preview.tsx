import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemText, ListItemIcon, Typography } from '@material-ui/core';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PersonIcon from '@material-ui/icons/Person';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { IPreview } from '../../interfaces';
import './Preview.css';

interface PreviewProps {
    preview: IPreview
}

const Preview : React.FC<PreviewProps> = (props: PreviewProps) => {
    const { preview } = props;
    const url = `/articles/${ preview.Id }`;
    
    return (
        <React.Fragment>
            <ListItem>
                <Link className="link" to={ url }>
                    <ListItemIcon className="arrow">
                        <ArrowForwardIosIcon htmlColor="#8f8f8f"/>
                    </ListItemIcon>
                    <ListItemText
                        className="link-text"
                    >
                        <React.Fragment>
                            <Typography className="title">
                                { preview.Title }
                            </Typography>
                            <Typography className="author">
                                <PersonIcon className="icon"/>
                                { preview.Author }
                            </Typography>
                            <Typography className="date">
                                <CalendarTodayIcon className="icon"/>
                                { preview.Date }
                            </Typography>
                        </React.Fragment>
                    </ListItemText>
                </Link>
            </ListItem>
            <br />
        </React.Fragment>
        
    )
}

export default Preview;