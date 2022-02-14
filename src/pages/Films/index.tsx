import { useAppSelector } from '../../redux/hooks'
import Grid from '../../components/Grid'
import { Spinner } from 'reactstrap'

const Films = (): JSX.Element => {
  const { films, loading } = useAppSelector((state) => state.films)

  const data = {
    header: [
      'title',
      'episode_id',
      'opening_crawl',
      'director',
      'producer',
      'release_date',
    ],
    values: films,
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
          <h1>Films</h1>
          <Grid data={data} />
        </>
      )}
    </>
  )
}
export default Films
