import React from 'react';
import ReactScrollbar from 'react-scrollbar-js';
import { Col, Row } from 'react-bootstrap';
// import DatePicker from 'react-datepicker';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import './ThematicAnalysis.scss';

class ThematicAnalysis extends React.Component {
  constructor(props) {
    super(props);
    this.toggleGridElement = this.toggleGridElement.bind(this);
  }
  toggleGridElement() {
    const elements = document.getElementsByClassName('expandCollapsGrid');
    for (let i = 0; i < elements.length; i += 1) {
      elements[i].classList.toggle('active');
    }
  }
  render() {
    const myScrollbar = {
      width: '100%',
      height: '72vh'
    };
    return (
      <ReactScrollbar style={myScrollbar}>
        <div className="contentSec">
          <Row>
            <Col lg={12} md={12}>
              <div className="block-title">
                <div className="block-title-icon"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 12.66">
                  <title>rf</title>
                  <rect x="0.5" y="5.05" width="7.11" height="7.11" fill="none" stroke="#0bacf4" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="11.95" y="5.05" width="7.11" height="7.11" fill="none" stroke="#0bacf4" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="23.39" y="5.05" width="7.11" height="7.11" fill="none" stroke="#0bacf4" strokeLinecap="round" strokeLinejoin="round" />
                  <polyline points="4.05 5.05 4.05 0.5 26.95 0.5 26.95 5.05" fill="none" stroke="#0bacf4" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="15.5" y1="0.5" x2="15.5" y2="5.05" fill="none" stroke="#0bacf4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <h2 className="block-title-text">Report Filters</h2>
              </div>
              <form action="">
                <div className="panel">
                  <div className="basic-form">
                    <div className="containerWrap">
                      <Row>
                        <Col lg={6} md={6} sm={6} xs={12}>
                          <div className="form-field">
                            <label className="form-label">Oversight Unit</label>
                            <div className="form-select">
                              <select className="form-input">
                                <option value="v-00">---</option>
                                <option value="v-01">Unit 01</option>
                                <option value="v-02">Unit 02</option>
                                <option value="v-03">Unit 03</option>
                              </select>
                            </div>
                          </div>
                          <Row>
                            <Col lg={6} md={6} sm={6} xs={12}>
                              <div className="form-field">
                                <label className="form-label">Date Of Report Issuance Form</label>
                                <DayPickerInput className="form-input form-datepicker" placeholder="DD-MMM-YYYY" format="DD-MMM-YYYY" />
                                <div className="btn-action btn-datepicker"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.23 18.93">
                                  <path d="M12.15,4.2h2.39a.69.69,0,0,1,.69.69V17.24a.69.69,0,0,1-.69.69H1.69A.69.69,0,0,1,1,17.24V4.89a.69.69,0,0,1,.69-.69H12.15" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px" />
                                  <line x1="1" y1="8.75" x2="15.23" y2="8.75" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px" />
                                  <line x1="4.48" y1="1" x2="4.48" y2="3.39" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px" />
                                  <line x1="11.96" y1="1" x2="11.96" y2="3.39" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px" /></svg>
                                </div>
                              </div>
                            </Col>
                            <Col lg={6} md={6} sm={6} xs={12}>
                              <div className="form-field">
                                <label className="form-label">Date of Report Issuance To</label>
                                <DayPickerInput className="form-input form-datepicker" placeholder="DD-MMM-YYYY" format="DD-MMM-YYYY" />
                                <div className="btn-action btn-datepicker"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.23 18.93">
                                  <path d="M12.15,4.2h2.39a.69.69,0,0,1,.69.69V17.24a.69.69,0,0,1-.69.69H1.69A.69.69,0,0,1,1,17.24V4.89a.69.69,0,0,1,.69-.69H12.15" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px" />
                                  <line x1="1" y1="8.75" x2="15.23" y2="8.75" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px" />
                                  <line x1="4.48" y1="1" x2="4.48" y2="3.39" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px" />
                                  <line x1="11.96" y1="1" x2="11.96" y2="3.39" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px" /></svg>
                                </div>
                              </div>
                            </Col>
                          </Row>
                          <div className="form-field">
                            <label className="form-label">Type of Oversight</label>
                            <div className="form-select">
                              <select className="form-input">
                                <option value="v-00">---</option>
                                <option value="v-01">Type 01</option>
                                <option value="v-02">Type 02</option>
                                <option value="v-03">Type 03</option>
                              </select>
                            </div>
                          </div>
                          <div className="form-field">
                            <div className="form-group-label">Operations Covered</div>
                            <label className="form-label">Situation</label>
                            <div className="form-select">
                              <select className="form-input">
                                <option value="v-00">---</option>
                                <option value="v-01">Situation 01</option>
                                <option value="v-02">Situation 02</option>
                                <option value="v-03">Situation 03</option>
                              </select>
                            </div>
                          </div>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={12}>
                          <div className="form-field">
                            <div className="form-group-label">Risk SubCategory - Primary</div>
                            <div className="form-group-label">Risk SubCategory - Secondary</div>
                          </div>
                          <div className="form-field">
                            <label className="form-label">Criticality</label>
                            <input type="text" className="form-input" />
                          </div>
                          <Row>
                            <Col lg={6} md={6} sm={6} xs={12}>
                              <div className="form-field">
                                <label className="form-label">Period Covered Start From</label>
                                <DayPickerInput className="form-input form-datepicker" placeholder="DD-MMM-YYYY" format="DD-MMM-YYYY" />
                                <div className="btn-action btn-datepicker"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.23 18.93">
                                  <path d="M12.15,4.2h2.39a.69.69,0,0,1,.69.69V17.24a.69.69,0,0,1-.69.69H1.69A.69.69,0,0,1,1,17.24V4.89a.69.69,0,0,1,.69-.69H12.15" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px" />
                                  <line x1="1" y1="8.75" x2="15.23" y2="8.75" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px" />
                                  <line x1="4.48" y1="1" x2="4.48" y2="3.39" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px" />
                                  <line x1="11.96" y1="1" x2="11.96" y2="3.39" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px" /></svg>
                                </div>
                              </div>
                            </Col>
                            <Col lg={6} md={6} sm={6} xs={12}>
                              <div className="form-field">
                                <label className="form-label">Period Covered End To</label>
                                <DayPickerInput className="form-input form-datepicker" placeholder="DD-MMM-YYYY" format="DD-MMM-YYYY" />
                                <div className="btn-action btn-datepicker"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.23 18.93">
                                  <path d="M12.15,4.2h2.39a.69.69,0,0,1,.69.69V17.24a.69.69,0,0,1-.69.69H1.69A.69.69,0,0,1,1,17.24V4.89a.69.69,0,0,1,.69-.69H12.15" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px" />
                                  <line x1="1" y1="8.75" x2="15.23" y2="8.75" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px" />
                                  <line x1="4.48" y1="1" x2="4.48" y2="3.39" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px" />
                                  <line x1="11.96" y1="1" x2="11.96" y2="3.39" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px" /></svg>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
                <div className="form-actions"> <a href="" className="form-action form-action-create"> Clear </a> <a href="" className="form-action form-action-create"> Search </a> </div>
              </form>
            </Col>
          </Row>
          <table className="simple-table simple-table--margin">
            <tr>
              <th>&nbsp;</th>
              <th>Oversight Unit</th>
              <th>Control Number</th>
              <th>Date of Report Issuance</th>
              <th>Title</th>
              <th>Overseen Parties</th>
              <th>Operations Covered</th>
            </tr>
            <tr>
              <td><button className="btn-action btn-expand js-toggle-table expandCollapsGrid" onClick={this.toggleGridElement}> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.03 7">
                <polyline points="12.03 6 6.52 1 1 6" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px" /></svg></button>
              </td>
              <td>Office of Internal Oversight Services (OIOS)</td>
              <td>AR/2015/163/01</td>
              <td>31.12.2017</td>
              <td>Audit of UNHCR operations in Tunisia</td>
              <td>Tunisia</td>
              <td>&nbsp;</td>
            </tr>
            <tr className="table-inner js-table-inner expandCollapsGrid">
              <td colSpan="7"><table className="simple-table simple-table--margin">
                <tr>
                  <th>Recommendation Number</th>
                  <th>Recommendation</th>
                  <th>Action Party</th>
                  <th>Risk SubCategory - Primary</th>
                  <th>Risk SubCategory - Secondary</th>
                  <th>Cricitality</th>
                </tr>
                <tr>
                  <td><strong>01.</strong></td>
                  <td>Office of Internal Oversight Services (OIOS)</td>
                  <td>Bureau for Africa</td>
                  <td>2.1200 -  Supply asset management</td>
                  <td>&nbsp;</td>
                  <td>Important</td>
                </tr>
                <tr>
                  <td><strong>02.</strong></td>
                  <td>Office of Internal Oversight Services (OIOS)</td>
                  <td>Bureau for Africa</td>
                  <td>2.1200 -  Supply asset management</td>
                  <td>&nbsp;</td>
                  <td>Important</td>
                </tr>
              </table></td>
            </tr>
            <tr>
              <td><button className="btn-action btn-expand js-toggle-table expandCollapsGrid" onClick={this.toggleGridElement}> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.03 7">
                <polyline points="12.03 6 6.52 1 1 6" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px" /></svg></button>
              </td>
              <td>Office of Internal Oversight Services (OIOS)</td>
              <td>AR/2015/163/01</td>
              <td>31.12.2017</td>
              <td>Audit of UNHCR operations in Tunisia</td>
              <td>Tunisia</td>
              <td>&nbsp;</td>
            </tr>
            <tr className="table-inner js-table-inner expandCollapsGrid">
              <td colSpan="7"><table className="simple-table simple-table--margin">
                <tr>
                  <th>Recommendation Number</th>
                  <th>Recommendation</th>
                  <th>Action Party</th>
                  <th>Risk SubCategory - Primary</th>
                  <th>Risk SubCategory - Secondary</th>
                  <th>Cricitality</th>
                </tr>
                <tr>
                  <td><strong>01.</strong></td>
                  <td>Office of Internal Oversight Services (OIOS)</td>
                  <td>Bureau for Africa</td>
                  <td>2.1200 -  Supply asset management</td>
                  <td>&nbsp;</td>
                  <td>Important</td>
                </tr>
                <tr>
                  <td><strong>02.</strong></td>
                  <td>Office of Internal Oversight Services (OIOS)</td>
                  <td>Bureau for Africa</td>
                  <td>2.1200 -  Supply asset management</td>
                  <td>&nbsp;</td>
                  <td>Important</td>
                </tr>
              </table></td>
            </tr>
            <tr>
              <td><button className="btn-action btn-expand js-toggle-table expandCollapsGrid" onClick={this.toggleGridElement}> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.03 7">
                <polyline points="12.03 6 6.52 1 1 6" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px" /></svg></button>
              </td>
              <td>Office of Internal Oversight Services (OIOS)</td>
              <td>AR/2015/163/01</td>
              <td>31.12.2017</td>
              <td>Audit of UNHCR operations in Tunisia</td>
              <td>Tunisia</td>
              <td>&nbsp;</td>
            </tr>
            <tr className="table-inner js-table-inner expandCollapsGrid">
              <td colSpan="7"><table className="simple-table simple-table--margin">
                <tr>
                  <th>Recommendation Number</th>
                  <th>Recommendation</th>
                  <th>Action Party</th>
                  <th>Risk SubCategory - Primary</th>
                  <th>Risk SubCategory - Secondary</th>
                  <th>Cricitality</th>
                </tr>
                <tr>
                  <td><strong>01.</strong></td>
                  <td>Office of Internal Oversight Services (OIOS)</td>
                  <td>Bureau for Africa</td>
                  <td>2.1200 -  Supply asset management</td>
                  <td>&nbsp;</td>
                  <td>Important</td>
                </tr>
                <tr>
                  <td><strong>02.</strong></td>
                  <td>Office of Internal Oversight Services (OIOS)</td>
                  <td>Bureau for Africa</td>
                  <td>2.1200 -  Supply asset management</td>
                  <td>&nbsp;</td>
                  <td>Important</td>
                </tr>
              </table></td>
            </tr>
            <tr>
              <td><button className="btn-action btn-expand js-toggle-table expandCollapsGrid" onClick={this.toggleGridElement}> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.03 7">
                <polyline points="12.03 6 6.52 1 1 6" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px" /></svg></button>
              </td>
              <td>Office of Internal Oversight Services (OIOS)</td>
              <td>AR/2015/163/01</td>
              <td>31.12.2017</td>
              <td>Audit of UNHCR operations in Tunisia</td>
              <td>Tunisia</td>
              <td>&nbsp;</td>
            </tr>
            <tr className="table-inner js-table-inner expandCollapsGrid">
              <td colSpan="7"><table className="simple-table simple-table--margin">
                <tr>
                  <th>Recommendation Number</th>
                  <th>Recommendation</th>
                  <th>Action Party</th>
                  <th>Risk SubCategory - Primary</th>
                  <th>Risk SubCategory - Secondary</th>
                  <th>Cricitality</th>
                </tr>
                <tr>
                  <td><strong>01.</strong></td>
                  <td>Office of Internal Oversight Services (OIOS)</td>
                  <td>Bureau for Africa</td>
                  <td>2.1200 -  Supply asset management</td>
                  <td>&nbsp;</td>
                  <td>Important</td>
                </tr>
                <tr>
                  <td><strong>02.</strong></td>
                  <td>Office of Internal Oversight Services (OIOS)</td>
                  <td>Bureau for Africa</td>
                  <td>2.1200 -  Supply asset management</td>
                  <td>&nbsp;</td>
                  <td>Important</td>
                </tr>
              </table></td>
            </tr>
          </table>
        </div>
      </ReactScrollbar>
    );
  }
}

export default ThematicAnalysis;
