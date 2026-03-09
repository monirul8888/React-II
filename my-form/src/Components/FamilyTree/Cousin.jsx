import React, { useContext } from 'react';
import Special from './Special';
import { AssetContext } from './FamilyTree';

const Cousin = ({name, asset}) => {

   
    return (
        <div>
            <h3>{name}</h3>
            {
                 name === "Sadika" && <Special asset = {asset}></Special>
            }
        </div>
    );
};

export default Cousin;{name}