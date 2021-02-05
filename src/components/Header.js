import PropTypes from 'prop-types';
import Button from './Button';
const Header = (props ) => {
    return (

        <header style={{justifyContent: 'center'}}>
            <h1 className=" d-flex flex-column "style={headingStyle}>Task Tracker </h1>
            <Button 
                onClick={props.onClick} 
                show={props.show} 
                text={props.show ? 'Close':'Add'}
            />

        </header>
    )
}
const headingStyle={
    textAlign: 'center',
    color:'#FF1493',
    marginTop:'1%',
}
Header.defaultProps = {
    title :'task 0',
}
Header.propTypes ={
    title:PropTypes.string
}
export default Header
