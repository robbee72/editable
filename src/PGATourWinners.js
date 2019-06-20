import React from 'react';
import { SearchBar } from './SearchBar';
import { PGATourWinnersTable } from './PGATourWinnersTable';
import { EditableCell } from './EditableCell';

class PGATourWinners extends React.Component {
  constructor(props) {
    super(props);

    //  this.state.pGATourWinners = [];
    this.state = {};
    this.state.filterText = '';
    this.state.pGATourWinners = [
      {
        id: 1,
        tournament: 'The Masters',
        score: 275,
        toPar: -13,
        winner: 'Tiger Woods',
        ddr: '63'
      },
      {
        id: 2,
        tournament: 'PGA Championship',
        score: 274,
        toPar: -8,
        winner: 'Brooks Koepka',
        ddr: '13'
      },
      {
        id: 3,
        tournament: 'US OPEN',
        score: 271,
        toPar: -13,
        winner: 'Gary Woodland',
        ddr: '11'
      },
      {
        id: 4,
        tournament: 'The OPEN',
        score: '',
        toPar: '',
        winner: '',
        ddr: ''
      }
    ];
  }

  componentDidMount() {
    console.log('Who Won?');
  }

  handleUserInput(filterText) {
    this.setState({ filterText: filterText });
  }
  handleRowDel(pGATourWinners) {
    var index = this.state.pGATourWinners.indexOf(pGATourWinners);
    this.state.pGATourWinners.splice(index, 1);
    this.setState(this.state.pGATourWinners);
  }

  handleAddEvent(evt) {
    var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var pGATourWinners = {
      id: id,
      winner: '',
      score: '',
      tournament: '',
      toPar: '',
      ddr: ''
    };
    this.state.pGATourWinners.push(pGATourWinners);
    this.setState(this.state.pGATourWinners);
  }

  handlePGATourWinnersTable(evt) {
    var item = {
      id: evt.target.id,
      winner: evt.target.winner,
      value: evt.target.value
    };
    var pGATourWinners = this.state.pGATourWinners.slice();
    var newPGATourWinners = pGATourWinners.map(function(pGATourWinners) {
      for (var key in pGATourWinners) {
        if (key === item.winner && pGATourWinners.id === item.id) {
          pGATourWinners[key] = item.value;
        }
      }
      return pGATourWinners;
    });
    this.setState({ pGATourWinners: newPGATourWinners });
    //  console.log(this.state.pGATourWinners);
  }
  render() {
    return (
      <div>
        <h1>PGA TOUR Winners vs "Bombers"</h1>

        <SearchBar
          filterText={this.state.filterText}
          onUserInput={this.handleUserInput.bind(this)}
        />
        <PGATourWinnersTable
          onPGATourWinnersTableUpdate={this.handlePGATourWinnersTable.bind(
            this
          )}
          onRowAdd={this.handleAddEvent.bind(this)}
          onRowDel={this.handleRowDel.bind(this)}
          pGATourWinners={this.state.pGATourWinners}
          filterText={this.state.filterText}
        />
      </div>
    );
  }
}
export class PGATourWinnersRow extends React.Component {
  onDelEvent() {
    this.props.onDelEvent(this.props.pGATourWinners);
  }
  render() {
    return (
      <tr className="eachRow">
        <EditableCell
          onPGATourWinnersTableUpdate={this.props.onPGATourWinnersTableUpdate}
          cellData={{
            type: 'tournament',
            value: this.props.pGATourWinners.tournament,
            id: this.props.pGATourWinners.id
          }}
        />
        <EditableCell
          onPGATourWinnersTableUpdate={this.props.onPGATourWinnersTableUpdate}
          cellData={{
            type: 'winner',
            value: this.props.pGATourWinners.winner,
            id: this.props.pGATourWinners.id
          }}
        />
        <EditableCell
          onPGATourWinnersTableUpdate={this.props.onPGATourWinnersTableUpdate}
          cellData={{
            type: 'score',
            value: this.props.pGATourWinners.score,
            id: this.props.pGATourWinners.id
          }}
        />
        <EditableCell
          onPGATourWinnersTableUpdate={this.props.onPGATourWinnersTableUpdate}
          cellData={{
            type: 'toPar',
            value: this.props.pGATourWinners.toPar,
            id: this.props.pGATourWinners.id
          }}
        />
        <EditableCell
          onPGATourWinnersTableUpdate={this.props.onPGATourWinnersTableUpdate}
          cellData={{
            type: 'ddr',
            value: this.props.pGATourWinners.ddr,
            id: this.props.pGATourWinners.id
          }}
        />
        <td className="del-cell">
          <input
            type="button"
            onClick={this.onDelEvent.bind(this)}
            value="X"
            className="del-btn"
          />
        </td>
      </tr>
    );
  }
}
export default PGATourWinners;
