import React, { useState, useEffect } from 'react'
import {
    MenuItem, Select, List, ListItem, InputLabel, FormControl
} from '@material-ui/core'

const FilterMenu = ({ list }) => {

    const [tankType, setTankType] = useState('none')
    const [tankCountry, setTankCountry] = useState('none')
    const [tankAmmunition, setTankAmmunition] = useState('none')
    const [filteredList, setFilteredList] = useState(list)

    useEffect(_ => {
        setFilteredList(
            list.filter(item => {
                let pass = true
                if (tankType != 'none') {
                    if (item.type !== tankType) {
                        pass = false
                    }
                }
                if (tankCountry != 'none') {
                    if (item.country !== tankCountry) {
                        pass = false
                    }
                }
                if (tankAmmunition != 'none') {
                    if (!item.ammunition.includes(tankAmmunition)) {
                        pass = false
                    }
                }
                return pass
            })
        )
    }, [tankType, tankCountry, tankAmmunition])

    return (
        <div>

            <FormControl style={{ margin: 10 }}>
                <InputLabel id='label-type'>Type</InputLabel>
                <Select labelId='label-type' value={tankType} onChange={e => setTankType(e.target.value)}>
                    <MenuItem value='none'>none</MenuItem>
                    <MenuItem value='light'>light</MenuItem>
                    <MenuItem value='medium'>medium</MenuItem>
                    <MenuItem value='heavy'>heavy</MenuItem>
                </Select>
            </FormControl>

            <FormControl style={{ margin: 10 }}>
                <InputLabel id='label-country'>Country</InputLabel>
                <Select labelId='label-country' value={tankCountry} onChange={e => setTankCountry(e.target.value)}>
                    <MenuItem value='none'>none</MenuItem>
                    <MenuItem value='USA'>USA</MenuItem>
                    <MenuItem value='UK'>UK</MenuItem>
                    <MenuItem value='USSR'>USSR</MenuItem>
                </Select>
            </FormControl>

            <FormControl style={{ margin: 10 }}>
                <InputLabel id='label-ammunition'>Ammunition</InputLabel>
                <Select labelId='label-ammunition' value={tankAmmunition} onChange={e => setTankAmmunition(e.target.value)}>
                    <MenuItem value='none'>none</MenuItem>
                    <MenuItem value='AP'>AP</MenuItem>
                    <MenuItem value='APCR'>APCR</MenuItem>
                    <MenuItem value='HE'>HE</MenuItem>
                    <MenuItem value='HEAT'>HEAT</MenuItem>
                </Select>
            </FormControl>

            <List>
                {
                    filteredList.map(item => (
                        <ListItem key={item.id}>{item.name}</ListItem>
                    ))
                }
            </List>
        </div>
    )
}

export default FilterMenu
