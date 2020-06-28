import Axios from 'axios'
// export const URL = 'http://localhost:3110/'///小木服务器数据库 3008正式 3010测试
export const XUNFEIURL = 'http://60.166.13.169:6677/api/v1'; ///讯飞服务器地址
export var appKey = 'TestKey'; ///可变key 又讯飞提供
export const CLURL = 'http://chengliankeji.cn:3110'
export var JAVASERVERURL = 'http://chengliankeji.cn/firstWeb_war'; ///JAVA tomcat 地址
// export var JAVASERVERURL = 'http://localhost:8080/firstWeb'
/////////////////////////////////////////////
export const EXTRA_APP_KEY = `?appKey=${appKey}`;
// export const XUNFEIURLWD = `${XUNFEIURL}/wd/`; ///获取数据字典 get
export const XUNFEIURLXQ = `${XUNFEIURL}/xq${EXTRA_APP_KEY}`; ///2小区
export const XUNFEIURLCRK = `${XUNFEIURL}/crk${EXTRA_APP_KEY}`; ///3小区出入口
export const XUNFEIURLRK = `${XUNFEIURL}/rk${EXTRA_APP_KEY}`; ///4人口
export const XUNFEIURLLD = `${XUNFEIURL}/ld${EXTRA_APP_KEY}`; ///5楼栋信息
export const XUNFEIURLFW = `${XUNFEIURL}/fw${EXTRA_APP_KEY}`; ///6房屋信息
export const XUNFEIURLZPJ = `${XUNFEIURL}/zpj${EXTRA_APP_KEY}`; ///7抓拍机信息
export const XUNFEIURLMJXT = `${XUNFEIURL}/mjxt${EXTRA_APP_KEY}`; ///8门禁系统信息
export const XUNFEIURLCLXX = `${XUNFEIURL}/clxx${EXTRA_APP_KEY}`; ///9车辆信息
export const XUNFEIURLCLDZ = `${XUNFEIURL}/cldz${EXTRA_APP_KEY}`; ///10车辆道闸（卡口）信息
export const XUNFEIURLZPJL = `${XUNFEIURL}/stk/zpjl${EXTRA_APP_KEY}`; ///11人脸抓拍记录信息-视图库标准
export const XUNFEIURLRYTXJL = `${XUNFEIURL}/stk/rytxjl${EXTRA_APP_KEY}`; ///12人员通行记录信息-视图库标准
export const XUNFEIURLCLTXJL = `${XUNFEIURL}/stk/cltxjl${EXTRA_APP_KEY}`; ///13车辆通行记录信息-视图库标准
/////////////////////////////////////////////

export default {
    /**
     * 截图
     */
    cutFaceImage: (params, f1, f2) => {
        if (f1) {
            return Axios.post(`${CLURL}/cutFaceImage`, params).then(res => {
                if (f1) { f1(res) }
            }).catch(res => {
                if (f2) { f2(res) }
            })
        } else {
            return Axios.post(`${CLURL}/cutFaceImage`, params, f1, f2)
        }
    },
    /**
     * 通过JAVA服务器完成参数的加密等其他服务
     */
    encodeByJavaServer: (params, f1, f2) => {
        if (f1) {
            return Axios.post(`${JAVASERVERURL}/encode`, params).then(res => {
                if (f1) { f1(res) }
            }).catch(res => {
                if (f2) { f2(res) }
            })
        } else {
            return Axios.post(`${JAVASERVERURL}/encode`, params, f1, f2)
        }
    },
    /**
     * 2上传小区信息
     */
    uploadCommunityInfo: (params, f1, f2) => {
        if (f1) {
            return Axios.post(XUNFEIURLXQ, params).then(res => {
                if (f1) { f1(res) }
            }).catch(res => {
                if (f2) { f2(res) }
            })
        } else {
            return Axios.post(XUNFEIURLXQ, params, f1, f2)
        }
    },
    /**
     * 3上传小区出入信息
     */
    uploadCommunityEntranceInfo: (params, f1, f2) => {
        if (f1) {
            return Axios.post(XUNFEIURLCRK, params).then(res => {
                if (f1) { f1(res) }
            }).catch(res => {
                if (f2) { f2(res) }
            })
        } else {
            return Axios.post(XUNFEIURLCRK, params, f1, f2)
        }
    },
    /**
     * 4上传个人信息
     */
    uploadPersonInfo: (params, f1, f2) => {
        if (f1) {
            return Axios.post(XUNFEIURLRK, params).then(res => {
                if (f1) { f1(res) }
            }).catch(res => {
                if (f2) { f2(res) }
            })
        } else {
            return Axios.post(XUNFEIURLRK, params, f1, f2)
        }
    },
    /**
     * 5上传楼栋信息
     */
    uploadBuildingInfo: (params, f1, f2) => {
        if (f1) {
            return Axios.post(XUNFEIURLLD, params).then(res => {
                if (f1) { f1(res) }
            }).catch(res => {
                if (f2) { f2(res) }
            })
        } else {
            return Axios.post(XUNFEIURLLD, params, f1, f2)
        }
    },
    /**
     * 6上传房屋信息
     */
    uploadHouseInfo: (params, f1, f2) => {
        if (f1) {
            return Axios.post(XUNFEIURLFW, params).then(res => {
                if (f1) { f1(res) }
            }).catch(res => {
                if (f2) { f2(res) }
            })
        } else {
            return Axios.post(XUNFEIURLFW, params, f1, f2)
        }
    },
    /**
     * 7上传抓拍机信息
     */
    uploadCaptureInfo: (params, f1, f2) => {
        if (f1) {
            return Axios.post(XUNFEIURLZPJ, params).then(res => {
                if (f1) { f1(res) }
            }).catch(res => {
                if (f2) { f2(res) }
            })
        } else {
            return Axios.post(XUNFEIURLZPJ, params, f1, f2)
        }
    },
    /**
     * 8上传门禁系统信息
     */
    uploadSecuritySystemInfo: (params, f1, f2) => {
        if (f1) {
            return Axios.post(XUNFEIURLMJXT, params).then(res => {
                if (f1) { f1(res) }
            }).catch(res => {
                if (f2) { f2(res) }
            })
        } else {
            return Axios.post(XUNFEIURLMJXT, params, f1, f2)
        }
    },
    /**
     * 9上传车辆信息
     */
    uploadCarInfo: (params, f1, f2) => {
        if (f1) {
            return Axios.post(XUNFEIURLCLXX, params).then(res => {
                if (f1) { f1(res) }
            }).catch(res => {
                if (f2) { f2(res) }
            })
        } else {
            return Axios.post(XUNFEIURLCLXX, params, f1, f2)
        }
    },
    /**
     * 10上传车辆道闸（卡口）信息
     */
    uploadCarCustomsInfo: (params, f1, f2) => {
        if (f1) {
            return Axios.post(XUNFEIURLCLDZ, params).then(res => {
                if (f1) { f1(res) }
            }).catch(res => {
                if (f2) { f2(res) }
            })
        } else {
            return Axios.post(XUNFEIURLCLDZ, params, f1, f2)
        }
    },
    /**
     * 11上传人脸抓拍记录信息-视图库标准
     */
    uploadFaceByCaptureInfo: (params, f1, f2) => {
        if (f1) {
            return Axios.post(XUNFEIURLZPJL, params).then(res => {
                if (f1) { f1(res) }
            }).catch(res => {
                if (f2) { f2(res) }
            })
        } else {
            return Axios.post(XUNFEIURLZPJL, params, f1, f2)
        }
    },
    /**
     * 12上传人员通行记录信息-视图库标准
     */
    uploadPeopleCommuteInfo: (params, f1, f2) => {
        if (f1) {
            return Axios.post(XUNFEIURLRYTXJL, params).then(res => {
                if (f1) { f1(res) }
            }).catch(res => {
                if (f2) { f2(res) }
            })
        } else {
            return Axios.post(XUNFEIURLRYTXJL, params, f1, f2)
        }
    },
    /**
     * 13上传车辆通行记录信息-视图库标准
     */
    uploadCarCommuteInfo: (params, f1, f2) => {
        if (f1) {
            return Axios.post(XUNFEIURLCLTXJL, params).then(res => {
                if (f1) { f1(res) }
            }).catch(res => {
                if (f2) { f2(res) }
            })
        } else {
            return Axios.post(XUNFEIURLCLTXJL, params, f1, f2)
        }
    },
}
