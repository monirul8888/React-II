import React from 'react';
import Cousin from './Cousin';

const Aunt = ({asset}) => {
    return (
        <div>
            <h3>Aunt</h3>
             <section className='flex'>
                
                <Cousin name = "Sadika" asset = {asset}></Cousin>
                <Cousin name = "Saifa"></Cousin>
            </section>
        </div>
    );
};

export default Aunt;