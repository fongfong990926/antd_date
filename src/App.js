import React from 'react';
import moment from 'moment';
import 'antd/dist/antd.css';
import {DatePicker} from 'antd'
const RangePicker = DatePicker.RangePicker;

class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            time: moment()
        };
        this.handleChange = this.handleChange.bind(this);
    }
    getNowFormatDate=()=> {
        let date=this.state.time;
        let seperator1 = "-";
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        let currentdate = year + seperator1 + month + seperator1 + strDate;
        return currentdate;

    }

    handleChange(date) {
        const  time =date.getNowFormatDate();
        this.setState({
           time
        });
    }
    render(){
        return (
            <div>
                <RangePicker
                    ranges={{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }}
                    showTime
                    format="YYYY-MM-DD "
                />
                <br/>
                <DatePicker renderExtraFooter={() => 'extra footer'}
                             selected={this.state.time}
                             onChange={this.handleChange}/>
                <span>当前日期为：{this.state.time} </span>
            </div>
        );
    }
}

export default App;