import React from 'react';
import { useHistory } from 'react-router-dom';

interface IProps {
    title: string
}

const Header: React.FC<IProps> = ({ title }) => {
    const history = useHistory()
    return (
        <div className="header" onClick={() => history.push('/')}><div className="header-text" data-testid="header" role="title">{title}</div></div>
    )
}

export default Header;