import React, { ChangeEvent } from 'react';
import { useState, useEffect } from "react";
import $ from 'jquery';

function Filter(props: any) {


    var list = [
        <option key={null} value="all">All</option>];

    props.filter_list.forEach((filter_option: string, index: number) => {
        list.push(
            <option key={index} value={filter_option.split(" ").join("-")}>{filter_option}</option>
        );
    });

    // $(document).ready(function() {
    //     $("#filter_select").change(function() {
    //       console.log($("#filter_select").find(":selected").val());
    //     });
    //   });

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
