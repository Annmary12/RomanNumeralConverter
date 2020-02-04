import * as React from 'react'
import {InputGroup,
  InputGroupButtonDropdown,
  Input,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

interface IProps {
  onChange: any, 
  name: string, 
  value: string | number, 
  placeholder?: string,
  buttonLabel: string,
  handleSubmit: any
}
const InputComponent: React.FC<IProps> = ({ name, onChange, value, placeholder, buttonLabel, handleSubmit }) => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);
  return (
    <InputGroup>
      <Input name={name} value={value} onChange={onChange} placeholder={placeholder} required/>
      <InputGroupButtonDropdown addonType="append" isOpen={dropdownOpen} toggle={toggleDropDown}>
            <DropdownToggle color='success' caret>
              {buttonLabel}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={handleSubmit ('romans')}>To Roman</DropdownItem>
              <DropdownItem onClick={handleSubmit('integer')}>To Number</DropdownItem>
            </DropdownMenu>
          </InputGroupButtonDropdown>
    </InputGroup>
  )
}

export default InputComponent