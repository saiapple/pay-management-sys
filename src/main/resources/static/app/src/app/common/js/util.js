/**
 * static data.
 */
SYS_CPT_API_MAP = {
    catalogue: '/catalogues/data'
};
GLOBAL_COOKIE = 'globals' + location.port;
DISPLAY_NAME_COOKIE = 'displayName' + location.port;
DISPLAY_TYPE_COOKIE = 'displayType' + location.port;
AUTO_LOGIN_COOKIE = 'autoLogin' + location.port;
URLS_COOKIE = 'urls' + location.port;

Object.toString = function(obj, isNumber) {
    if(obj) {
        return obj;
    } else {
        return isNumber ? 0 : '';
    }
};

Object.random = function() {
    return Math.random().toString(36).substr(2, 5);
};

Array.prototype.remove = function(item) {
    this.splice(this.indexOf(item), 1);
};

/***********************************************************************
 * Adding new prototype methods to String
 ***********************************************************************/
String.prototype.endsWith = function (suffix) {
    return this.toLowerCase().indexOf(suffix.toLowerCase(), this.length - suffix.length) !== -1;
};
String.prototype.startsWith = function (str) {
    return this.toLowerCase().indexOf(str.toLowerCase()) == 0;
};

//Global variable
RES_UUID_MAP = {
    TEMPLATE: {
        RES_UUID: '',
            BASIC: {
            RES_UUID: ''
        },
        MST_DTL: {
            RES_UUID: ''
        },
        MST_DTL_EXT: {
            RES_UUID: ''
        }
    },
    //production
    PRODUCTION: {
        RES_UUID: 'D0152BBF-0822-47CA-B778-D2B41575D0AA',
            TITLE: '商品管理',
            //template
            TEMPLATE: {
            RES_UUID: 'C516C8A2-1890-47DF-A3DB-05C2B57238BB',
                TITLE: '目录模板管理'
        },

        TEMPLATE_DATA: {
            RES_UUID: 'D4FFF1CA-9425-4B05-BC03-64C7273C1D40',
                TITLE: '目录数据管理'
        },
        //production management
        PRODUCTION: {
            RES_UUID: 'C3AA3100-C3C8-4D6D-8356-A41C29751E61',
                TITLE: '商品基本资料管理'
        },
        //production link
        PRODUCTION_LINK: {
            RES_UUID: 'BCB2A244-E9BE-4013-B7A5-5AF8CB5023B0',
                TITLE: '目录商品关联管理'
        }
    },

    AUTH: {
        RES_UUID: 'DE55EABC-70D9-4846-BE09-B594493A22ED',
            TITLE: '权限管理',
            CONFIG: {
            RES_UUID: 'BDC32A0A-0EBC-4B42-BE23-701FDFFB14A9',
                TITLE: '权限配置'
        },
        SHARE: {
            RES_UUID: '645B06A2-59C2-441D-B105-6DC49ECF68D0',
                TITLE: '数据共享配置'
        },
        USER: {
            RES_UUID: '6EA48C9D-61CD-43F5-97F9-166269D31C8B',
                TITLE: '数据共享配置'
        },
        ROLE: {
            RES_UUID: 'ABC31EEE-1EB2-4EDE-99E6-38C6E8B42B4F',
                TITLE: '数据共享配置'
        },
        GROUP: {
            RES_UUID: '9385ACF9-6CE0-47A3-826B-8C4FA4F42FB4',
                TITLE: '数据共享配置'
        },
        FUNCTION: {
            RES_UUID: '98217B31-95E8-449F-B743-81A6689564A6',
                TITLE: '数据共享配置'
        }
    },

    OCM: {
        RES_UUID: 'DF48D392-1122-4FC3-A519-0ADE0AA2A841',
        TITLE: '渠道管理',
        CHANNEL_PRICE: {
            RES_UUID: '4C671C85-28C6-453A-BADA-9528F241EE22',
            TITLE: '渠道商品定价',
            LIST_PAGE: {
                RES_UUID: '2562A325-354C-446F-8355-BB524A15FA46',
                TITLE: '渠道商品定价-清单'
            },
            FORM_PAGE: {
                RES_UUID: '221AE6F7-7391-4E0E-8C74-DDEE6F273B82',
                TITLE: '渠道商品定价-表单'
            },
            ADD: {
                RES_UUID: '6FD91D15-A8BB-4C91-A124-8CE4C756887F',
                TITLE: '渠道商品定价-新增'
            }
        },
        CHANNEL_INFO: {
            RES_UUID: 'C1F7C833-A303-4285-9937-5D77FAA75883',
            TITLE: '渠道商品信息维护',
            LIST_PAGE: {
                RES_UUID: '',
                TITLE: '渠道商品信息维护-清单'
            },
            FORM_PAGE: {
                RES_UUID: '',
                TITLE: '渠道商品信息维护-表单'
            }
        },
        CHANNEL_RELATION: {
            RES_UUID: '5D97BD7E-03DC-46DA-9E47-7E35C02012F3',
            TITLE: '渠道区域维护',
            LIST_PAGE: {
                RES_UUID: '',
                TITLE: '渠道区域维护-清单'
            },
            FORM_PAGE: {
                RES_UUID: '',
                TITLE: '渠道区域维护-表单'
            }
        },
        CHANNEL_LEVEL: {
            RES_UUID: 'cb69363f-c4cb-4b68-ac51-b9672bd053b3',
            TITLE: '渠道层级维护作业'

        },
        PROMOTION: {
            RES_UUID: '3fbc4252-ab76-4e9e-b24a-1c71fe7e1e89',
            TITLE: '促销活动'

        }
    },

    PSO: {
        RES_UUID: 'F18A75CD-63E1-428E-8461-F9E209AD73F2',
            TITLE: '预订单管理',
            CART: {
            RES_UUID: '191C518C-4982-4364-8D0A-5D688D323C9D',
                TITLE: '购物车'
        },
        ORDER_RETURN: {
            RES_UUID: '88056BA2-AECA-5RTE-3C12-KL07Y7A23F09',
                TITLE: '产品销售退货管理'
        },
        ORDER: {
            RES_UUID: '88075BA8-EACA-4F8E-8C65-BC06C7A41F94',
                TITLE: '产品销售单'
        },
        ORDER_CHANGE: {
            RES_UUID: '76045BA2-ECCA-4F8E-5C54-BC06C8A41F95',
                TITLE: '产品销售单变更'
        },
        SO: {
            RES_UUID: '5F167944-69DC-4239-8FC9-B023114CF033',
                TITLE: '预订单'
        },
        SO_CHANGE: {
            RES_UUID: '6F168955-70BC-2533-8EE9-C023124BA078',
                TITLE: '预订单变更'
        },
        ORDER_RECEIPT: {
            RES_UUID: '9C574004-4641-42B7-B306-D55599682B03',
            TITLE: '销售单收退银'
        },
        SO_RECEIPT: {
            RES_UUID: 'F4F7C9E6-7B09-465A-A2FB-FDFCD8A11E6E',
            TITLE: '预订单收退款'
        }
    },


    CBI: {
        RES_UUID: '4C2B8D58-B1AF-4645-B45D-F91245A9D048',
        TITLE: '基础资料',
        EMPL: {
            RES_UUID: '83F1D7D6-CD08-4820-9917-62367D88E18E',
            TITLE: '员工基础资料'
        },
        EMPL_PASS: {
            RES_UUID: 'CAAF281D-091D-438B-A39F-78D13DB553B1',
            TITLE: '员工密码维护'
        },
        CHANNEL: {
            RES_UUID: '2BD6AB16-D613-48F4-B2DE-BD5BB61D8DF0',
            TITLE: '渠道/直营店基础资料'
        },
        MALL: {
            RES_UUID: 'f2eb3ea7-2b5b-42f0-8499-53cfdcbeb8c8',
            TITLE: '商场基础资料'
        },
        CUSTOMER: {
            RES_UUID: 'A89744F8-2AD6-466E-8845-994AB124AD76',
            TITLE: '客户基础资料'
        },
        CUSTOMER_ADDRESS: {
            RES_UUID: 'A78B6FDC-4E0E-475D-8DF7-6FF8A45272E2',
            TITLE: '客户地址基础资料'
        },
        DISCOUNTCART_TYPE: {
            RES_UUID: '9C9DDF28-EBFF-463A-8655-DD2DADB77973',
            TITLE: '优惠券类型基础资料'
        },
        DISCOUNT_CARD: {
            RES_UUID: 'f10a9f1a-8e93-4bf1-a44d-955c35e75119',
            TITLE: '优惠券'
        },
        INCOME_PURPOSE: {
            RES_UUID: '5179AE1A-7F54-4D45-986F-77E7DFF66476',
            TITLE: '收款用途基础资料'
        },
        PAY_WAY: {
            RES_UUID: 'F935869A-51E3-4F00-8AD1-BAC1CC502CE8',
            TITLE: '付款方式基础资料'
        },
        ORDER_TYPE: {
            RES_UUID: '5CE75E4B-F375-4215-A17B-33483AB34110',
            TITLE: '预订单类型基础资料'
        },
        SALE_TYPE: {
            RES_UUID: 'd8d1862d-14b8-48af-b2b5-0728a873e4d2',
            TITLE: '销售类型基础资料'
        },
        RETURN_REASON: {
            RES_UUID: 'd12fc04a-d636-4bdc-aed0-1a5c76fe5085',
            TITLE: '销退原因基础资料'
        },
        BANK: {
            RES_UUID: '58996bb0-8c75-42d4-8f77-6f3578ae6ac4',
            TITLE: '银行基础资料'
        },
        BANK_CARD: {
            RES_UUID: '40f8b7a1-7010-4793-8e38-078d7faff483',
            TITLE: '银行卡基础资料'
        },
        REFUND_WAY: {
            RES_UUID: '9eaeb91f-e0c7-4f2a-b4e6-c0699f055964',
            TITLE: '退款方式作业'
        },
        REFUND_CAUSE: {
            RES_UUID: '2815b878-5dec-4e48-8ac4-f8eaa78ac9b3',
            TITLE: '退款原因作业'
        },
        BRAND_FILE: {
            RES_UUID: 'd4a41e83-4e4f-4fd5-8bc6-d79c9b3812c7',
            TITLE: '品牌信息维护'
        },
        SERIES: {
            RES_UUID: '1b489e2b-f671-4815-b4eb-ee436f6d3193',
            TITLE: '商品系列信息'
        },
        ITEM_CUSTOM: {
            RES_UUID: '34214DDC-0F1A-4556-8441-02C4BB8EEF7B',
            TITLE: '商品自定义项目'
        },
        ITEM_CUSTOM_SCOPE: {
            RES_UUID: '4E898016-218D-45D2-B48A-C52D7EDFEBDF',
            TITLE: '商品自定义项目内容管理 '
        },
        SUPPLIER: {
            RES_UUID: '9e507e23-53f1-413d-bac8-27f962316fa9',
            TITLE: '供应商基础资料'
        },
        LOGISTICS_INSTALLATIONS: {
            RES_UUID: '603bb46e-bf01-4def-8711-530d6654f3bf',
            TITLE: '物流安装服务商维护管理'
        },
        DELIVER_WAY: {
            RES_UUID: 'cb223e1d-878a-4bf1-b2ad-cb9084c96bb4',
            TITLE: '送货方式基础资料'
        },
        DEPARTMENT: {
            RES_UUID: 'c7e17493-7e0b-430b-8c1d-281525ab4937',
            TITLE: '部门基础资料'
        },
        AREA: {
            RES_UUID: 'da9f302f-ad94-4082-9210-8e2bc71b0d5a',
            TITLE: '地区基础资料'
        },
        PARAMETERS: {
            RES_UUID: 'da9f302f-ad94-4082-9210-8e2bc71b0d5a',
            TITLE: '中台参数基础资料'
        },
        WAREHOUSE: {
            RES_UUID: 'fec8451f-200d-43f7-9bae-8538ecbe2c3e',
            TITLE: '仓库基础资料'
        },
        TAG: {
            RES_UUID: 'c7ed1ab0-f83b-4ea8-a2c2-b3fd25651931',
            TITLE: '标签管理'
        }
    },

    EPS: {
        RES_UUID: 'C78251D9-9549-4408-A189-BAD3FD9723CE',
            TITLE: '淘宝数据管理',
        INTERFACE_CONFIG: {
            RES_UUID: '089BB699-7D9B-4A4C-8F12-F126CADC4493',
            TITLE: '电商平台接口配置管理'
        },
        WX_CONFIG: {
            RES_UUID: 'e5d7ba72-69d6-4dad-bfd1-d7cce2f869de',
            TITLE: '微信公众号配置管理'
        },
        API: {
            RES_UUID: 'FAE25DCC-313F-4036-87B9-FE40E605FB7C',
            TITLE: '淘宝API设置'
        },
        LOG: {
            RES_UUID: '4A151D91-0DA4-4834-95B3-611758BD76D1',
            TITLE: 'API接口日志'
        },
        PRODUCTION: {
            RES_UUID: '6FC52ECD-703B-481D-A7DA-5B912DE7F06D',
            TITLE: '淘宝商品管理'
        },
        TAOBAO_ORDER: {
            RES_UUID: '113982CB-414B-442E-8A7C-1E3AF8AF77B1',
            TITLE: '淘宝订单管理'
        },
        ORDER: {
            RES_UUID: '29D3735F-407F-4525-B021-89604E019368',
            TITLE: '电商销售单'
        },
        ORDER_CHANGE: {
            RES_UUID: 'ED8EF51A-3F3C-4D9E-9A85-B1BB78CEDAB9',
            TITLE: '电商销售单变更'
        },
        ORDER_O2O: {
            RES_UUID: '93E43CB1-76D8-4DCD-92E3-49C28232B11E',
            TITLE: '电商O2O销售单'
        },
        LOGISTICS: {
            RES_UUID: 'D324BC54-E0BA-4B75-8CD7-ECAE4EED8CA1',
            TITLE: '淘宝物流管理'
        },
        JINGDONG_ACCOUNTS: {
            RES_UUID: 'BEE8C7E9-7589-4940-93D5-90CAE2E02C94',
            TITLE: '京东账款管理'
        },
        RECEIPTS: {
            RES_UUID: '36FD6936-3BB3-4288-9C97-20160FF737F7',
            TITLE: '电商收退银管理'
        },
        JINGDONG_ORDERS: {
            RES_UUID: '15e9cb41-bb67-4b47-ace3-ef184af70f3a',
            TITLE: '京东订单管理'
        },
        ALI_PAY: {
            RES_UUID: 'R4GGGH43-70F2-6AHJ-JK90-VCBNJ43899OP',
            TITLE: '支付宝账款管理'
        },
        ASS_WORKFLOW_TEMPLATE: {
            RES_UUID: '06B4726E-1842-4894-92B4-8E0E34B86F22',//23156GH5-GHJ2-8872-JK01-NVC2L2OPVT02',
            TITLE: '工作流模板管理'
        },
        ASS_WORKFLOW: {
            RES_UUID: 'ABF6B4E9-AB0D-4FA5-88E9-B166E60AAE0B',
            TITLE: '工作流設置'
        },
        ASSFORM: {
            RES_UUID: 'FA2FB472-FD5C-43FE-88D4-5444DC0E2127',//5a4d1926-868d-4c33-8382-63dce0716814',
            TITLE: '售后单管理'
        },
        ASSFORMFLOW: {
            RES_UUID: '4465fd72-0b4f-4d50-9908-fa4a8bd6f310',
            TITLE: '待处理售后单清单'
        }
    },

    SYS: {
        RES_UUID: '11107ce9-cdc3-4c98-af05-faeced24d5d6',
        TITLE: '系统设置',
        SYS_BASE_RES: {
            RES_UUID: '62ba09fa-f2e7-4e79-ae15-b8b9f002fa41',
            TITLE: '系统资源管理'
        },
        SYS_BASE_MENU: {
            RES_UUID: '2659f005-7b50-4027-b73a-de2dc4850b98',
            TITLE: '系统菜单管理'
        },
        SYS_BASE_UI_CUSTOMIZE: {
            RES_UUID: '2659f005-7b50-4027-b73a-de2dc4850b98',
            TITLE: '界面定制管理'
        }
    },

    PO: {
        RES_UUID: 'E3432ED2-99A9-4DD4-B882-CE7BD7910D54',
        PMM_ORDER: {
            RES_UUID: 'db907cdb-79a1-416c-839d-746519d3b9c7',
            TITLE: '采购单'
        }
    },

    TDE: {
        RES_UUID: 'H3432ED2-09A9-RDD4-B982-GE7BD7910987',
        TDE_RULE: {
            RES_UUID: 'HJ907YTW-79L1-415R-83KL-458719N3O9P7',
            TITLE: '抛转规则管理'
        }
    }
};


angular.module('IOne').constant('Constant', {
    FULL_TITLE: 'I ONE 全渠道管理系统',
    SHORT_TITLE: 'I ONE',
    BACKEND_BASE: 'http://localhost:8082',
    OAUTH_AUTHORIZE_URL: 'http://localhost:8081/oauth/authorize',
    OAUTH_CLIENT_ID: 'read-only-client',


    OBJECT_INFO_TYPE: {
        ENTITY: "ENTITY",
        QUERY: 'QUERY',
        ADD: 'ADD',
        MODIFY: 'MODIFY'
    },

    ///////////////////////////////
    'UI_STATUS': {
        VIEW_UI_STATUS: 'VIEW_UI_STATUS',
        PRE_EDIT_UI_STATUS: 'PRE_EDIT_UI_STATUS',
        EDIT_UI_STATUS: 'EDIT_UI_STATUS',
        EDIT_UI_STATUS_ADD: 'EDIT_UI_STATUS_ADD',
        EDIT_UI_STATUS_DELETE: 'EDIT_UI_STATUS_DELETE',
        EDIT_UI_STATUS_COPY: 'EDIT_UI_STATUS_COPY',
        EDIT_UI_STATUS_MODIFY: 'EDIT_UI_STATUS_MODIFY'
    },


    ///////////////////////////////
    'MENU_LIST': [
        {
            id: 0,
            uuid: '',
            hide: false,
            name: 'UI模板',
            isOpen: true,
            icon: 'fa fa-cube',
            subList: [
                { id: '/tpl/basic', name: '单表类模板',link: '/tpl/basic', entityList: [{table: '', api: ''}], uuid: '' },
                { id: '/tpl/mst_dtl', name: '单头单身类模板',link: '/tpl/mst_dtl', uuid: '' },
                { id: '/tpl/mst_dtl_ext', name: '单头单身子单身类模板',link: '/tpl/mst_dtl_ext', uuid: '' },
                { id: '/third-menu', name: '三级菜单', link: '', uuid: '', subList: [
                    {id: '/third-menu/1', name: '三级菜单1', link: '', uuid: ''},
                    {id: '/third-menu/2', name: '三级菜单2', link: '', uuid: ''},
                    {id: '/third-menu/3', name: '三级菜单3', link: '', uuid: ''}
                ]}
            ]
        },
        {
            id: 10,
            uuid: RES_UUID_MAP.PO.RES_UUID,
            name: '流程管理',
            isOpen: false,
            icon: 'fa fa-truck',
            subList: [
                { id: '/auckland', hide: true, name: 'Angular2 auckland',link: '/auckland', uuid: '' },
                { id: '/brisbane', hide: true, name: 'Angular2 brisbane',link: '/brisbane', uuid: '' },
                { id: '/workflow-nodes', name: '节点管理',link: '/workflow-nodes', uuid: '' },
                { id: '/workflow-templates', name: '模板管理',link: '/workflow-templates', uuid: '' },
                { id: '/workflow-templates-designer', hide: true, name: '流程设计器',link: '/workflow-templates-designer', uuid: '' },
                { id: '/workflow-tasks', name: '任务管理',link: '/workflow-tasks', uuid: '' },
                { id: '/workflow-jobs', hide: true, name: '任务执行管理',link: '/workflow-jobs', uuid: '' }
            ]
        },
        {
            id: 11,
            uuid: RES_UUID_MAP.TDE.RES_UUID,
            name: '抛转规则',
            isOpen: false,
            icon: 'fa fa-truck',
            subList: [
                { id: '/tde-rules', name: '抛转规则管理',link: '/tde-rules', uuid: RES_UUID_MAP.TDE.TDE_RULE.RES_UUID }
            ]
        },
        {
            id: 1,
            uuid: RES_UUID_MAP.PRODUCTION.RES_UUID,
            name: '商品管理',
            isOpen: true,
            icon: 'fa fa-cube',
            subList: [
                {id: '/catalogue', name: '目录模板管理', link: '/catalogue', uuid: RES_UUID_MAP.PRODUCTION.TEMPLATE.RES_UUID},
                {
                    id: '/catalogue-data',
                    name: '目录数据管理',
                    link: '/catalogue-data',
                    uuid: RES_UUID_MAP.PRODUCTION.TEMPLATE_DATA.RES_UUID
                },
                {
                    id: '/production',
                    name: '商品基本资料管理',
                    link: '/production',
                    uuid: RES_UUID_MAP.PRODUCTION.PRODUCTION.RES_UUID
                },
                {id: '1-5', name: '商品上下架管理目录', link: '', uuid: ''},
                {
                    id: '/production-link',
                    name: '目录商品关联管理',
                    link: '/production-link',
                    uuid: RES_UUID_MAP.PRODUCTION.PRODUCTION_LINK.RES_UUID
                },
                {id: '/temp', name: 'App效果预览', link: '/temp', uuid: ''}
            ]
         },
        {
            id:2,
            uuid: RES_UUID_MAP.PSO.RES_UUID,
            name: '预订单管理',
            isOpen: false,
            icon: 'fa fa-paw',
            subList: [
                { id: '/shopping-cart', hide: true, name: '购物车',link: '/shopping-cart', uuid: RES_UUID_MAP.PSO.CART.RES_UUID },
                { id: '/pso/order', hide: false, name: '产品销售单',link: '/pso/order', uuid: RES_UUID_MAP.PSO.ORDER.RES_UUID, suffix: '0' },
                { id: '/pso/change', hide: false, name: '产品销售单变更', link: '/pso/change', uuid: RES_UUID_MAP.PSO.ORDER_CHANGE.RES_UUID},
                { id: '/salesOrder', hide: true, name: '预订单',link: '/salesOrder', uuid: RES_UUID_MAP.PSO.SO.RES_UUID, suffix: '0' },
                { id: '/salesOrder-change', hide: true, name: '预订单变更', link: '/salesOrder-change', uuid: ''},
                { id: '/sale-order-return', hide: true, name: '产品销售退货管理', link: '/sale-order-return', uuid: RES_UUID_MAP.PSO.ORDER_RETURN.RES_UUID},
                { id: '/return-sales-orders', hide: true, name: '预订单退货管理', link: '/return-sales-orders',uuid:''},
                { id: '/pso/order_receipt', name: '销售单收退银管理', link: '/pso/order_receipt', uuid: RES_UUID_MAP.PSO.ORDER_RECEIPT.RES_UUID},
                { id: '/receipt2s', hide: true, name: '预订单收退款管理', link: '/receipt2s', uuid: RES_UUID_MAP.PSO.SO_RECEIPT.RES_UUID}
            ]
        },
        {
            id: 3,
            uuid: RES_UUID_MAP.SYS.RES_UUID,
            name: '系统设置',
            isOpen: false,
            icon: 'fa fa-paw',
            subList: [
                {
                    id: '/sys/sysRes',
                    hide: true,
                    name: '系统资源管理',
                    link: '/sys/sysRes',
                    uuid: RES_UUID_MAP.SYS.SYS_BASE_RES.RES_UUID
                },
                {
                    id: '/sys/sysMenus',
                    hide: true,
                    name: '系统菜单管理',
                    link: '/sys/sysMenus',
                    uuid: RES_UUID_MAP.SYS.SYS_BASE_MENU.RES_UUID
                },
                {
                    id: '/sys/ui/customize',
                    name: '界面定制管理',
                    link: '/sys/ui/customize',
                    uuid: RES_UUID_MAP.SYS.SYS_BASE_UI_CUSTOMIZE.RES_UUID
                }
            ]
        },
        {
            id:5,
            uuid: RES_UUID_MAP.OCM.RES_UUID,
            name: '渠道管理',
            hide: true,
            isOpen: false,
            icon: 'fa fa-paw',
            subList: [
                { id:  '/channelPrice', name: '渠道商品定价',link: '/channelPrice', uuid: RES_UUID_MAP.OCM.CHANNEL_PRICE.RES_UUID }
            ]
        },
        {
            id:4,
            uuid: RES_UUID_MAP.AUTH.RES_UUID,
            name: '权限管理',
            isOpen: false,
            icon: 'fa fa-paw',
            subList: [
                { id: '/auth/group', name: '群组管理',link: '/auth/group', uuid: RES_UUID_MAP.AUTH.GROUP.RES_UUID },
                { id: '/auth/func', name: '职能管理',link: '/auth/func', uuid: RES_UUID_MAP.AUTH.FUNCTION.RES_UUID },
                { id: '/auth/role', name: '角色管理',link: '/auth/role', uuid: RES_UUID_MAP.AUTH.ROLE.RES_UUID },
                { id: '/auth/groupUser', name: '账号管理',link: '/auth/groupUser', uuid: RES_UUID_MAP.AUTH.USER.RES_UUID },
                { id: '/auth/config', name: '权限配置',link: '/auth/config', uuid: RES_UUID_MAP.AUTH.CONFIG.RES_UUID },
                { id: '/auth/share', hide: true, name: '数据共享配置',link: '/auth/share', uuid: RES_UUID_MAP.AUTH.SHARE.RES_UUID }
            ]
        },
        {
            id:7,
            uuid: '',
            name: '数据同步管理',
            hide: true,
            isOpen: false,
            icon: 'fa fa-paw',
            subList: [
                { id: '/dsm/rule', name: '同步规则管理',link: '/dsm/rule', uuid: '' },
                { id: '/dsm/schedule', name: '同步任务管理',link: '/dsm/schedule', uuid: '' },
                { id: '/dsm/log', name: '日志管理',link: '/dsm/log', uuid: '' }
            ]
        },
        {
            id: 5,
            uuid: RES_UUID_MAP.OCM.RES_UUID,
            name: '渠道管理',
            isOpen: false,
            icon: 'fa fa-fax',
            subList: [
                {id: 'promotion', name: '促销活动', link: '/promotion', uuid: RES_UUID_MAP.OCM.PROMOTION.RES_UUID},
                {
                    id: '/channelPrice',
                    name: '渠道商品定价',
                    link: '/channelPrice',
                    uuid: RES_UUID_MAP.OCM.CHANNEL_PRICE.RES_UUID
                },
                {
                    id: '/channelItemInfo',
                    name: '渠道商品信息维护',
                    link: '/channelItemInfo',
                    uuid: RES_UUID_MAP.OCM.CHANNEL_INFO.RES_UUID
                },
                {
                    id: '/channelRelation',
                    name: '渠道区域维护',
                    link: '/channelRelation',
                    uuid: RES_UUID_MAP.OCM.CHANNEL_RELATION.RES_UUID
                },
                {
                    id: '/channelLevel',
                    name: '渠道层级维护作业',
                    link: '/channelLevel',
                    uuid: RES_UUID_MAP.OCM.CHANNEL_LEVEL.RES_UUID
                }
            ]
        },

        {
            id:6,
            uuid: RES_UUID_MAP.EPS.RES_UUID,
            name: '电商数据管理',
            isOpen: false,
            icon: 'fa fa-cube',
            subList: [
                { id: '/eps/jingdong_order', name: '京东订单管理', link: '/eps/jingdong_order', uuid: RES_UUID_MAP.EPS.JINGDONG_ORDERS.RES_UUID },
                {id: '/eps/jingdong_account',name: '京东账款明细管理',link: '/eps/jingdong_account',uuid: RES_UUID_MAP.EPS.JINGDONG_ACCOUNTS.RES_UUID},
                {id: '/eps/receipt',name: '电商收退银管理',link: '/eps/receipt',uuid: RES_UUID_MAP.EPS.RECEIPTS.RES_UUID},
              /*{ id: '/api-config', name: '淘宝API设置',link: '/api-config', uuid: RES_UUID_MAP.EPS.API.RES_UUID },
                { id: '/api-log', name: 'API接口日志',link: '/api-log', uuid: RES_UUID_MAP.EPS.LOG.RES_UUID },
                { id: '/taobao-production', name: '淘宝商品管理',link: '/taobao-production', uuid: RES_UUID_MAP.EPS.PRODUCTION.RES_UUID },*/
                { id: '/eps/taobao_order', name: '淘宝订单管理',link: '/eps/taobao_order', uuid: RES_UUID_MAP.EPS.TAOBAO_ORDER.RES_UUID },
                { id: '/eps/order', name: '电商销售单',link: '/eps/order', uuid: RES_UUID_MAP.EPS.ORDER.RES_UUID },
                {id: '/eps/order_change',name: RES_UUID_MAP.EPS.ORDER_CHANGE.TITLE,link: '/eps/order_change',uuid: RES_UUID_MAP.EPS.ORDER_CHANGE.RES_UUID},
                {id: '/eps/o2o_order',name: RES_UUID_MAP.EPS.ORDER_O2O.TITLE, link: '/eps/o2o_order', uuid: RES_UUID_MAP.EPS.ORDER_O2O.RES_UUID },
                {id: '/eps/interface_config',name: '电商平台接口配置管理', link: '/eps/interface_config',uuid: RES_UUID_MAP.EPS.INTERFACE_CONFIG.RES_UUID},
                {id: '/eps/wx_config',name: '微信公众号配置管理',link: '/eps/wx_config',uuid: RES_UUID_MAP.EPS.WX_CONFIG.RES_UUID },
                {id: '/eps/alipay', name: RES_UUID_MAP.EPS.ALI_PAY.TITLE,link: '/eps/alipay', uuid: RES_UUID_MAP.EPS.ALI_PAY.RES_UUID },
                {id: '/eps/ass_workflow',name: '工作流設置',link: '/ass/workflow',uuid: RES_UUID_MAP.EPS.ASS_WORKFLOW.RES_UUID},
                {id: '/eps/ass_workflow_template',name: RES_UUID_MAP.EPS.ASS_WORKFLOW_TEMPLATE.TITLE,link: '/eps/ass_workflow_template',uuid: RES_UUID_MAP.EPS.ASS_WORKFLOW_TEMPLATE.RES_UUID},
                {id: '/eps/ass_form',name: RES_UUID_MAP.EPS.ASSFORM.TITLE, link: '/eps/ass_form',uuid: RES_UUID_MAP.EPS.ASSFORM.RES_UUID},
                {id: '/eps/ass_form_flow',name: RES_UUID_MAP.EPS.ASSFORMFLOW.TITLE,link: '/ass/ass_form_flow',uuid: RES_UUID_MAP.EPS.ASSFORMFLOW.RES_UUID}
                /* ,
                { id: '/ecommerce-change', name: '电商销售单变更',link: '/ecommerce-change', uuid: RES_UUID_MAP.EPS.CHANGE.RES_UUID },
                { id: '/taobao-logistics', name: '淘宝物流管理',link: '/taobao-logistics', uuid: RES_UUID_MAP.EPS.LOGISTICS.RES_UUID }*/
            ]
        },
        {
            id: 9,
            uuid: RES_UUID_MAP.PO.RES_UUID,
            name: '采购管理',
            isOpen: false,
            icon: 'fa fa-truck',
            subList: [
                {id: '/pmmOrder', name: '采购单', link: '/pmmOrder', uuid: RES_UUID_MAP.PO.PMM_ORDER.RES_UUID}
            ]
        },
        {
            id: 8,
            uuid: '',
            name: '基础资料',
            isOpen: false,
            icon: 'fa fa-paw',
            subList: [
                 {id: '/cbi/employee', name: '员工基础资料', link: '/cbi/employee', uuid: RES_UUID_MAP.CBI.EMPL.RES_UUID},
                 {id: '/cbi/employee_password', name: '员工密码维护', link: '/cbi/employee_password', uuid: RES_UUID_MAP.CBI.EMPL_PASS.RES_UUID},
                 {id: '/ocm/channel', name: '渠道/直营店基础资料', link: '/ocm/channel', uuid: RES_UUID_MAP.CBI.CHANNEL.RES_UUID},
                 {id: '/ocm/mall', name: '商场基础资料', link: '/ocm/mall', uuid: RES_UUID_MAP.CBI.MALL.RES_UUID},
                 {id: '/cbi/customer', name: '客户基础资料', link: '/cbi/customer', uuid:RES_UUID_MAP.CBI.CUSTOMER.RES_UUID},
                 {id: '/cbi/customerAddress', name: '客户地址基础资料', link: '/cbi/customerAddress', uuid: RES_UUID_MAP.CBI.CUSTOMER_ADDRESS.RES_UUID},
                 {id: '/cbi/payWay', name: '付款方式基础资料', link: '/cbi/payWay', uuid: RES_UUID_MAP.CBI.PAY_WAY.RES_UUID},
                 {id: '/cbi/order_type', name: '预订单类型基础资料', link: '/cbi/order_type', uuid: RES_UUID_MAP.CBI.ORDER_TYPE.RES_UUID},
                 {id: '/cbi/sale_type', name: '销售类型基础资料', link: '/cbi/sale_type', uuid: RES_UUID_MAP.CBI.SALE_TYPE.RES_UUID},
                 {id: '/cbi/return_reason', name: '销退原因基础资料', link: '/cbi/return_reason', uuid: RES_UUID_MAP.CBI.RETURN_REASON.RES_UUID},
                 {id: '/cbi/area', name: '地区基础资料', link: '/cbi/area', uuid: RES_UUID_MAP.CBI.AREA.RES_UUID},
                 {id: '/cbi/deliverWay', name: '送货方式基础资料', link: '/cbi/deliver-way', uuid: RES_UUID_MAP.CBI.DELIVER_WAY.RES_UUID},
                 {id: '/cbi/warehouse', name: '仓库基础资料', link: '/cbi/warehouse', uuid: RES_UUID_MAP.CBI.WAREHOUSE.RES_UUID},
                 {id: '/cbi/department', name: '部门基础资料', link: '/cbi/department', uuid: RES_UUID_MAP.CBI.DEPARTMENT.RES_UUID},
                 {id: '/ocm/parameters', name: '中台参数管理', link: '/ocm/parameters', uuid: RES_UUID_MAP.CBI.PARAMETERS.RES_UUID},
                 {
                     id: '/fam/discountCartType',
                     name: '优惠券种类',
                     link: '/fam/discountCartType',
                     uuid: RES_UUID_MAP.CBI.DISCOUNTCART_TYPE.RES_UUID
                 },
                 {
                     id: '/fam/incomePurpose',
                     name: '收款用途',
                     link: '/fam/incomePurpose',
                     uuid: RES_UUID_MAP.CBI.INCOME_PURPOSE.RES_UUID
                 },
                 {id: '/fam/discountCard', name: '优惠券', link: '/fam/discountCard', uuid: RES_UUID_MAP.CBI.DISCOUNT_CARD.RES_UUID},
                 {id: '/fam/bank', name: '银行基础资料', link: '/fam/bank', uuid: RES_UUID_MAP.CBI.BANK.RES_UUID},
                 {id: '/fam/bankCard', name: '银行卡基础资料', link: '/fam/bankCard', uuid: RES_UUID_MAP.CBI.BANK_CARD.RES_UUID},
                 {id: '/fam/refundWay', name: '退款方式作业', link: '/fam/refundWay', uuid: RES_UUID_MAP.CBI.REFUND_WAY.RES_UUID},
                 {id: '/fam/refundCause', name: '退款原因作业', link: '/fam/refundCause', uuid: RES_UUID_MAP.CBI.REFUND_CAUSE.RES_UUID},
                 {
                     id: '/plm/brand_file',
                     name: '品牌信息维护',
                     link: '/plm/brand_file',
                     uuid: RES_UUID_MAP.CBI.BRAND_FILE.RES_UUID
                 },
                 {id: '/plm/series', name: '商品系列信息', link: '/plm/series', uuid: RES_UUID_MAP.CBI.SERIES.RES_UUID},
                 {id: '/cbi/itemCustom', name: '商品自定义项目', link: '/cbi/itemCustom', uuid: RES_UUID_MAP.CBI.ITEM_CUSTOM.RES_UUID},
                 {id: '/cbi/itemCustomScope', name: '商品自定义项目内容管理', link: '/cbi/itemCustomScope', uuid: RES_UUID_MAP.CBI.ITEM_CUSTOM_SCOPE.RES_UUID},
                 {id: '/ocm/supplier', name: '供应商基础资料', link: '/ocm/supplier', uuid: RES_UUID_MAP.CBI.SUPPLIER.RES_UUID},
                 {id: '/logistics_installations', name: '物流安装服务商维护管理', link: '/logistics_installations', uuid: RES_UUID_MAP.CBI.LOGISTICS_INSTALLATIONS.RES_UUID},
                 {id: '/fam/tags', name: '标签管理', link: '/fam/tags', uuid: RES_UUID_MAP.CBI.TAG.RES_UUID}
            ]
        }
    ],
    ///////////////////////////////

    ///////////////////////////////
    'STATUS': {
        0: {value: '0', name: '全部'},
        1: {value: '1', name: '有效'},
        2: {value: '2', name: '无效'}
    },
    ///////////////////////////////
    ///////////////////////////////
    'CONFIRM': {
        0: {value: '0', name: '全部'},
        1: {value: '1', name: '未审核'},
        2: {value: '2', name: '已审核'}
    },
    ///////////////////////////////
    ///////////////////////////////
    'RELEASE': {
        0: {value: '0', name: '全部'},
        1: {value: '1', name: '未发布'},
        2: {value: '2', name: '已发布'}
    },
    ///////////////////////////////
    ///////////////////////////////
    'PROD_TYPE': {
        0: {value: '0', name: '全部'},
        1: {value: '1', name: '套件'},
        2: {value: '2', name: '包件'},
        3: {value: '3', name: '补件'},
        4: {value: '4', name: '其它'}
    },
    'STOP_PRODUCTION': {
        0: {value: '0', name: '全部'},
        Y: {value: 'Y', name: '已停产'},
        N: {value: 'N', name: '未停产'}
    },
    ///////////////////////////////
    ///////////////////////////////
    'AUDIT': {
        0: {value: '0', name: '全部'},
        1: {value: '1', name: '未审核'},
        2: {value: '2', name: '已审核'},
        3: {value: '3', name: '审核中'},
        4: {value: '4', name: '退回'}
    },

    'TRANSFER_PSO_FLAG': {
          0: {value: '0', name: '全部'},
          1: {value: '1', name: '已抛转'},
          2: {value: '2', name: '未抛转'}
      },

    //PSO_RECEIPT_ORDER_DETAIL
    'TRANSFER_FLAG': {
        0: {value: '0', name: '全部'},
        1: {value: '1', name: '未抛转'},
        2: {value: '2', name: '已抛转'}
    },

    ///////////////////////////////
    ///////////////////////////////
    'CUSTOMIZE_FLAG': {
        1: {value: '1', name: '是'},
        2: {value: '2', name: '否'}
    },
    ///////////////////////////////
    ///////////////////////////////
    'SALE_TYPE': {
        1: {value: '1', name: '常规'},
        2: {value: '2', name: '赠送'},
        3: {value: '3', name: '折扣'},
        4: {value: '4', name: '特价'}
    },
    ///////////////////////////////
    ///////////////////////////////
    ///////////////////////////////
    'DELIVERY_MODE': {
        0: {value: '0', name: '送货到户'},
        1: {value: '1', name: '送货到楼下'},
        2: {value: '2', name: '自提'},
        3: {value: '3', name: '其他'}
    },

    'USER_TYPE': {
        1: {value: '1', name: '集团'},
        2: {value: '2', name: '渠道商'},
        3: {value: '3', name: '前段APP'}
    },

    'FUNCTION_TYPE': {
        1: {value: '1', name: '集团'},
        2: {value: '2', name: '渠道商'}
    },

    'ROLE_TYPE': {
        1: {value: '1', name: '集团'},
        2: {value: '2', name: '渠道商'}
    },

    'SELLER_FLAG': {
        0: {value: '0', name: '全部'},
        1: {value: '1', name: '红'},
        2: {value: '2', name: '黄'},
        3: {value: '3', name: '绿'},
        4: {value: '4', name: '蓝'},
        5: {value: '5', name: '紫'}
    },

    'TAOBAO_STATUS': {
        0: {value: '0', name: '全部'},
        TRADE_NO_CREATE_PAY: {value: 'TRADE_NO_CREATE_PAY', name: '没有创建支付宝交易'},
        WAIT_BUYER_PAY: {value: 'WAIT_BUYER_PAY', name: '等待买家付款'},
        WAIT_SELLER_SEND_GOODS: {value: 'WAIT_SELLER_SEND_GOODS', name: '买家已付款，等待卖家发货'},
        WAIT_BUYER_CONFIRM_GOODS: {value: 'WAIT_BUYER_CONFIRM_GOODS', name: '卖家已发货，等待买家确认收货'},
        TRADE_BUYER_SIGNED: {value: 'TRADE_BUYER_SIGNED', name: '买家已签收,货到付款专用'},
        TRADE_FINISHED: {value: 'TRADE_FINISHED', name: '交易成功'},
        TRADE_CLOSED: {value: 'TRADE_CLOSED', name: '付款以后用户退款成功，交易自动关闭'},
        TRADE_CLOSED_BY_TAOBAO: {value: 'TRADE_CLOSED_BY_TAOBAO', name: '付款以前，卖家或买家主动关闭交易'},
        PAY_PENDING: {value: 'PAY_PENDING', name: '国际信用卡支付付款确认中'}
    },

    'REFUND_STATUS': {
        0: {value: '0', name: '全部'},
        WAIT_SELLER_AGREE: {value: 'WAIT_SELLER_AGREE', name: '退款协议等待卖家确认中'},
        SELLER_REFUSE_BUYER: {value: 'SELLER_REFUSE_BUYER', name: '卖家不同意协议，等待买家修改'},
        WAIT_BUYER_RETURN_GOODS: {value: 'WAIT_BUYER_RETURN_GOODS', name: '退款协议达成，等待买家退货'},
        WAIT_SELLER_CONFIRM_GOODS: {value: 'WAIT_SELLER_CONFIRM_GOODS', name: '等待卖家收货'},
        REFUND_SUCCESS: {value: 'REFUND_SUCCESS', name: '退款成功'},
        REFUND_CLOSED: {value: 'REFUND_CLOSED', name: '退款关闭'},
        NO_REFUND: {value: 'NO_REFUND', name: '无'}
    },

    'NUM_IID': {
        521023075868: {value: '521023075868', name: '到地级市，买家自提'},
        521023327429: {value: '521023327429', name: '送货入户并安装'}
    },

    'ORDER_FLAG': {
        0: {value: '0', name: '全部'},
        1: {value: '1', name: '网销种菜'},
        2: {value: '2', name: 'o2o种菜'},
        3: {value: '3', name: 'o2o单'},
        4: {value: '4', name: '网销订单'},
        5: {value: '5', name: '网销o2o'},
        6: {value: '6', name: '线下O2O单'}
    },

    'RETURN_FLAG': {
        1: {value: '1', name: '是'},
        2: {value: '2', name: '否'}
    },

    'GENDER_FLAG': {
        1: {value: '1', name: '男'},
        2: {value: '2', name: '女'},
        3: {value: '3', name: '其他'}
    },

    'JINGDONG_STATUS': {
        0: {value: '0', name: '全部'},
        WAIT_SELLER_STOCK_OUT: {value: 'WAIT_SELLER_STOCK_OUT', name: '等待出库'},
        WAIT_GOODS_RECEIVE_CONFIRM: {value: 'WAIT_GOODS_RECEIVE_CONFIRM', name: '等待确认收货'},
        FINISHED_L: {value: 'FINISHED_L', name: '完成'},
        TRADE_CANCELED: {value: 'TRADE_CANCELED', name: '取消'},
        LOCKED: {value: 'LOCKED', name: '已锁定'}
    },

    'PAY_PARTY': {
        1: {value: '1', name: '商场'},
        2: {value: '2', name: '门店'}
    },

    'EMPLOYEE_STATUS': {
        1: {value: '1', name: '在职'},
        2: {value: '2', name: '离职'}
    },

    'PAID_TYPE': {
        1: {value: '1', name: '定金'},
        2: {value: '2', name: '尾款'},
        3: {value: '3', name: '退款'},
        4: {value: '4', name: '销退退款'}
    },

    'PERFORM_FLAG': {
        1: {value: '1', name: '未执行'},
        2: {value: '2', name: '已执行'}
    },

    'PAY_TYPE': {
        1: {value: '1', name: '银行'},
        2: {value: '2', name: '卡券'},
        3: {value: '3', name: '转单'},
        4: {value: '4', name: '其他'}
    },

    'APPORTION_TYPE': {
        Y: {value: 'Y', name: '分摊'},
        N: {value: 'N', name: '不分摊'}
    },

    'CHANNEL_FLAG': {
        0: {value: '0', name: '全部'},
        1: {value: '1', name: '直营经销商'},
        2: {value: '2', name: '直营门店'},
        3: {value: '3', name: '渠道经销商'},
        4: {value: '4', name: '渠道门店'},
        5: {value: '5', name: '在线'},
        6: {value: '6', name: '其他'}
    },

    'MALL_FLAG': {
        0: {value: '0', name: '全部'},
        1: {value: '1', name: '线下'},
        2: {value: '2', name: '线上'}
    }
});
