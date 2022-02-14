import { useAppSelector } from '../../redux/hooks'
import Grid from '../../components/Grid'
import { Spinner } from 'reactstrap'

const Residents = (): JSX.Element => {
  const { residents, loading } = useAppSelector((state) => state.residents)

  const data = {
    header: [
      'name',
      'height',
      'mass',
      'hair_color',
      'skin_color',
      'eye_color',
      'birth_year',
      'gender',
    ],
    values: residents,
    actions: [],
    hasActions: false,
    customCols: false,
  }

  return (
    <>
      {loading ? (
        <Spinner color='primary' type='grow' />
      ) : (
        <>
          <h1>Residents</h1>
          <Grid data={data} />
        </>
      )}
    </>
  )
}
export default Residents
