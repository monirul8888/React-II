import React from 'react';

const Sidebar = () => {
    return (
        <aside className="w-64 bg-gray-100 min-h-64 p-5 shadow-md">
            <nav className="flex flex-col gap-3">
                <p className="cursor-pointer hover:text-blue-500">Side Nav- 1</p>
                <p className="cursor-pointer hover:text-blue-500">Side Nav- 2</p>
                <p className="cursor-pointer hover:text-blue-500">Side Nav- 3</p>
                <p className="cursor-pointer hover:text-blue-500">Side Nav- 4</p>
                <p className="cursor-pointer hover:text-blue-500">Side Nav- 5</p>
            </nav>
        </aside>
    );
};

export default Sidebar;