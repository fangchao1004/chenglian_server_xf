import React, { Component } from 'react';
import { Input, Button, Row, Col, Popconfirm, message } from 'antd';
import HttpApi, { appKey } from './util/HttpApi';
import Data from './util/Data'

const testStr = `测试数据: {"name":"tom","age":10}`
const placeholderStr = `json格式`

export default class MainView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value2: null,
            value3: null,
            value4: null,
            value5: null,
            value6: null,
            value7: null,
            value8: null,
            value9: null,
            value10: null,
            value11: null,
            value12: null,
            value13: null,
            originImgUrl: '',
            faceImgBase64: ''
        }
    }
    parseInfoAndUpload = (data, apiKey) => {
        try {
            console.log('apiKey:', apiKey)
            if (!data) { message.error('不可为空'); return; }
            let dataObj = JSON.parse(data);
            HttpApi.encodeByJavaServer(dataObj, (res) => {
                if (res.data.code === '0') {
                    console.log('参数加密:', res.data.data)
                    HttpApi[apiKey](res.data.data, (res) => {
                        if (res.data.code === "0") { message.success(`${apiKey}上传成功`, 5); console.log('==========上传成功=========='); }
                        else { message.error(`${apiKey}上传失败;查看控制台:${res.data.errMsg}`, 7); console.table(res.data); }
                    })
                }
            })
        } catch (error) {
            message.error('json 解析有问题');
        }
    }
    render() {
        return (
            <div style={{ width: '80%' }}>
                <div>手动填写数据上传至讯飞服务器--测试环境-AppKey={appKey}</div>
                <h5 style={{ color: "orange" }}>{testStr}</h5>
                {/* ///////////////////////////////////// */}
                <div>
                    <span>初始图片</span>
                    <img src={this.state.originImgUrl} style={{ width: 200 }} alt='' />
                    <span>截取图片</span>
                    <img src={this.state.faceImgBase64} alt='' />
                    <Input.TextArea placeholder='输入图片网络地址' value={this.state.originImgUrl} onChange={(e) => { this.setState({ originImgUrl: e.target.value }) }} />
                    <Button onClick={async () => {
                        let params = { imageUrl: this.state.originImgUrl };
                        console.log('params:', params)
                        let result = await HttpApi.cutFaceImage(params)
                        console.log('result:', result.data)
                        if (result.data.code === 0) {
                            this.setState({ faceImgBase64: result.data.data })
                        } else { message.error(result.data.data) }
                    }}>截取</Button>
                </div>
                <Row gutter={[24, 24]} style={{ marginTop: 24 }} align='middle'>
                    <Col span={4}>
                        <span style={{ fontSize: 15 }}>2小区基本信息 ok</span>
                    </Col>
                    <Col span={16}>
                        <Input.TextArea allowClear value={this.state.value2} placeholder={placeholderStr} autoSize={{ minRows: 5, maxRows: 10 }} onChange={(e) => { this.setState({ value2: e.target.value }) }} />
                    </Col>
                    <Col span={4}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Button type='primary' onClick={() => { this.setState({ value2: JSON.stringify(Data.communityData) }) }}>模版数据</Button>
                            <Popconfirm title='确认上传该信息？' onConfirm={() => { this.parseInfoAndUpload(this.state.value2, 'uploadCommunityInfo') }}>
                                <Button type='primary' danger>上传</Button>
                            </Popconfirm>
                        </div>
                    </Col>
                </Row>
                {/* ///////////////////////////////////// */}
                <Row gutter={[24, 24]} align='middle'>
                    <Col span={4}>
                        <span style={{ fontSize: 15 }}>3小区出入口信息 ok</span>
                    </Col>
                    <Col span={16}>
                        <Input.TextArea allowClear value={this.state.value3} placeholder={placeholderStr} autoSize={{ minRows: 5, maxRows: 10 }} onChange={(e) => { this.setState({ value3: e.target.value }) }} />
                    </Col>
                    <Col span={4}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Button type='primary' onClick={() => { this.setState({ value3: JSON.stringify(Data.communityEntranceData) }) }}>模版数据</Button>
                            <Popconfirm title='确认上传该信息？' onConfirm={() => { this.parseInfoAndUpload(this.state.value3, 'uploadCommunityEntranceInfo') }}>
                                <Button type='primary' danger>上传</Button>
                            </Popconfirm>
                        </div>
                    </Col>
                </Row>
                {/* ///////////////////////////////////// */}
                <Row gutter={[24, 24]} align='middle'>
                    <Col span={4}>
                        <span style={{ fontSize: 15 }}>5楼栋信息 ok</span>
                    </Col>
                    <Col span={16}>
                        <Input.TextArea allowClear value={this.state.value5} placeholder={placeholderStr} autoSize={{ minRows: 5, maxRows: 10 }} onChange={(e) => { this.setState({ value5: e.target.value }) }} />
                    </Col>
                    <Col span={4}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Button type='primary' onClick={() => { this.setState({ value5: JSON.stringify(Data.buildingData) }) }}>模版数据</Button>
                            <Popconfirm title='确认上传该信息？' onConfirm={() => { this.parseInfoAndUpload(this.state.value5, 'uploadBuildingInfo') }}>
                                <Button type='primary' danger>上传</Button>
                            </Popconfirm>
                        </div>
                    </Col>
                </Row>
                {/* ///////////////////////////////////// */}
                <Row gutter={[24, 24]} align='middle'>
                    <Col span={4}>
                        <span style={{ fontSize: 15 }}>6房屋信息 ok</span>
                    </Col>
                    <Col span={16}>
                        <Input.TextArea allowClear value={this.state.value6} placeholder={placeholderStr} autoSize={{ minRows: 5, maxRows: 10 }} onChange={(e) => { this.setState({ value6: e.target.value }) }} />
                    </Col>
                    <Col span={4}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Button type='primary' onClick={() => { this.setState({ value6: JSON.stringify(Data.houseData) }) }}>模版数据</Button>
                            <Popconfirm title='确认上传该信息？' onConfirm={() => { this.parseInfoAndUpload(this.state.value6, 'uploadHouseInfo') }}>
                                <Button type='primary' danger>上传</Button>
                            </Popconfirm>
                        </div>
                    </Col>
                </Row>
                {/* ///////////////////////////////////// */}
                <Row gutter={[24, 24]} align='middle'>
                    <Col span={4}>
                        <span style={{ fontSize: 15 }}>4人员信息 ok</span>
                    </Col>
                    <Col span={16}>
                        <Input.TextArea allowClear value={this.state.value4} placeholder={placeholderStr} autoSize={{ minRows: 5, maxRows: 10 }} onChange={(e) => { this.setState({ value4: e.target.value }) }} />
                    </Col>
                    <Col span={4}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Button type='primary' onClick={() => { this.setState({ value4: JSON.stringify(Data.personData) }) }}>模版数据</Button>
                            <Popconfirm title='确认上传该信息？' onConfirm={() => { this.parseInfoAndUpload(this.state.value4, 'uploadPersonInfo') }}>
                                <Button type='primary' danger>上传</Button>
                            </Popconfirm>
                        </div>
                    </Col>
                </Row>
                {/* ///////////////////////////////////// */}
                <Row gutter={[24, 24]} align='middle'>
                    <Col span={4}>
                        <span style={{ fontSize: 15 }}>7抓拍机信息 ok</span>
                    </Col>
                    <Col span={16}>
                        <Input.TextArea allowClear value={this.state.value7} placeholder={placeholderStr} autoSize={{ minRows: 5, maxRows: 10 }} onChange={(e) => { this.setState({ value7: e.target.value }) }} />
                    </Col>
                    <Col span={4}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Button type='primary' onClick={() => { this.setState({ value7: JSON.stringify(Data.captureData) }) }}>模版数据</Button>
                            <Popconfirm title='确认上传该信息？' onConfirm={() => { this.parseInfoAndUpload(this.state.value7, 'uploadCaptureInfo') }}>
                                <Button type='primary' danger>上传</Button>
                            </Popconfirm>
                        </div>
                    </Col>
                </Row>
                {/* ///////////////////////////////////// */}
                <Row gutter={[24, 24]} align='middle'>
                    <Col span={4}>
                        <span style={{ fontSize: 15 }}>8门禁系统信息 ok</span>
                    </Col>
                    <Col span={16}>
                        <Input.TextArea allowClear value={this.state.value8} placeholder={placeholderStr} autoSize={{ minRows: 5, maxRows: 10 }} onChange={(e) => { this.setState({ value8: e.target.value }) }} />
                    </Col>
                    <Col span={4}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Button type='primary' onClick={() => { this.setState({ value8: JSON.stringify(Data.securitySystem) }) }}>模版数据</Button>
                            <Popconfirm title='确认上传该信息？' onConfirm={() => { this.parseInfoAndUpload(this.state.value8, 'uploadSecuritySystemInfo') }}>
                                <Button type='primary' danger>上传</Button>
                            </Popconfirm>
                        </div>
                    </Col>
                </Row>
                {/* ///////////////////////////////////// */}
                <Row gutter={[24, 24]} align='middle'>
                    <Col span={4}>
                        <span style={{ fontSize: 15 }}>11人脸抓拍记录信息-视图库标准 ok</span>
                    </Col>
                    <Col span={16}>
                        <Input.TextArea allowClear value={this.state.value11} placeholder={placeholderStr} autoSize={{ minRows: 5, maxRows: 10 }} onChange={(e) => { this.setState({ value11: e.target.value }) }} />
                    </Col>
                    <Col span={4}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Button type='primary' onClick={() => { this.setState({ value11: JSON.stringify(Data.faceByCapture) }) }}>模版数据</Button>
                            <Popconfirm title='确认上传该信息？' onConfirm={() => { this.parseInfoAndUpload(this.state.value11, 'uploadFaceByCaptureInfo') }}>
                                <Button type='primary' danger>上传</Button>
                            </Popconfirm>
                        </div>
                    </Col>
                </Row>
                {/* ///////////////////////////////////// */}
                <Row gutter={[24, 24]} align='middle'>
                    <Col span={4}>
                        <span style={{ fontSize: 15 }}>12人员通行记录信息-视图库标准 ok</span>
                    </Col>
                    <Col span={16}>
                        <Input.TextArea allowClear value={this.state.value12} placeholder={placeholderStr} autoSize={{ minRows: 5, maxRows: 10 }} onChange={(e) => { this.setState({ value12: e.target.value }) }} />
                    </Col>
                    <Col span={4}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Button type='primary' onClick={() => { this.setState({ value12: JSON.stringify(Data.peopleCommute) }) }}>模版数据</Button>
                            <Popconfirm title='确认上传该信息？' onConfirm={() => { this.parseInfoAndUpload(this.state.value12, 'uploadPeopleCommuteInfo') }}>
                                <Button type='primary' danger>上传</Button>
                            </Popconfirm>
                        </div>
                    </Col>
                </Row>
                {/* ///////////////////////////////////// */}
                <Row gutter={[24, 24]} align='middle'>
                    <Col span={4}>
                        <span style={{ fontSize: 15 }}>9车辆信息</span>
                    </Col>
                    <Col span={16}>
                        <Input.TextArea allowClear value={this.state.value9} placeholder={placeholderStr} autoSize={{ minRows: 5, maxRows: 10 }} onChange={(e) => { this.setState({ value9: e.target.value }) }} />
                    </Col>
                    <Col span={4}>
                        <Popconfirm title='确认上传该信息？' onConfirm={() => { this.parseInfoAndUpload(this.state.value9, 'uploadCarInfo') }}>
                            <Button type='primary' danger>上传</Button>
                        </Popconfirm>
                    </Col>
                </Row>
                {/* ///////////////////////////////////// */}
                <Row gutter={[24, 24]} align='middle'>
                    <Col span={4}>
                        <span style={{ fontSize: 15 }}>10车辆道闸（卡口）信息</span>
                    </Col>
                    <Col span={16}>
                        <Input.TextArea allowClear value={this.state.value10} placeholder={placeholderStr} autoSize={{ minRows: 5, maxRows: 10 }} onChange={(e) => { this.setState({ value10: e.target.value }) }} />
                    </Col>
                    <Col span={4}>
                        <Popconfirm title='确认上传该信息？' onConfirm={() => { this.parseInfoAndUpload(this.state.value10, 'uploadCarCustomsInfo') }}>
                            <Button type='primary' danger>上传</Button>
                        </Popconfirm>
                    </Col>
                </Row>
                {/* ///////////////////////////////////// */}
                <Row gutter={[24, 24]} align='middle'>
                    <Col span={4}>
                        <span style={{ fontSize: 15 }}>13车辆通行记录信息-视图库标准</span>
                    </Col>
                    <Col span={16}>
                        <Input.TextArea allowClear value={this.state.value13} placeholder={placeholderStr} autoSize={{ minRows: 5, maxRows: 10 }} onChange={(e) => { this.setState({ value13: e.target.value }) }} />
                    </Col>
                    <Col span={4}>
                        <Popconfirm title='确认上传该信息？' onConfirm={() => { this.parseInfoAndUpload(this.state.value13, 'uploadCarCommuteInfo') }}>
                            <Button type='primary' danger>上传</Button>
                        </Popconfirm>
                    </Col>
                </Row>
            </div >
        );
    }
}

