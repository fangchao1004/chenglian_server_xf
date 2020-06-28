export default {
    /*
    1.8视图库标准
    ImageFormatType图片格式（string）
    数据值	    说明	    数据值	        说明
    Bmp	        BMP	        Gif	        GIF
    Jpeg	    JPEG	    Jfif	    JFIF
    Kdc	        KDC	        Pcd	        PCD
    Pcx	        PCX	        Pic	        PIC
    Pix	        PIX	        Png	        PNG
    Psd	        PSD	        Tapga	    TAPGA
    Tiff	    TIFF	    Wmf	        WMF
    Jp2	        JPEG2000	Other	    其他

    InfoType视频图像内容信息类别（int）
    数据值	类别	说明
    0	其他	
    1	自动采集	采集设备及视频分析系统设备
    2	人工采集	人工采集通过引用平台输入

    DataSourceType视频图像数据来源（string）
    数据值	说明
    1	政府机关监控
    2	社会治安监控
    3	交通监控（含轨道交通监控）
    4	出入境监控
    5	港口监控
    6	金融系统监控
    7	旅馆监控
    8	互联网营业场所监控
    9	娱乐服务场所监控
    10	其他企业/事业单位监控
    11	居民自建监控
    12	公安内部
    13	监所
    14	询问室
    15	车（船、直升机等）载终端设备
    16	移动执法
    17	手机、平板电脑拍摄
    18	DV拍摄
    19	相机拍摄
    20	网络获取
    21	声像资料片
    22	其他
    */
    /**
     * 小区信息
     */
    communityData: {
        "xqbm": "340102005003001",
        "xqmc": "快达小康苑",
        "ssqXzqhdm": "340102000000",
        "gajgjgdm": "340102490000",
        "sqdm": "340102005003",
        "xxdz": "安徽省合肥市瑶海区方庙快达小康苑",
        "wymc": "安徽仁地园",
        "jd": "117.341570",
        "wd": "31.874873",
        "dtzbj": "117.341803,31.874172;117.340798,31.874653;117.341650,31.875593;117.341048,31.874967;117.342169,31.875248;117.340921,31.874626",
        "tp": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACkklEQVR4Xu1aTWtTURScufWltBshpdDWopAWMelGXAc/UBelCPUf6V/xF4hdiwpZiIKLoiaghGpjqhVdSanN6x2pUKihmJz2pXmQE8hu7rnnzJ1z7ryXECP+4YjXDyfAFTDiDHgLjLgAfAhm2gLzmp8AJovY41QaWaRCc2vy/ec8q+zEBCxqcXxnP1lFxHUBFQJLAKaPKTaF0ERAHWCNUu1Lof4yL6SYCZjZrSyHEJeJsCKodKJChDaJpxDXksLO2gY3dk8UJ4NFZgLm9srKYN+jIT4BXFOIz+JYofaN69vW+HO/L18Bz90Fdbud1Fct6/NAwD/5knwNqBalBslmmqbN7YkPzXktFQEU0dGUhItCXBJRoXgNxMJhkHahbqrJBD7YZAAKsBxYT6wT4ArwFjC1tQnsM8CHoN8Cfg26D8jeCvc0NxaAGyE3Qm6ETN7GBHYj5EbIjZAbITdCboQyfylqMXo9se4E3Qm6EzSZOxPYnaA7wWOd4HcAm6BaEFuiNhFDSzG2wlgoSSoRKIEoA7jac4yfEnDmt0Dc162vE43n/eQ9/asykyS6KeIGhTsgFvtZZ8HkmoDuQg5/aYa4nAkZxON2Ur9vIezUQ9CigP8lNtupVIFYZWRVRJXA+R6F7AFYJ/hG0KuQhBctvvtoKf4AmxsCuhO/pPJsJw0lMpa0rwUw/JDw8+BLho2t8bd1a7HH4XNLQBbF9RPDCeiHpaOY7sfhrGaANY+s8K4AK5OugK4XIt4CBidoVdtZ4H0GWFn2GTDyM6BTeQLp3qFyrE9fVsUNGm+eARfS8ooiHv3916b0sD3eeDDoJAcZ30zAIJMZRmwnYBis52lPV0CeTmMYubgChsF6nvZ0BeTpNIaRyx/Sr3pQ4I2mpQAAAABJRU5ErkJggg==",
        "zdmj": "67",
        "bz": "备注",
        "jzmj": "23"
    },
    /**
     * 小区出入口信息
     * xqbm	String	15	小区编码	Y
        crkbm	String	19	出入口编码	Y
        crkmc	String	0…50	出入口名称	Y
        crkzp	String	-	出入口照片	Y
        lx	Integer	-	出入口类型 	Y
        jd	String	-	经度	Y
        wd	String	-	纬度	Y
     */
    communityEntranceData: {
        "xqbm": "340102005003001",
        "crkbm": "3401020050030011101",
        "crkmc": "openApi测试出入口",
        "crkzp": "<Base64图片编码>",
        "lx": "1",
        "jd": "117.222222",
        "wd": "31.034567"
    },
    /**
     * 楼栋信息 
     * xqbm	String	15	小区编码
        ldbm	String	18	楼栋编码
        ldh	String	0…6	楼栋号
        dys	Integer	0-127	单元数
        lcs	Integer	0-127	楼层数
        jd	String	-	经度
        wd	String	-	纬度
        hs	Integer	0-127	户数(每层房屋数量)
     */
    buildingData: {
        "xqbm": "340102005003001",
        "ldbm": "340102005003001001",
        "ldh": "1",
        "dys": 4,
        "lcs": 6,
        "jd": "117.302165",
        "wd": "31.302165",
        "hs": "50"
    },
    /**
     * 房屋信息
     * 
     * 小区编码 xqbm String Y
     * 楼栋编码 ldbm String Y
     * 房屋编码 fwbm String Y
     * 单元号 dyh String Y
     * 门牌号 mph String Y
     * 房屋状态代码 fwztdm Integer Y :[{"zdx":"2","zdz":"自住"},{"zdx":"1","zdz":"出租"},{"zdx":"4","zdz":"空置"},{"zdx":"9","zdz":"其他"}] N
     * 房屋用途代码 fwytdm Integer N [{"zdx":"1","zdz":"综合"},{"zdx":"2","zdz":"住宅"},{"zdx":"3","zdz":"商业"},{"zdx":"4","zdz":"厂房"},{"zdx":"5","zdz":"仓库"},{"zdx":"6","zdz":"办公"},{"zdx":"7","zdz":"临时建筑"},{"zdx":"9","zdz":"其他"}] N 
     * 楼层号 lch N
     * 产权性质代码 cqxzdm Integer N [{"zdx":"10","zdz":"国有房产"},{"zdx":"20","zdz":"集体所有房产"},{"zdx":"30","zdz":"私有房产"},{"zdx":"40","zdz":"联营企业房产"},{"zdx":"50","zdz":"股份制企业房产"},{"zdx":"60","zdz":"港、澳、台胞房产"},{"zdx":"70","zdz":"涉外房产"},{"zdx":"90","zdz":"其它"}]
     * 房屋面积 fwmj String N
     * 备注 bz String N
     */
    houseData: {
        "xqbm": "340102005003001",
        "ldbm": "340102005003001001",
        "fwbm": "340102005003001001030605",
        "dyh": "3",
        "mph": "605",
        "fwztdm": 2,
        "lch": "5",
        "fwytdm": "9",
        "cqxzdm": "70",
        "fwmj": "23",
        "bz": "备注"
    },
    /**
     * 人员信息录入时，要先将对应的房屋信息录入到讯飞服务器
     * 
     * xqbm	String	15	小区编码	Y
        xm	String	0…30	姓名	Y
        xbdm	Integer	-	性别代码	Y
        zjlxdm	Integer	-	证件类型代码	Y
        zjhm	String	0…30	证件号码	Y
        sjhm	String	0…30	手机号码	Y
        ryZp	String	-	人员照片	Y
        rklxdm	Integer	-	人口类型代码	Y
        csrq	String	-	出生日期	Y
        zzmmdm	String	-	政治面貌代码	Y
        yxqqsrq	String	-	有效期起始时间	N
        yxqjzrq	String	-	有效期截止时间	N
        zjzp	String	-	证件照片	N
        jgdm	String	-	籍贯代码	N
        zjdxz	String	0…200	证件地详址	N
        hjdxz	String	0…200	户籍地详址	N
        gjdm	String	-	国籍代码	N
        ywx	String	0…15	英文姓	N
        ywm	String	0…15	英文名	N
        mzdm	String	-	民族代码	N
        zjxydm	String	-	宗教信仰代码	N
        whcddm	Integer	-	文化程度代码	N
        hyzkdm	Integer	-	婚姻状况代码	N
        byzkdm	Integer	-	兵役状况代码	N
        bz	String	0…200	备注	N
        jzxxList				
        fwbm	String	24	房屋编码	Y
        yhzgxdm	String	-	与房主关系	Y
     */
    personData: {
        "xm": "tom",
        "xbdm": 1,
        "ryZp": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAClElEQVR4Xu2ZT2tTURDFf/MaEqsLIUVQKG1NI6ZWQVwH/6AuShHqN9Kv4icQuxYVshAFF6XQxj8hTYOCYlcizWtzR4IUbCgmk7w0DzJZZXHu3Jlzz8w97z1hwn8y4fXjBLgCJpwBb4EJF4APwURbYHeW6d9M55X2jBLy7Xamdv3bfiPNKhuYgE9FcqGVXVP0NnANWEbkQnexqhwK1BC2VKSSkVC5Uj94mxZSzARU53MrQcNKhKwqFAYs5CvwEljPRfH65Tr7A8YZepmZgO25rA696/EAO6q6PhXJqyiTrRS//PpujV9dyJYkyMOA3i814jXL+jQQcCxfgfeIVoKyHRHVgNrVRqu2OUv+DLl8izAzFcmcwrL8bb1bwOJRkFIjNtVkAnc2GYECLAfWE+sEuAK8BUxtbQL7DPAh6LeAX4PuA5K3wj3NjQXgRsiNkBshk7cxgd0IuRFyI+RGyI2QG6HEX4pajF5PrDtBd4LuBE3mzgR2J+hO8AQnqPoDkV2giWpTRHYVmhpC538BpND5hijCEnCz5xgfEnDqt4CGcG+pefi6n7w3F85djNoHdyORO4o+ECj2s86CSTUB3YUcfWkGWUmEDOF5aSd+bCFs6CFoUcD/EqvOZcoQlQOUBcrA+R6FxMCGIB9UwrtMO3pTbLY+W4rvYFNDQHfi9fmzl/Y1LghSCMjiFPIziO4Jshej9Rs78Za12JPwqSUgieL6ieEE9MPSv5jux+GkZoA1j6TwrgArk66Arhci3gIGJ2hV22ngfQZYWfYZ4DMg+wJ4dKQc69OXVXGjxptnwMf53GpQfQbkFZ4uNeIno05ylPHNBIwymXHEdgLGwXqa9nQFpOk0xpGLK2AcrKdpT1dAmk5jHLn8Ady+cFBXiy9dAAAAAElFTkSuQmCC",
        "sjhm": "15555555555",
        "csrq": "1990-03-07",
        "zjlxdm": "111",
        "zjhm": "34010219900307277X",
        "rklxdm": "1",
        "zzmmdm": "13",
        "jzxxList": [{
            "fwbm": "340102005003001001030605",
            "yhzgxdm": "99"
        }],
        "xqbm": "340102005003001"
    },
    /**
     * 抓拍机信息
     * 
     * 抓拍机编码 "zpjbm": "340102 40 01 119 7 001 001" 二十位
     *
     *  zpjbm	String	20	抓拍机编码	Y
        mc	String	0…40	相机名称	Y
        ip	String	-	IP地址	Y
        xqbm	String	15	小区编码	Y
        jd	String	-	经度	Y
        wd	String	-	纬度	Y
        lx	String	-	设备类型-对应系统配置SBLXDM	Y
        fx	String	-	方向	N
        dkh	String	0…5	端口号	N
        bbh	String	0…20	版本号	N
        xh	String	0…20	型号	N
        bz	String	0…200	备注	N
        glyzh	String	0…30	管理员账号	N
        glymm	String	0…30	管理员密码	N
     * 
     */
    captureData: {
        "bbh": "2.0",
        "bz": "测试",
        "csxx": "iflytek",
        "dkh": "80",
        "fx": "1",
        "glymm": "admin",
        "glyzh": "admin",
        "ip": "10.5.123.99",
        "jd": "117.303113",
        "lx": "2",
        "mc": "人脸抓拍机-测试1",
        "wd": "31.895616",
        "xh": "XD001",
        "xqbm": "340102005003001",
        "zpjbm": "34010240011197001001"
    },

    /**
     * 门禁信息
     * 
     * 门禁系统类型  ZD022 门禁系统类型代码 字典地址 http://60.166.13.169:6677/api/v1/wd/mjxtmmdm : [{"zdx":"D1-101F","zdz":"出入口服务器人脸"},{"zdx":"D1-101G","zdz":"出入口工控机人脸"},{"zdx":"D1-002B-101G-v","zdz":"出入口工控机人脸加边缘人脸可扩展"},{"zdx":"D1-100F-101F","zdz":"出入口服务器刷卡加服务器人脸"},{"zdx":"D1-100G-101G","zdz":"出入口工控机刷卡加工控机人脸"},{"zdx":"D2-100F","zdz":"单元楼服务器刷卡"},{"zdx":"D2-102F","zdz":"单元楼服务器人脸"},{"zdx":"D2-102F-103F","zdz":"单元楼服务器人脸加服务器声纹"},{"zdx":"D2-002B","zdz":"单元楼边缘计算人脸"},{"zdx":"D2-002B-003F-v","zdz":"单元楼边缘人脸加服务器声纹可扩展"},{"zdx":"D2-002B-003G-v","zdz":"单元楼边缘人脸加工控机声纹可扩展"},{"zdx":"D1-201F","zdz":"出入口抓拍机抓拍服务器比对，继电器开门"},{"zdx":"D1-201G","zdz":"出入口抓拍机抓拍工控机比对，继电器开门"},{"zdx":"D1-002B-201G","zdz":"出入口工控机比对继电器开门、边缘计算门禁机开门"}]
     * 门禁类型 ZD029 门禁类型 字典地址 http://60.166.13.169:6677/api/v1/wd/mjlxdm : [{"zdx":"1","zdz":"普通刷卡门禁"},{"zdx":"2","zdz":"人脸/声纹复合门禁"},{"zdx":"3","zdz":"人脸抓拍机复合门禁"}]
     * 
     * 这里感觉 讯飞 把 门禁系统类型 mjxtlx 和 门禁类型 mjlx 搞反了
     * 
     * mjxtbm	String	22	门禁系统编码	Y
        mjxtmc	String	0…50	门禁系统名称	Y
        xqbm	String	15	小区编码	Y
        fx	String	-	进出方向 	Y
        jd	String	-	经度	Y
        wd	String	-	纬度	Y
        mlx	String	-	门类型	Y
        mjlx	String	-	门禁类型	Y 
        mjxtlx	String	-	门禁系统类型	Y
        ldbm	String	18	楼栋编码	N
        dyh	String	0…4	单元号	N
        crkbm	String	19	小区出入口编码	N
     */
    securitySystem: {
        "fx": "1",
        "jd": "117.200164",
        "mjlx": "D1-101F",
        "mjxtbm": "3401020050030011130001",
        "mjxtmc": "门禁系统名称-测试东门门禁一体机 0001",
        "mlx": "1",
        "mjxtlx": "2",
        "wd": "31.839976",
        "xqbm": "340102005003001"
    },
    /**
     * 人脸抓拍记录信息
     * snapNo	String	20	抓拍机编码	Y
        areaNo	String	15	小区编码	Y 340102005003001 快达小康苑
        snapTime	String	-	抓拍时间	Y
        snapSmallImage	String	-	抓拍小图	Y 人脸区域截图
        snapBigImage	String	-	抓拍大图	Y 抓拍背景图
        infoKind	Integer	-	信息分类	Y  0 其他 1 自动采集 采集设备及视频分析系统设备 2 人工采集 人工采集通过引用平台输入
        imageSource	String	-	图像来源	Y   19	相机拍摄
        fileFormat	String	-	图像文件格式	Y
        shotPlaceFullAddress	String	0…100	拍摄地点地址	Y
        title	String	0…100	题名	Y
        contentDescription	String	0…200	内容描述	Y
     * 
     * 
     */
    faceByCapture: {
        "areaNo": "340102005003001",
        "snapBigImage": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAClElEQVR4Xu2ZT2tTURDFf/MaEqsLIUVQKG1NI6ZWQVwH/6AuShHqN9Kv4icQuxYVshAFF6XQxj8hTYOCYlcizWtzR4IUbCgmk7w0DzJZZXHu3Jlzz8w97z1hwn8y4fXjBLgCJpwBb4EJF4APwURbYHeW6d9M55X2jBLy7Xamdv3bfiPNKhuYgE9FcqGVXVP0NnANWEbkQnexqhwK1BC2VKSSkVC5Uj94mxZSzARU53MrQcNKhKwqFAYs5CvwEljPRfH65Tr7A8YZepmZgO25rA696/EAO6q6PhXJqyiTrRS//PpujV9dyJYkyMOA3i814jXL+jQQcCxfgfeIVoKyHRHVgNrVRqu2OUv+DLl8izAzFcmcwrL8bb1bwOJRkFIjNtVkAnc2GYECLAfWE+sEuAK8BUxtbQL7DPAh6LeAX4PuA5K3wj3NjQXgRsiNkBshk7cxgd0IuRFyI+RGyI2QG6HEX4pajF5PrDtBd4LuBE3mzgR2J+hO8AQnqPoDkV2giWpTRHYVmhpC538BpND5hijCEnCz5xgfEnDqt4CGcG+pefi6n7w3F85djNoHdyORO4o+ECj2s86CSTUB3YUcfWkGWUmEDOF5aSd+bCFs6CFoUcD/EqvOZcoQlQOUBcrA+R6FxMCGIB9UwrtMO3pTbLY+W4rvYFNDQHfi9fmzl/Y1LghSCMjiFPIziO4Jshej9Rs78Za12JPwqSUgieL6ieEE9MPSv5jux+GkZoA1j6TwrgArk66Arhci3gIGJ2hV22ngfQZYWfYZ4DMg+wJ4dKQc69OXVXGjxptnwMf53GpQfQbkFZ4uNeIno05ylPHNBIwymXHEdgLGwXqa9nQFpOk0xpGLK2AcrKdpT1dAmk5jHLn8Ady+cFBXiy9dAAAAAElFTkSuQmCC",
        "snapNo": "34010240011197001001",
        "snapTime": "2019-01-01 12:12:12",
        "snapSmallImage": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAClElEQVR4Xu2ZT2tTURDFf/MaEqsLIUVQKG1NI6ZWQVwH/6AuShHqN9Kv4icQuxYVshAFF6XQxj8hTYOCYlcizWtzR4IUbCgmk7w0DzJZZXHu3Jlzz8w97z1hwn8y4fXjBLgCJpwBb4EJF4APwURbYHeW6d9M55X2jBLy7Xamdv3bfiPNKhuYgE9FcqGVXVP0NnANWEbkQnexqhwK1BC2VKSSkVC5Uj94mxZSzARU53MrQcNKhKwqFAYs5CvwEljPRfH65Tr7A8YZepmZgO25rA696/EAO6q6PhXJqyiTrRS//PpujV9dyJYkyMOA3i814jXL+jQQcCxfgfeIVoKyHRHVgNrVRqu2OUv+DLl8izAzFcmcwrL8bb1bwOJRkFIjNtVkAnc2GYECLAfWE+sEuAK8BUxtbQL7DPAh6LeAX4PuA5K3wj3NjQXgRsiNkBshk7cxgd0IuRFyI+RGyI2QG6HEX4pajF5PrDtBd4LuBE3mzgR2J+hO8AQnqPoDkV2giWpTRHYVmhpC538BpND5hijCEnCz5xgfEnDqt4CGcG+pefi6n7w3F85djNoHdyORO4o+ECj2s86CSTUB3YUcfWkGWUmEDOF5aSd+bCFs6CFoUcD/EqvOZcoQlQOUBcrA+R6FxMCGIB9UwrtMO3pTbLY+W4rvYFNDQHfi9fmzl/Y1LghSCMjiFPIziO4Jshej9Rs78Za12JPwqSUgieL6ieEE9MPSv5jux+GkZoA1j6TwrgArk66Arhci3gIGJ2hV22ngfQZYWfYZ4DMg+wJ4dKQc69OXVXGjxptnwMf53GpQfQbkFZ4uNeIno05ylPHNBIwymXHEdgLGwXqa9nQFpOk0xpGLK2AcrKdpT1dAmk5jHLn8Ady+cFBXiy9dAAAAAElFTkSuQmCC",
        "infoKind": 1,
        "imageSource": "19",
        "fileFormat": "Gif",
        "shotPlaceFullAddress": "安徽省合肥市蜀山区南七街道南七路66号1栋7单元301",
        "title": "标题",
        "contentDescription": "内容描述"
    },
    /**
     * 人员通行记录
     * 
     * ZD018	通行方式  http://ip:port/api/v1/wd/txfsdm [{"zdx":"1","zdz":"刷卡开门"},{"zdx":"2","zdz":"人脸识别开门"},{"zdx":"4","zdz":"声纹识别开门"},{"zdx":"5","zdz":"app开门"}]
     * 
     * accessControlNo	String	22	门禁系统编码	Y 小区的门禁编码 3401020050030011130001
        cardNo	String	0…30	证件号码	Y  通过Vcard的vid 结合自身数据库 查询出在数据库注册过的 某人 获取他的身份证号码
        areaNo	String	15	小区编码	Y
        accessType	String	-	通行方式	Y
        accessTime	String	-	开门时间	Y
        snapSmallImage	String	-	抓拍小图	Y/N
        snapBigImage	String	-	抓拍大图	Y/N
        infoKind	Integer	-	信息分类	Y/N
        imageSource	String	-	图像来源	Y/N
        fileFormat	String	-	图像文件格式	Y/N
        shotPlaceFull
        Address	String	0…100	拍摄地点地址	Y/N
        title	String	0…100	题名	Y/N
        contentDescription	String	0…200	内容描述	Y/N
     */
    peopleCommute: {
        "accessType": "2",
        "accessTime": "2019-01-01 12:12:12",
        "accessControlNo": "3401020050030011130001",
        "areaNo": "340102005003001",
        "cardNo": "34010219900307277X",
        "snapBigImage": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAClElEQVR4Xu2ZT2tTURDFf/MaEqsLIUVQKG1NI6ZWQVwH/6AuShHqN9Kv4icQuxYVshAFF6XQxj8hTYOCYlcizWtzR4IUbCgmk7w0DzJZZXHu3Jlzz8w97z1hwn8y4fXjBLgCJpwBb4EJF4APwURbYHeW6d9M55X2jBLy7Xamdv3bfiPNKhuYgE9FcqGVXVP0NnANWEbkQnexqhwK1BC2VKSSkVC5Uj94mxZSzARU53MrQcNKhKwqFAYs5CvwEljPRfH65Tr7A8YZepmZgO25rA696/EAO6q6PhXJqyiTrRS//PpujV9dyJYkyMOA3i814jXL+jQQcCxfgfeIVoKyHRHVgNrVRqu2OUv+DLl8izAzFcmcwrL8bb1bwOJRkFIjNtVkAnc2GYECLAfWE+sEuAK8BUxtbQL7DPAh6LeAX4PuA5K3wj3NjQXgRsiNkBshk7cxgd0IuRFyI+RGyI2QG6HEX4pajF5PrDtBd4LuBE3mzgR2J+hO8AQnqPoDkV2giWpTRHYVmhpC538BpND5hijCEnCz5xgfEnDqt4CGcG+pefi6n7w3F85djNoHdyORO4o+ECj2s86CSTUB3YUcfWkGWUmEDOF5aSd+bCFs6CFoUcD/EqvOZcoQlQOUBcrA+R6FxMCGIB9UwrtMO3pTbLY+W4rvYFNDQHfi9fmzl/Y1LghSCMjiFPIziO4Jshej9Rs78Za12JPwqSUgieL6ieEE9MPSv5jux+GkZoA1j6TwrgArk66Arhci3gIGJ2hV22ngfQZYWfYZ4DMg+wJ4dKQc69OXVXGjxptnwMf53GpQfQbkFZ4uNeIno05ylPHNBIwymXHEdgLGwXqa9nQFpOk0xpGLK2AcrKdpT1dAmk5jHLn8Ady+cFBXiy9dAAAAAElFTkSuQmCC",
        "snapSmallImage": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAClElEQVR4Xu2ZT2tTURDFf/MaEqsLIUVQKG1NI6ZWQVwH/6AuShHqN9Kv4icQuxYVshAFF6XQxj8hTYOCYlcizWtzR4IUbCgmk7w0DzJZZXHu3Jlzz8w97z1hwn8y4fXjBLgCJpwBb4EJF4APwURbYHeW6d9M55X2jBLy7Xamdv3bfiPNKhuYgE9FcqGVXVP0NnANWEbkQnexqhwK1BC2VKSSkVC5Uj94mxZSzARU53MrQcNKhKwqFAYs5CvwEljPRfH65Tr7A8YZepmZgO25rA696/EAO6q6PhXJqyiTrRS//PpujV9dyJYkyMOA3i814jXL+jQQcCxfgfeIVoKyHRHVgNrVRqu2OUv+DLl8izAzFcmcwrL8bb1bwOJRkFIjNtVkAnc2GYECLAfWE+sEuAK8BUxtbQL7DPAh6LeAX4PuA5K3wj3NjQXgRsiNkBshk7cxgd0IuRFyI+RGyI2QG6HEX4pajF5PrDtBd4LuBE3mzgR2J+hO8AQnqPoDkV2giWpTRHYVmhpC538BpND5hijCEnCz5xgfEnDqt4CGcG+pefi6n7w3F85djNoHdyORO4o+ECj2s86CSTUB3YUcfWkGWUmEDOF5aSd+bCFs6CFoUcD/EqvOZcoQlQOUBcrA+R6FxMCGIB9UwrtMO3pTbLY+W4rvYFNDQHfi9fmzl/Y1LghSCMjiFPIziO4Jshej9Rs78Za12JPwqSUgieL6ieEE9MPSv5jux+GkZoA1j6TwrgArk66Arhci3gIGJ2hV22ngfQZYWfYZ4DMg+wJ4dKQc69OXVXGjxptnwMf53GpQfQbkFZ4uNeIno05ylPHNBIwymXHEdgLGwXqa9nQFpOk0xpGLK2AcrKdpT1dAmk5jHLn8Ady+cFBXiy9dAAAAAElFTkSuQmCC",
        "infoKind": 1,
        "imageSource": "19",
        "fileFormat": "Gif",
        "shotPlaceFullAddress": "安徽省合肥市蜀山区南七街道南七路66号1栋7单元301",
        "title": "标题",
        "contentDescription": "内容描述"
    }
}