import { useEffect, useState } from 'react'
import { fetchPlanets } from '../../redux/Planets'
import { fetchFilms } from '../../redux/Films'
import { fetchResidents } from '../../redux/Residents'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import {
  Spinner,
  Button,
  Row,
  Col,
  Toast,
  ToastHeader,
  ToastBody,
} from 'reactstrap'
import Grid from '../../components/Grid'
import AddPlanet from './AddPlanet'

const Planets = (): JSX.Element => {
  const { planets, loading, nextPageAPI, prevPageAPI } = useAppSelector(
    (state) => state.planets
  )
  const dispatch = useAppDispatch()
  const [isAddPlanet, setIsAddPlanet] = useState(false)
  const [notify, setNotify] = useState(false)

  useEffect(() => {
    dispatch(fetchPlanets('https://swapi.dev/api/planets'))
  }, [dispatch])

  const handleNextPage = () => {
    nextPageAPI && dispatch(fetchPlanets(nextPageAPI))
  }

  const handlePrevPage = () => {
    prevPageAPI && dispatch(fetchPlanets(prevPageAPI))
  }

  const handleAddPlanet = () => {
    setIsAddPlanet(!isAddPlanet)
  }

  const handleNotify = () => {
    setNotify(true)
    setTimeout(() => {
      setNotify(false)
    }, 5000)
  }

  const data = {
    header: [
      'name',
      'rotation_period',
      'orbital_period',
      'diameter',
      'climate',
      'gravity',
      'terrain',
      'surface_water',
      'population',
    ],
    values: planets,
    actions: [
      {
        link: '/films',
        label: 'Go to Films',
        action: (row: { films: [] }) => {
          dispatch(fetchFilms(row.films))
        },
      },
      {
        link: '/residents',
        label: 'Go to Residents',
        action: (row: { residents: [] }) => {
          dispatch(fetchResidents(row.residents))
        },
      },
    ],
    hasActions: true,
    customCols: true,
  }

  return (
    <>
      {loading ? (
        <Spinner color='primary' type='grow' />
      ) : (
        <>
          <Row>
            <Col>
              <h1>Planets</h1>
            </Col>
            <Col className='text-right'>
              <Button color='primary' onClick={handleAddPlanet}>
                Add New Planet
              </Button>
            </Col>
          </Row>

          <Grid data={data} />

          <Row>
            <Col className='text-center'>
              {prevPageAPI && (
                <Button color='light' size='sm' onClick={handlePrevPage}>
                  Previous Page
                </Button>
              )}
              {nextPageAPI && (
                <Button color='light' size='sm' onClick={handleNextPage}>
                  Next Page
                </Button>
              )}
            </Col>
          </Row>

          <AddPlanet
            isAddPlanet={isAddPlanet}
            handleAddPlanet={handleAddPlanet}
            handleNotify={handleNotify}
          />

          {notify && (
            <div className='position-fixed bottom-0 end-0 p-3'>
              <Toast fade>
                <ToastHeader icon={<Spinner color='primary' size='sm' />}>
                  <span className='text-primary'>Congrats!</span>
                </ToastHeader>
                <ToastBody>Planet successfully added!</ToastBody>
              </Toast>
            </div>
          )}
        </>
      )}
    </>
  )
}
export default Planets
