
// parámetros de una función se llamarán props en react
import PropTypes from 'prop-types'

const Button = ({text, title}) => {
  return (
    <button title={title}>{text}</button>
  )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    title: PropTypes.string
}

export default Button
