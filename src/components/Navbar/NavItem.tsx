import React from 'react';

// TypeScript users only add this code
type NavProps = {
	title: string;
};

const NavItem: React.FC<{ title: string }> = ({ title }) => {
	return <div className='flex-1'>{title}</div>;
};

export default NavItem;
