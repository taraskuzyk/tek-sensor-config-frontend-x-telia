import React, {Fragment} from 'react'

import { FormSelect, FormInput } from "shards-react";


const Input = ({element, activeLine}) => {
    const write = [...element["Access"]].includes('W')

    

    const options = Object.keys(element).filter((el)=>{
        return ((/^(Opt)[0-9]{1,2}$/.test(el)) && element[el] !== '')
    })
    .map((el,i )=>{
        // console.log('689', el.substr(3), element[`Val` + el.substr(3)])
        return [[element[el]], element[`Val` + el.substr(3)]]
    })

    // console.log('66', options)

    if(write) {
        if(options.length){
            return (
                <Fragment>
                    <FormSelect size="sm" disabled={!activeLine}>
            
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
            return <FormInput size="sm" placeholder={element["Field description"]} className="mb-2" />
        }
        
    
    }

    else {
        return <Fragment>
            <p className="smaller">
                only for the reading.
            </p>
        </Fragment>

    }
}



export default Input