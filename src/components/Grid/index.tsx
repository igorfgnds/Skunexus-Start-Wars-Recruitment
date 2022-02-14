import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Table, Button, Badge } from 'reactstrap'
import './index.css'

interface IProps {
  data: {
    header: string[]
    values: any[]
    actions: any[]
    hasActions: boolean
    customCols: boolean
  }
}

const Grid = (props: IProps): JSX.Element => {
  return (
    <Table bordered borderless dark hover responsive striped>
      <thead>
        <tr>
          {props.data.header.map((name) => (
            <th className='text-center' key={name}>
              {name}
            </th>
          ))}
          {props.data.customCols && (
            <>
              <th>Residents</th>
              <th>Films</th>
            </>
          )}
          {!!props.data.actions.length && props.data.hasActions && (
            <th className='text-center' style={{ width: '25%' }}>
              Actions
            </th>
          )}
        </tr>
      </thead>
      <tbody>
        {props.data.values &&
          props.data.values.map((row, index) => (
            <tr key={index}>
              {props.data.header.map((name) => (
                <td
                  key={name}
                  className={
                    !isNaN(Number(row[name])) ? 'text-right' : 'text-center'
                  }
                >
                  {row[name]}
                </td>
              ))}
              {props.data.customCols && (
                <>
                  <td className='text-right'>
                    <Badge color='primary' pill>
                      {row.residents.length}
                    </Badge>
                  </td>
                  <td className='text-right'>
                    <Badge color='primary' pill>
                      {row.films.length}
                    </Badge>
                  </td>
                </>
              )}
              {!!props.data.actions.length && props.data.hasActions && (
                <td className='text-center'>
                  {props.data.actions.map(({ link, label, action }) => (
                    <Link key={link} to={link}>
                      {(link === '/films' && !!row.films.length && (
                        <Button
                          color='secondary'
                          size='sm'
                          onClick={() => action(row)}
                        >
                          {label}
                        </Button>
                      )) ||
                        (link === '/residents' && !!row.residents.length && (
                          <Button
                            color='secondary'
                            size='sm'
                            onClick={() => action(row)}
                          >
                            {label}
                          </Button>
                        ))}
                    </Link>
                  ))}
                  <a href={row.url} target='_blank' rel='noreferrer'>
                    <Button color='secondary' size='sm'>
                      Details
                    </Button>
                  </a>
                </td>
              )}
            </tr>
          ))}
      </tbody>
    </Table>
  )
}

Grid.propTypes = {
  data: PropTypes.shape({
    header: PropTypes.arrayOf(PropTypes.string).isRequired,
    values: PropTypes.array.isRequired,
    actions: PropTypes.arrayOf(
      PropTypes.shape({
        link: PropTypes.string,
        label: PropTypes.string,
        action: PropTypes.func,
      })
    ),
    customCols: PropTypes.bool,
    hasActions: PropTypes.bool,
  }),
}

export default Grid
