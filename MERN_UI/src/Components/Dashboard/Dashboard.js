import React from 'react';
import { filter, uniq, map, indexOf } from 'lodash';
import ReactScrollbar from 'react-scrollbar-js';
import BarChart from 'react-bar-chart';
import { Col, Row, Tabs, Tab } from 'react-bootstrap';
// import ReactSuperSelect from 'react-super-select';
import { connect } from 'react-redux';
import PieChartIconSvg from '../Shared/SvgComponents/PieChartIconSvg';
import './Dashboard.scss';
import {
  downloadReport
} from '../../actions/ReportsActions';

const ReportViewer = [];
const data = [
  { text: '2.1200', value: 1 },
  { text: '2.0503', value: 1 },
  { text: '2.0500', value: 2 },
  { text: '2.0900', value: 1 },
  { text: '2.0300', value: 6 },
  { text: '2.0700', value: 2 },
  { text: '2.0800', value: 7 },
  { text: '3.0200', value: 6 },
  { text: '3.1100', value: 1 },
  { text: '2.0504', value: 1 },
  { text: '3.0700', value: 3 },
  { text: '2.1201', value: 1 },
  { text: '2.1202', value: 2 },
  { text: '2.9900', value: 1 },
  { text: '3.1000', value: 4 },
  { text: '2.0200', value: 1 },
  { text: '2.1201', value: 3 },
  { text: '2.1202', value: 2 },
  { text: '2.9900', value: 1 },
  { text: '3.1000', value: 2 },
  { text: '2.0200', value: 1 },
  { text: '3.0900', value: 1 }
];

const margin = { top: 20, right: 20, bottom: 30, left: 40 };

class DashBoard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      reportsList: [],
      selectedReports: [],
      activeTab: 0,
      width: 1080
    };
  }

  getInitialState() {
    return { width: 1080 };
  }

  componentWillMount() {
  }

  componentDidMount() {
    window.onresize = () => {
      this.setState({ width: 1080 });
    };
  }

  componentWillReceiveProps(nextProps) {
    const selectedReports = nextProps.reportsList.filter(r => r.status === 1);
    console.log('D R', selectedReports);
    console.log('D R props.reportsList', nextProps.reportsList);
    this.setState({ selectedReports, activeTab: selectedReports[0].id });
  }

  onSelectReport = (option) => {
    console.log('Report Selected', option);
    if (option && option.name !== '[New Report]') {
      this.setState({ selectedReports: option, activeTab: option.id });
    } else {
      this.setState({ selectedReports: [] });
    }
  };

  onDownloadReport = (e) => {
    const selectedData = filter(this.state.selectedReports, { id: parseInt(e.currentTarget.id, 10) })[0];
    const filteredColumns = [];
    const uniqueHiddenColumns = uniq(selectedData.reportDefinition.hiddenColumns);
    map(selectedData.reportDefinition.dataSource.columns, col => {
      if (indexOf(uniqueHiddenColumns, col.id) === -1) {
        filteredColumns.push(col.id);
      }
    });
    const dbDetails = { view: selectedData.reportDefinition.dataSource.id, dbcolumns: filteredColumns, qwhere: selectedData.reportDefinition.query.report.where, reportName: selectedData.name };
    this.props.dispatch(downloadReport(dbDetails));
  };

  onTabClick = (key) => {
    console.log('TAB KEY', key);
    if (this.state.activeTab !== key) {
      this.setState({ activeTab: key });
    }
  }

  handleBarClick = (element, id) => {
    console.log(`The bin ${element.text} with id ${id} was clicked`);
  };

  render() {
    const myScrollbar = {
      width: '100%',
      height: '72vh'
    };

    const tabList = this.state.selectedReports.map((report) =>
      <Tab
        eventKey={report.id}
        title={report.name}
        key={report.id}
      >
        <div className="row panel" style={{ minHeight: 500 }}>
          <Col lg={12} md={12} sm={12} key={report.id}>
            <div className="row " style={{ minHeight: 500 }}>
              <div className="block-title">
                <h2 className="block-title-text">{this.props.reportsList.length > 0 ? report.name : ''}
                  <div className="text-right margin-right displayInline">
                    <button bsSize="small" id={report.id} className="btn btn-primary btn-download fa fa-download" onClick={this.onDownloadReport}>
                      <span className="block-title-text-download">&nbsp;&nbsp;Download</span>
                    </button>
                  </div><br className="clear" />
                </h2>
              </div>
              {this.props.reportsList.length > 0 && <ReportViewer ref={(reportGrid) => { this.reportGrid = reportGrid; }} report={report.reportDefinition} />}
            </div>
          </Col>
        </div>
      </Tab>
    );

    return (
      <ReactScrollbar style={myScrollbar}>
        <Row>
          <Col lg={12} md={12}>
            <div className="block-title">
              <div className="block-title-icon">
                <PieChartIconSvg />
              </div>
              <h2 className="block-title-text">Open Reports</h2>
            </div>
            <img className="amcharts-placeholder" src="/assets/images/amcharts.jpg" alt="" />
          </Col>
        </Row>
        <Row>
          <Col lg={12} md={12}>
            <div className="block-title">
              <div className="block-title-icon">
                <PieChartIconSvg />
              </div>
              <h2 className="block-title-text">Risk Reports</h2>
            </div>
            <div ref={(root) => { this.root = root; }}>
              <div style={{ width: '50%' }}>
                <BarChart
                  ylabel="Value"
                  width={this.state.width}
                  height={500}
                  margin={margin}
                  data={data}
                  onBarClick={this.handleBarClick}
                />
              </div>
            </div>
          </Col>
        </Row>

        <Row >
          <Col lg={12} md={12} sm={12}>
            <div className="panel">
              <Tabs
                activeKey={this.state.activeTab}
                onSelect={this.onTabClick}
                id="dashboardReportTabs"
                className="tab-section"
              >
                {tabList}
              </Tabs>
            </div>
          </Col>
        </Row>
      </ReactScrollbar>
    );
  }
}

// export default DashBoard;
function mapStateToProps(state) {
  return { reportsList: state.reports.reportsList };
}

export default connect(mapStateToProps)(DashBoard);
