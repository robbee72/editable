import React from 'react';
import { PGATourWinnersRow } from './PGATourWinners';

export class PGATourWinnersTable extends React.Component {
  render() {
    var onPGATourWinnersTableUpdate = this.props.onPGATourWinnersTableUpdate;
    var rowDel = this.props.onRowDel;
    var filterText = this.props.filterText;
    var pGATourWinners = this.props.pGATourWinners.map(function(
      pGATourWinners
    ) {
      if (pGATourWinners.winner.indexOf(filterText) === -1) {
        return null;
      }
      return (
        <PGATourWinnersRow
          onPGATourWinnersTableUpdate={onPGATourWinnersTableUpdate}
          pGATourWinners={pGATourWinners}
          onDelEvent={rowDel.bind(this)}
          key={pGATourWinners.id}
        />
      );
    });
    return (
      <div>
        <button
          type="button"
          onClick={this.props.onRowAdd}
          className="btn btn-success pull-right"
        >
          Add
        </button>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Tournament</th>
              <th>Winner</th>
              <th>Score</th>
              <th>Total</th>
              <th>Driving Distance Rank</th>
            </tr>
          </thead>

          <tbody>{pGATourWinners}</tbody>
        </table>
      </div>
    );
  }
}
