import React, { useState, useEffect } from 'react'
import { MenuItem, Select } from '@material-ui/core'

const FilterMenu = ({ items }) => {

    return (
        <div>
            {items.map(item => {
                return (
                    <Select
                        key={item.filter}
                        value={item.filter}
                        onChange={e => {}}
                    >
                    {
                        item.menu.map((val, i) => (
                            <MenuItem key={i} value={val} >{val}</MenuItem>
                            ))
                    }
                    </Select>
                )
            })}
        </div>
    )
}

export default FilterMenu
