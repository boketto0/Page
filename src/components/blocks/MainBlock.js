import './MainBlock.css'
import Nav from './Nav';
import FirstBlock from './FirstBlock';
import SecondBlock from './SecondBlock';

function MainBlock() {
    return(
        <div>
            <FirstBlock></FirstBlock>
            <Nav></Nav>
            <SecondBlock className='main-block'></SecondBlock>
        </div>
    )
}

export default MainBlock;