import New from '../New/New';
import Popular from '../Popular/Popular';
import PropTypes from 'prop-types';

function WithLightBlock(Component) {
    return function WithLightBlock(props) {
        
        if (props.views < 100) {
            return (
                <New>
                    <Component {...props} />
                </New>
            )
        }

        if (props.views > 1000) {
            return (
                <Popular>
                    <Component {...props} />
                </Popular>
            )   
        }

        return <Component {...props} />
    }
}

WithLightBlock.propTypes = {
    props: PropTypes.object
}

export default WithLightBlock