import React, { Component } from 'react';
import {DatePicker} from 'antd'
import 'antd/dist/antd.css';

import moment from 'moment';
const RangePicker = DatePicker.RangePicker;

class App extends Component {


    getNowFormatDate=()=> {
        let date=new Date();
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

            />
            <span>当前日期为：{this.getNowFormatDate()} </span>
        </div>
    );
  }
}

export default App;
