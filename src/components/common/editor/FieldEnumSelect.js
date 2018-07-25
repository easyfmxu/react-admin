import React from "react";
import PropTypes from "prop-types";
import {
    Select
} from "element-react"

export default class FieldEnumSelect extends React.Component{

    render(){
        const {
            value,
            onChange,
            candidate,
            valuefield,
            labelfield,
            ...restProps,
        } = this.props;

        return (
            <Select 
                value={value} 
                onChange={onChange}
                {...restProps}
            >
                {candidate.map((item)=>{
                    return (
                        <Select.Option 
                            key={item[valuefield]}
                            value={item[valuefield]}
                            label={item[labelfield]}
                        />
                    )
                })}
            </Select>
        )
    }
}

FieldEnumSelect.propTypes = {
    value:PropTypes.any.isRequired,
    onChange:PropTypes.func.isRequired,
    candidate:PropTypes.array.isRequired,
}

FieldEnumSelect.defaultProps = {
    valuefield:"value",
    labelfield:"label",
}