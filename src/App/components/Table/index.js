import React,{ useEffect, useState } from 'react'
import styles from './styles.module.css'
import axios from '../../axios'
import Button from '../../components/Button'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

function Table(props) {
    
    // const [linkTemp, setLinkTemp] = useState([]);

    // console.log(props.dropID);
    
   
    return (
        <>
            <DragDropContext onDragEnd={props.handleOnDragEnd}>
                <table style={{ width: "100%" }}>
                    <thead>
                        <tr>
                            {props.thList.map((item,index) => (
                            <th key={index}>{item}</th>))}
                        </tr>
                    </thead>
                    <Droppable droppableId={props.dropID}>
                    {(provided, snapshot) => (
                        <tbody
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {props.tdList}
                            {provided.placeholder}
                        </tbody>
                    )}
                    </Droppable>
                </table>
            </DragDropContext>
        </>
           
    )
}

export default Table
