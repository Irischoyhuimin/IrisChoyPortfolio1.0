import Image from '../images/Hands.jpeg'
import SectionHead from './SectionHead'
import {GiCutDiamond} from 'react-icons/gi'
import{values} from '../data'
import Card from '../UI/Card'


const Values = () => {
  return (
    <section className='values'>
        <div className="container values__container">
            <div className="values__left">
                <img src={Image} alt="Values Image" />
            </div>
            <div className = "values__right">
                <SectionHead icon = {<GiCutDiamond/>} title= "Values"/>
                <p>
                    Something
                </p>
                <div className="values__wrapper">
                    {
                        values.map(({id, icon, title, desc})=>{
                            return <Card className="values__value">
                            <span>{icon}</span>
                            <h4>{title}</h4>
                            <small>{desc}</small>
                            </Card>
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values