
// parámetros de una función se llamarán props en react
import PropTypes from 'prop-types'

const Container = ({children}) => {
  return (
    <div>{children}</div>
  )
}

Container.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Container
