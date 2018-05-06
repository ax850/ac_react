import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class UserList extends React.Component {

  renderElements() {
    const ElementList = [];

    const relationship_status = (user) => {
      switch (user.status) {
        case 1:
          if (user.received) return 'Waiting';
          else return 'Pending';
        case 2:
          return 'Friends';
        default:
          return ''
      }
    };

    _.map(this.props.users, (user, index) =>
        ElementList.push({
          'first_name': user.first_name,
          'last_name': user.last_name,
          'username': user.username,
          'relationship': relationship_status(user),
          'action': user.username
        })
    );
    return ElementList;
  }

  render() {

    const columns = [
      {
        Header: 'User Info',
        columns: [
          {
            Header: 'First Name',
            accessor: 'first_name'
          },
          {
            Header: 'Last Name',
            accessor: 'last_name'
          },
          {
            Header: 'Username',
            accessor: 'username'
          },
        ]
      },
      {
        Header: 'Status',
        columns: [
          {
            Header: "Relationship",
            accessor: "relationship",
            Cell: row => (
                <span>
                <span style={{
                  color: row.value === 'Friends' ? '#57d500'
                      : row.value === 'Pending' ? '#ffbf00'
                          : row.value === 'Waiting' ? '#ffbf00'
                              : '#ffffff',
                  transition: 'all .3s ease'
                }}>
              &#x25cf;
            </span> {
                  row.value === 'Friends' ? 'Friends'
                      : row.value === 'Pending' ? `Pending`
                      : row.value === 'Waiting' ? `Waiting`
                          : ''
                }
          </span>
            )
          },
          {
            Header: "Action",
            accessor: "action",
            Cell: ({row, original}) => {
              if (original.relationship === 'Pending') {
                return (<button className={'btn btn-sm'} name={original.username}
                                onClick={(e) => this.props.cancelFunc(e, row)}>Cancel</button>)
              } else if (original.relationship === '') {
                return (<button className={'btn btn-sm'} name={original.username}
                                onClick={(e) => this.props.submitFunc(e, row)}>Invite</button>)
              } else if (original.relationship === 'Friends') {
                return (<button className={'btn btn-sm'} name={original.username}
                                onClick={(e) => this.props.removeFunc(e, row)}>Remove</button>)
              } else if (original.relationship === 'Waiting') {
                return (
                    <div className={"col-lg-7"} style={{'display': 'inherit'}}>
                      <button className={'btn btn-sm'} style={{'marginRight': '15%'}} name={original.username}
                              onClick={(e) => this.props.acceptFunc(e, row)}>Accept
                      </button>
                      <button className={'btn btn-sm'} name={original.username}
                              onClick={(e) => this.props.rejectFunc(e, row)}>Decline
                      </button>
                    </div>
                )
              }
            }
          }
        ]
      }
    ];

    const data = this.renderElements();

    return (
        <div>
          <ReactTable data={data} columns={columns} defaultPageSize={5} filterable/>
        </div>
    )
  }
}

UserList.propTypes = {

  users: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string.isRequired,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    status: PropTypes.number,
    user_id: PropTypes.number.isRequired

  })).isRequired,

  sendInvite: PropTypes.func,
  cancelInvite: PropTypes.func,
};

export {UserList}