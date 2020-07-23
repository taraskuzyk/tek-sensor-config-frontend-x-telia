import React, {Fragment} from 'react'

import {FormInput, FormSelect} from "shards-react";


const Input = ({element, activeLine, onChange}) => {
    const write = [...element["Access"]].includes('W')

    const options = Object.keys(element).filter((el)=>{
        return ((/^(Opt)[0-9]{1,2}$/.test(el)) && element[el] !== '')
    })
        .map((el,i )=>{
            return [[element[el]], element[`Val` + el.substr(3)]]
        })

    const handleChange = (e) => {
        onChange(element, e.target.value)
    }

    if(write) {
        if(options.length){
            return (
                <Fragment>
                    <FormSelect size="sm" disabled={!activeLine} onChange = {handleChange}>
                        {options.map((el)=>{
                            return (
                                <option value={el[1]} key={el[0]}>{el[0]}</option>
                            )
                        })}
                    </FormSelect>
                </Fragment>
            )
        }
        else {
            return <FormInput size="sm" placeholder={element["Field description"]} className="mb-2" onChange = {handleChange}/>
        }
    }

    else {
        return (
            <Fragment>

            </Fragment>
        )
    }
}



export default Input
