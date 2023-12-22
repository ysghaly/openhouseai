import React, { ChangeEvent } from 'react';
import { useState, useEffect } from "react";
import $ from 'jquery';

function Filter(props: any) {

    
    var list = [
        <option key={null} value="all">All</option>];

    
    // adds community groups found in JSON response to the dropdown list
    props.filter_list.forEach((filter_option: string, index: number) => {
        list.push(
            <option key={index} value={filter_option.split(" ").join("-")}>{filter_option}</option>
        );
    });

 
    // triggers whenever someone changes the dropdown list selector and hides all communities that don't match user's choice
    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        if (event.target.value.localeCompare("all") != 0){
                
            $(".community").hide();
            $(("." + event.target.value)).show();
        }

        else {
            
            $(".community").show();
        }
        
      }

    return (
        <div className='filter'>
        <label>Filter Communities: </label>  
        <select id="filter_select" onChange={handleChange}>
            {list}
        </select>
        </div> 

    );
}

export default Filter;
