import PropTypes from "prop-types"

const Error = ({ error }) => {
  return <h1 className="m-auto text-3xl font-semibold text-red-500">{error}</h1>
}

Error.propTypes = {
  error: PropTypes.string.isRequired,
}

export default Error
