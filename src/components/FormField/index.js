import React from 'react';
import { DivFloat, LabelFloat } from './style';

function FormField({nomeEl, label, type, name , value, onChange}) {
    if(nomeEl === 'input'){
        
        return(
            <DivFloat>            
                <LabelFloat htmlFor= {name} >{label}</LabelFloat>
                <input id ={name}
                    type={type}
                    name={name}
                    value={value}
                    onChange= {onChange}
                    placeholder= ""                
                />
                
            </DivFloat>
          );
    }else{
        
        return(
            <DivFloat>            
          <textarea id ={name}
               type={type}
               name={name}
               value={value}
               onChange= {onChange}
               placeholder= ""
              />
               <LabelFloat htmlFor= {name} >{label}</LabelFloat>
            </DivFloat>
          );
        }
}

export default FormField;