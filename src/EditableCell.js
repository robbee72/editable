import React from 'react';
export class EditableCell extends React.Component {
  render() {
    return (
      <td>
        <input
          type="text"
          winner={this.props.cellData.type}
          id={this.props.cellData.id}
          value={this.props.cellData.value}
          onChange={this.props.onPGATourWinnersTableUpdate}
        />
      </td>
    );
  }
}
