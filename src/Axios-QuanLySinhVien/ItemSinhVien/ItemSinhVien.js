import React, { Component } from "react";

export default class ItemSinhVien extends Component {
  render() {
    let { sv } = this.props;
    return (
      <tr>
        <td>{sv.id}</td>
        <td>{sv.name}</td>
        <td>{sv.email}</td>
        <td>{sv.phone}</td>

        <td className="flex">
          <button className="btn btn-success mr-1">Sửa</button>
          <button className="btn btn-danger">Xoá</button>
        </td>
      </tr>
    );
  }
}
