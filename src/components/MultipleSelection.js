import Multiselect from 'multiselect-react-dropdown'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Dropdown } from 'semantic-ui-react'


function MultipleSelection() {
  const skillsSelector = useSelector((state) => state.skills.skills )
  const a = [
    {
      name : "aaa",
      id: 1
    }
  ]
  const [skillsData, setSkillsData] = useState(a)

    return (
      <Multiselect

      onRemove={(event) => {
        console.log(event);
      }}
      onSelect={(event) => {
        console.log(event);
      }}
      options={skillsData}
 
    />
        /*<Dropdown placeholder='Skills' fluid multiple selection options={skillsArr} onSelect={(event,data) => console.log(event.data)} search/>*/
    )
}

export default MultipleSelection
