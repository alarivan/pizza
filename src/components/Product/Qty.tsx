import React from "react"
import styled from "styled-components"
import { FiPlus, FiMinus } from "react-icons/fi"

const SQty = styled.div`
  margin-bottom: 1.25rem;
`

const Input = styled.div`
  display: inline-flex;
  align-items: center;
  background-color: #fff;
  border: 1px solid #bbb;
  border-radius: 4px;
`

const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  padding: 0.5rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  outline: none;
`

const Label = styled.p`
  margin: 0 0 0.25rem;
  font-size: 0.7rem;
  font-weight: 500;
`

const Value = styled.div`
  font-weight: 600;
  font-size: 0.75rem;
  padding: 0 0.75rem;
  min-width: 65px;
  box-sizing: border-box;
  text-align: center;
`

interface Props {
  qty: number
  label: string
  valueLabel: {
    singular: string
    plural: string
  }
  onChange: (value: number) => void
}

const Qty: React.FC<Props> = ({ qty, label, valueLabel, onChange }) => {
  return (
    <SQty>
      <Label>{label}</Label>
      <Input>
        <Button onClick={() => onChange(qty - 1)}>
          <FiMinus color="#ef4b4c" />
        </Button>
        <Value>{`${qty} ${
          qty === 1 ? valueLabel.singular : valueLabel.plural
        }`}</Value>
        <Button onClick={() => onChange(qty + 1)}>
          <FiPlus color="#ef4b4c" />
        </Button>
      </Input>
    </SQty>
  )
}

export default Qty
