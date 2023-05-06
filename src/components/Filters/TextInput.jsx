import { Slot } from '@radix-ui/react-slot'

function TextInputRoot(props) {
  return (
    <span className="flex items-center gap-5 h-14 py-4 px-7 rounded bg-white dark:bg-blue-300 transition-all duration-500 shadow-components focus-within:shadow-selected hover:shadow-selected dark:focus-within:shadow-darkSelected dark:hover:shadow-darkSelected w-full max-w-smd">
      {props.children}
    </span>
  )
}

TextInputRoot.displayName = 'TextInput.Root'

function TextInputIcon(props) {
  return (
    <Slot className="w-5 h-5 text-gray-100 dark:text-white transition-all duration-500 ">
      {props.children}
    </Slot>
  )
}

TextInputIcon.displayName = 'TextInput.Icon'

function TextInputInput(props) {
  return (
    <input
      className="bg-transparent flex-1 font-light text-sm text-blue-100 dark:text-white placeholder:text-gray-100 dark:placeholder:text-white transition-all duration-500 outline-none"
      {...props}
    />
  )
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
}
