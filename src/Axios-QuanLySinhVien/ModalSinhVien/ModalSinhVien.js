import React, { Component } from "react";

export default class ModalSinhVien extends Component {
  render() {
    return (
      <div>
        <div>
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#myModal"
          >
            Open modal
          </button>
          {/* The Modal */}
          <div className="modal" id="myModal">
            <div className="modal-dialog">
              <div className="modal-content">
                {/* Modal Header */}
                <div className="modal-header">
                  <h4 className="modal-title">Modal Heading</h4>
                  <button type="button" className="close" data-dismiss="modal">
                    ×
                  </button>
                </div>
                {/* Modal body */}
                <div className="modal-body">
                  <div className="form-group">
                    <label htmlFor="id">Id</label>
                    <input
                      type="text"
                      name="id"
                      id="id"
                      className="form-control"
                      // placeholder
                      aria-describedby="helpId"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Tên</label>

                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      // placeholder
                      aria-describedby="helpId"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Email</label>

                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="form-control"
                      // placeholder
                      aria-describedby="helpId"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Số điện thoại</label>

                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      className="form-control"
                      // placeholder
                      aria-describedby="helpId"
                    />
                  </div>
                </div>
                {/* Modal footer */}
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-dismiss="modal"
                  >
                    Lưu
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
