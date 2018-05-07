import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
    return (
        <Menu style={ { marginTop: '10px' } }>
            <Link route="/">
                <label className="item" >
                    Lokaverkefni
                </label>
            </Link>
            <Menu.Menu position="right">
                <Link route="/">
                    <label className="item">Ballot</label>
                </Link>
            </Menu.Menu>
        </Menu>
    );
};