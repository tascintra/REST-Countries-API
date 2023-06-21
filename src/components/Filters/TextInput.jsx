import PropTypes from "prop-types"
import { Slot } from "@radix-ui/react-slot"

function TextInputRoot(props) {
  return (
    <span className="flex h-14 w-full max-w-smd items-center gap-5 rounded bg-white px-7 py-4 shadow-components transition-all duration-300 focus-within:shadow-selected hover:shadow-selected dark:bg-blue-300 dark:focus-within:shadow-darkSelected dark:hover:shadow-darkSelected">
      {props.children}
    </span>
  )
}

TextInputRoot.displayName = "TextInput.Root"

function TextInputIcon(props) {
  return (
    <Slot className="h-5 w-5 text-gray-100 transition-all duration-500 dark:text-white ">
      {props.children}
    </Slot>
  )
}

TextInputIcon.displayName = "TextInput.Icon"

function TextInputInput(props) {
  return (
    <input
      className="flex-1 bg-transparent text-sm font-light text-blue-100 outline-none transition-all duration-500 placeholder:text-gray-100 dark:text-white dark:placeholder:text-white"
      {...props}
    />
  )
}

TextInputInput.displayName = "TextInput.Input"

TextInputRoot.propTypes = {
  children: PropTypes.node,
}

TextInputIcon.propTypes = {
  children: PropTypes.node,
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
}
