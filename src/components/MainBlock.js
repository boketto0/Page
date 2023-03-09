import './MainBlock.css'
import Nav from './Nav'
import FirstBlock from './FirstBlock';

function MainBlock() {
    return(
        <div>
            <FirstBlock></FirstBlock>
            <Nav></Nav>
            <div className='card1'>
                <div className='card1-circle'/>
                <div className='card1-button1'>
                    <div className='card1_button1--text'>Button</div>
                </div>
            </div>
        </div>
    )
}

export default MainBlock;