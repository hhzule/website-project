import React from 'react'
import Project from './Project';
import pp from '../images/profilepic.jpg'
import { data } from './data';
import './Body.css';

const body = () => {
    return (
        <>
            <div className='gridcontainer'>
                {data.map((item) => {
                    return (
                        <div className='griditem' key={data.num}>
                            <Project
                                img={pp}
                                // discription={}
                                num={item.num}
                                title={item.title}
                                git={item.git}
                                url={item.url}
                            />

                        </div>
                    )
                })

                }
            </div>
        </>
    )
}

export default body
