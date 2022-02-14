import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap'

interface IProps {
  isAddPlanet: boolean
  handleNotify: () => void
  handleAddPlanet: () => void
}

const AddPlanet = (props: IProps): JSX.Element => {
  const submitForm = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    props.handleAddPlanet()
    props.handleNotify()
  }

  return (
    <Modal isOpen={props.isAddPlanet} size='md' toggle={props.handleAddPlanet}>
      <Form onSubmit={submitForm}>
        <ModalHeader toggle={props.handleAddPlanet}>Add New Planet</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for='name'>Name</Label>
            <Input id='name' required />
          </FormGroup>
          <FormGroup>
            <Label for='rotation_period'>Rotation Period</Label>
            <Input id='rotation_period' type='number' required />
          </FormGroup>
          <FormGroup>
            <Label for='orbital_period'>Orbital Period</Label>
            <Input id='orbital_period' type='number' required />
          </FormGroup>
          <FormGroup>
            <Label for='diameter'>Diameter</Label>
            <Input id='diameter' type='number' required />
          </FormGroup>
          <FormGroup>
            <Label for='climate'>Climate</Label>
            <Input id='climate' required />
          </FormGroup>
          <FormGroup>
            <Label for='gravity'>Gravity</Label>
            <Input id='gravity' required />
          </FormGroup>
          <FormGroup>
            <Label for='terrain'>Terrain</Label>
            <Input id='terrain' type='select' required>
              <option></option>
              <option>desert</option>
              <option>ice caves</option>
              <option>grasslands</option>
              <option>jungle</option>
              <option>cityscape</option>
              <option>ocean</option>
              <option>rainforests</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for='surface_water'>Surface Water</Label>
            <Input id='surface_water' type='number' required />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color='light' onClick={props.handleAddPlanet}>
            Cancel
          </Button>
          <Button color='primary' type='submit'>
            Save
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  )
}
export default AddPlanet
