import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemText } from '@material-ui/core';
import { ListItemIcon } from '@material-ui/core';
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
        <ListItem>
            <Link className="link" to={ url }>
                <ListItemIcon className="arrow">
                    <ArrowForwardIosIcon htmlColor="#8f8f8f"/>
                </ListItemIcon>
                <ListItemText
                    className="link-text"
                    primary={ `[${ preview.Date }] | ${ preview.Title   }` }
                    secondary={ `by ${ preview.Author }` }
                />
            </Link>
        </ListItem>
    )
}

export default Preview;