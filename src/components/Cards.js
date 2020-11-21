import React, { Component } from 'react'
import '../App.css';
import { Card, Avatar } from 'antd';
import Select from './Select';
import { AntDesignOutlined } from '@ant-design/icons';


export default class Cards extends Component {
    render() {

        const nama = this.props.nama
        const nim = this.props.nim
        const img = this.props.img
        return (
            <Card style={{ background: "#f3eac2", borderRadius: '25px', minWidth: '20vw' }}>
                <Avatar
                    size={{ xs: 30, sm: 35, md: 45, lg: 70, xl: 100, xxl: 120 }}
                    icon={<AntDesignOutlined />}
                    src={img}
                />
                <p></p>
                <p className="cards-text">{nama}</p>
                <p className="cards-text">{nim}</p>
                <Select>
                    <option>Kelas A</option>
                    <option>Kelas B</option>
                </Select>
            </Card>
        )
    }
}