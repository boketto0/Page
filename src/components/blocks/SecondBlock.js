import './SecondBlock.css'
import Card1 from '../cards/Card1';
import Card2 from '../cards/Card2';
import Card3 from '../cards/Card3';
import Card4 from '../cards/Card4';
import Card5 from '../cards/Card5';

function SecondBlock() {
    return(
        <div className='second-block'>
                <Card1/>
                <Card2/>
                <Card3/>
                <Card4/>
                <Card5/>
        </div>
    )
}

export default SecondBlock;