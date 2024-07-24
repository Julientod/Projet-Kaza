import React from 'react'
import logements from '../../datas/logements.json'
import Card from '../card/Card'
import './logements_list.css'

function LogementsList() {
  return (
    <div className='logements_list'>
    {logements.map(logement=><Card key={logement.id} logement = {logement}/>) }
    </div>

  )
}

export default LogementsList