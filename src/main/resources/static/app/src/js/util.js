/**
 * static data.
 */
angular.module('IOne-Constant', []);

SYS_CPT_API_MAP = {
    catalogue: '/catalogues/data'
};

//Global variable
RES_UUID_MAP = {
    //production
    PRODUCTION: {
        RES_UUID: 'D0152BBF-0822-47CA-B778-D2B41575D0AA',
        TITLE: '商品管理',
        //template
        TEMPLATE: {
            RES_UUID: 'C516C8A2-1890-47DF-A3DB-05C2B57238BB',
            TITLE: '目录模板管理',
            LIST_PAGE: {
                RES_UUID: '453140BC-E10C-40CA-93E4-6E2853E632E6',
                TITLE: '目录模板管理-清单'
            }
            ,
            FORM_PAGE: {
                RES_UUID: '7715D5A6-4BD2-4501-B3A5-3F6B4A9C8A99',
                TITLE: '目录模板管理-表单'
            }
        },

        TEMPLATE_DATA: {
            RES_UUID: 'D4FFF1CA-9425-4B05-BC03-64C7273C1D40',
            TITLE: '目录数据管理',
            LIST_PAGE: {
                RES_UUID: '48C77C2E-9B3C-44A6-8778-4323AE0A4291',
                TITLE: '目录数据管理-清单'
            },
            FORM_PAGE: {
                RES_UUID: '5A547371-B5ED-491F-A8A9-C0CD7DC58352',
                TITLE: '目录数据管理-表单'
            }
        },
        //production management
        PRODUCTION: {
            RES_UUID: 'C3AA3100-C3C8-4D6D-8356-A41C29751E61',
            TITLE: '商品基本资料管理',
            //list
            LIST_PAGE: {
                RES_UUID: '3C135191-4811-4788-AEC8-DD0D09AB9DD9',
                TITLE: '商品基本资料管理-清单'
            },
            //form
            FORM_PAGE: {
                RES_UUID: '248AF8CC-1DCB-4232-B93D-0315DA9DEF45',
                TITLE: '商品基本资料管理-表单'
            }
        },
        //production link
        PRODUCTION_LINK: {
            RES_UUID: 'BCB2A244-E9BE-4013-B7A5-5AF8CB5023B0',
            TITLE: '目录商品关联管理',
            //list
            LIST_PAGE: {
                RES_UUID: 'E030381C-764A-47A1-AC00-4A7B7CD90940',
                TITLE: '目录商品关联管理-清单'
            },
            //form
            FORM_PAGE: {
                RES_UUID: 'D75B3166-AC8D-47A9-960D-01A45E5E1001',
                TITLE: '目录商品关联管理-表单'
            }
        }
    },

    AUTH: {
        RES_UUID: 'DE55EABC-70D9-4846-BE09-B594493A22ED',
        TITLE: '权限管理',
        CONFIG: {
            RES_UUID: 'BDC32A0A-0EBC-4B42-BE23-701FDFFB14A9',
            TITLE: '权限配置',
            LIST_PAGE: {
                RES_UUID: '0512509E-B4A4-4709-A4FF-1577E37EC98F',
                TITLE: '权限配置-清单'
            },
            FORM_PAGE: {
                RES_UUID: 'E3075060-45AB-44E6-A065-DFAA9EDECB5D',
                TITLE: '权限配置-表单'
            }
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
        }
    },

    PSO: {
        RES_UUID: 'F18A75CD-63E1-428E-8461-F9E209AD73F2',
        TITLE: '预订单管理',
        CART: {
            RES_UUID: '191C518C-4982-4364-8D0A-5D688D323C9D',
            TITLE: '购物车',
            LIST_PAGE: {
                RES_UUID: 'DF268654-2053-424F-8EEC-EDFD3664E1A4',
                TITLE: '购物车-清单'
            },
            FORM_PAGE: {
                RES_UUID: 'F345E5B5-BF56-44A1-B673-ECE7B221C064',
                TITLE: '购物车-表单'
            }
        },
        ORDER_RETURN: {
            RES_UUID: '88056BA2-AECA-5RTE-3C12-KL07Y7A23F09',
            TITLE: '产品销售退货管理'
        },
        ORDER: {
            RES_UUID: '88075BA8-EACA-4F8E-8C65-BC06C7A41F94',
            TITLE: '产品销售单',
            LIST_PAGE: {
                RES_UUID: 'D17B0005-EF7B-46DA-824F-431C946F2E71',
                TITLE: '产品销售单-清单'
            },
            FORM_PAGE: {
                RES_UUID: '886E43C7-93B2-4865-A3A7-C185BD90B4CC',
                TITLE: '产品销售单-表单'
            }
        },
        ORDER_CHANGE: {
            RES_UUID: '76045BA2-ECCA-4F8E-5C54-BC06C8A41F95',
            TITLE: '产品销售单变更'
        },
        SO: {
            RES_UUID: '5F167944-69DC-4239-8FC9-B023114CF033',
            TITLE: '预订单',
            LIST_PAGE: {
                RES_UUID: '413BE1CA-6C87-4301-BEEB-96457584367E',
                TITLE: '预订单-清单'
            },
            FORM_PAGE: {
                RES_UUID: 'B74D6808-D531-410D-841A-EEEDFF230DF1',
                TITLE: '预订单-表单'
            }
        },
        SO_CHANGE: {
            RES_UUID: '6F168955-70BC-2533-8EE9-C023124BA078',
            TITLE: '预订单变更'
        },
        SO_RETURN: {
            RES_UUID: '04D53E51-E6C5-4E79-A41F-EF4030D1A86B',
            TITLE: '预订单退货'
        },
        ORDER_RECEIPT: {
            RES_UUID: '9C574004-4641-42B7-B306-D55599682B03',
            TITLE: '销售单收退银'
        },
        SO_RECEIPT: {
            RES_UUID: 'F4F7C9E6-7B09-465A-A2FB-FDFCD8A11E6E',
            TITLE: '预订单收退款'
        },
        WALK_THROUGH: {
            RES_UUID: 'T5F889BB-2B10-448A-B3FC-RTFCD9B22B1B',
            TITLE: '预排回访'
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
        SERIES: {
            RES_UUID: '1b489e2b-f671-4815-b4eb-ee436f6d3193',
            TITLE: '商品系列信息'
        }
    },

    EPS: {
        RES_UUID: 'C78251D9-9549-4408-A189-BAD3FD9723CE',
        TITLE: '电商数据管理',
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
            TITLE: '淘宝API设置',
            LIST_PAGE: {
                RES_UUID: '7ADFCAAE-9537-4B53-9B76-BE83ADD805C1',
                TITLE: '淘宝API设置-清单'
            },
            FORM_PAGE: {
                RES_UUID: 'A01A2190-0287-4FE9-A203-83D01607A899',
                TITLE: '淘宝API设置-表单'
            }
        },
        LOG: {
            RES_UUID: '4A151D91-0DA4-4834-95B3-611758BD76D1',
            TITLE: 'API接口日志',
            LIST_PAGE: {
                RES_UUID: '8740A79C-2A07-4473-9EBC-1594DCBCA60D',
                TITLE: 'API接口日志-清单'
            }
        },
        PRODUCTION: {
            RES_UUID: '6FC52ECD-703B-481D-A7DA-5B912DE7F06D',
            TITLE: '淘宝商品管理',
            LIST_PAGE: {
                RES_UUID: '612A0F00-7AD8-48BB-8E6E-477C3CD633E9',
                TITLE: '淘宝商品管理-清单'
            },
            FORM_PAGE: {
                RES_UUID: '1E037EB4-7209-49B9-9B66-834319EB3864',
                TITLE: '淘宝商品管理-表单'
            }
        },
        ORDERS: {
            RES_UUID: '113982CB-414B-442E-8A7C-1E3AF8AF77B1',
            TITLE: '淘宝订单管理',
            LIST_PAGE: {
                RES_UUID: '867418AD-03E8-46A2-A342-2A3FC2413878',
                TITLE: '淘宝订单管理-清单'
            }
        },
        ECOMMERCE: {
            RES_UUID: '29D3735F-407F-4525-B021-89604E019368',
            TITLE: '电商销售单',
            LIST_PAGE: {
                RES_UUID: 'B40674AC-0D2F-4F17-B7C4-F89D0C806CA3',
                TITLE: '电商销售单-清单'
            },
            FORM_PAGE: {
                RES_UUID: 'EDAA8E14-BBD5-4CD6-9D34-A1A0ED36D17F',
                TITLE: '电商销售单-表单'
            }
        },
        CHANGE: {
            RES_UUID: 'ED8EF51A-3F3C-4D9E-9A85-B1BB78CEDAB9',
            TITLE: '电商销售单变更',
            LIST_PAGE: {
                RES_UUID: '86C3FEB5-758F-49AE-8217-8B5C0FF14AA9',
                TITLE: '电商销售单变更-清单'
            },
            FORM_PAGE: {
                RES_UUID: 'A537914E-1BEC-4817-9269-F2A38BA69A85',
                TITLE: '电商销售单变更-表单'
            }
        },
        LOGISTICS: {
            RES_UUID: 'D324BC54-E0BA-4B75-8CD7-ECAE4EED8CA1',
            TITLE: '淘宝物流管理',
            LIST_PAGE: {
                RES_UUID: '0E860E3C-26EC-4B1B-9AF2-77B076AF4835',
                TITLE: '淘宝物流管理-清单'
            }
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
            RES_UUID: 'D135BC54-E0BA-4B45-8CD8-ECAE4EED9CA2',
            TITLE: '京东订单管理'
        },
        ALI_PAY: {
            RES_UUID: 'R4GGGH43-70F2-6AHJ-JK90-VCBNJ43899OP',
            TITLE: '支付宝账款管理'
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
        }
    }
};


angular.module('IOne-Constant').constant('Constant', {
    BACKEND_BASE: '',

    INVALID_VALUE: {
        STRING: 'NA',
        INTEGER: '-99999999',
        DATE: ''
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
            id: 1,
            uuid: RES_UUID_MAP.PRODUCTION.RES_UUID,
            name: '收银管理',
            isOpen: true,
            icon: 'fa fa-cube',
            subList: [
                {id: '/pms-duty', name: '班次管理', link: '/pms-duty', uuid: ''},
                {id: '/pms-order', name: '流水管理', link: '/pms-order', uuid: ''}

            ]
        },
        {
            id: 1,
            uuid: RES_UUID_MAP.PRODUCTION.RES_UUID,
            name: '商品管理',
            isOpen: false,
            icon: 'fa fa-cube',
            subList: [
                {id: '/catalogue', name: '目录模板管理', link: '/catalogue', uuid: RES_UUID_MAP.PRODUCTION.TEMPLATE.RES_UUID},
                {id: '/catalogue-data', name: '目录数据管理', link: '/catalogue-data', uuid: RES_UUID_MAP.PRODUCTION.TEMPLATE_DATA.RES_UUID},
                {id: '1-3', name: '商品自定义属性定义', link: '', uuid: ''},
                {id: '/production', name: '商品基本资料管理', link: '/production', uuid: RES_UUID_MAP.PRODUCTION.PRODUCTION.RES_UUID},
                {id: '1-5', name: '商品上下架管理目录', link: '', uuid: ''},
                {id: '/production-link', name: '目录商品关联管理', link: '/production-link', uuid: RES_UUID_MAP.PRODUCTION.PRODUCTION_LINK.RES_UUID},
                {id: '/temp', name: 'App效果预览', link: '/temp', uuid: ''}
            ]
        },
        {
            id: 2,
            uuid: RES_UUID_MAP.PSO.RES_UUID,
            name: '预订单管理',
            isOpen: false,
            icon: 'fa fa-paw',
            subList: [
                {id: '/shopping-cart', name: '购物车', link: '/shopping-cart', uuid: RES_UUID_MAP.PSO.CART.RES_UUID},
                {id: '/orders', name: '产品销售单', link: '/orders', uuid: RES_UUID_MAP.PSO.ORDER.RES_UUID, suffix: '0'},
                {id: '/salesOrder', name: '预订单', link: '/salesOrder', uuid: RES_UUID_MAP.PSO.SO.RES_UUID, suffix: '0'},
                {id: '2-6', name: '预订单（集团）', link: '', uuid: ''},
                {id: '/sale-order-change', name: '产品销售单变更', link: '/sale-order-change', uuid: RES_UUID_MAP.PSO.ORDER_CHANGE.RES_UUID},
                {id: '2-4', name: '产品销售单变更记录', link: '', uuid: ''},
                {id: '/salesOrder-change', name: '预订单变更', link: '/salesOrder-change', uuid: RES_UUID_MAP.PSO.SO_CHANGE.RES_UUID},
                {id: '/sale-order-return', name: '产品销售退货管理', link: '/sale-order-return', uuid: RES_UUID_MAP.PSO.ORDER_RETURN.RES_UUID},
                {id: '/return-sales-orders', name: '预订单退货管理', link: '/return-sales-orders', uuid: RES_UUID_MAP.PSO.SO_RETURN.RES_UUID},
                {id: '/receipts', name: '销售单收退银管理', link: '/receipts', uuid: RES_UUID_MAP.PSO.ORDER_RECEIPT.RES_UUID},
                {id: '/receipt2s', name: '预订单收退款管理', link: '/receipt2s', uuid: RES_UUID_MAP.PSO.SO_RECEIPT.RES_UUID},
                {id: '2-9', name: '回单/欠货单', link: '', uuid: ''},
                {id: '/walkThrough', name: '预排回访', link: '/walkThrough', uuid: RES_UUID_MAP.PSO.WALK_THROUGH.RES_UUID}
            ]
        },
        {
            id: 5,
            uuid: RES_UUID_MAP.OCM.RES_UUID,
            name: '渠道管理',
            isOpen: false,
            icon: 'fa fa-paw',
            subList: [
                {id: '3-1', name: '促销活动', link: ''},
                {id: '/channelPrice', name: '渠道商品定价', link: '/channelPrice', uuid: RES_UUID_MAP.OCM.CHANNEL_PRICE.RES_UUID}
            ]
        },
        {
            id: 3,
            uuid: RES_UUID_MAP.SYS.RES_UUID,
            name: '系统设置',
            isOpen: false,
            icon: 'fa fa-paw',
            subList: [
                {id: '/sys/sysRes', name: '系统资源管理', link: '/sys/sysRes', uuid: RES_UUID_MAP.SYS.SYS_BASE_RES.RES_UUID},
                {id: '/sys/sysMenus', name: '系统菜单管理', link: '/sys/sysMenus', uuid: RES_UUID_MAP.SYS.SYS_BASE_MENU.RES_UUID}
            ]
        },
        {
            id: 4,
            uuid: RES_UUID_MAP.AUTH.RES_UUID,
            name: '权限管理',
            isOpen: false,
            icon: 'fa fa-paw',
            subList: [
                {id: '/auth/group', name: '群组管理', link: '/auth/group', uuid: RES_UUID_MAP.AUTH.GROUP.RES_UUID},
                {id: '/auth/func', name: '职能管理', link: '/auth/func', uuid: RES_UUID_MAP.AUTH.FUNCTION.RES_UUID},
                {id: '/auth/role', name: '角色管理', link: '/auth/role', uuid: RES_UUID_MAP.AUTH.ROLE.RES_UUID},
                {id: '/auth/user', name: '账号管理', link: '/auth/user', uuid: RES_UUID_MAP.AUTH.USER.RES_UUID},
                {id: '/auth/config', name: '权限配置', link: '/auth/config', uuid: RES_UUID_MAP.AUTH.CONFIG.RES_UUID},
                {id: '/auth/share', name: '数据共享配置', link: '/auth/share', uuid: RES_UUID_MAP.AUTH.SHARE.RES_UUID}
            ]
        },
        {
            id: 7,
            uuid: '',
            name: '数据同步管理',
            isOpen: false,
            icon: 'fa fa-paw',
            subList: [
                {id: '/dsm/rule', name: '同步规则管理', link: '/dsm/rule', uuid: ''},
                {id: '/dsm/schedule', name: '同步任务管理', link: '/dsm/schedule', uuid: ''},
                {id: '/dsm/log', name: '日志管理', link: '/dsm/log', uuid: ''}
            ]
        },
        {
            id: 6,
            uuid: RES_UUID_MAP.EPS.RES_UUID,
            name: '电商数据管理',
            isOpen: false,
            icon: 'fa fa-cube',
            subList: [
                {
                    id: '/jingdong-orders',
                    name: '京东订单管理',
                    link: '/jingdong-orders',
                    uuid: RES_UUID_MAP.EPS.JINGDONG_ORDERS.RES_UUID
                },
                {
                    id: '/jingdong-accounts',
                    name: '京东账款明细管理',
                    link: '/jingdong-accounts',
                    uuid: RES_UUID_MAP.EPS.JINGDONG_ACCOUNTS.RES_UUID
                },
                {
                    id: '/eps-receipts',
                    name: '电商收退银管理',
                    link: '/eps-receipts',
                    uuid: RES_UUID_MAP.EPS.RECEIPTS.RES_UUID
                },
                {id: '/taobao-orders', name: '淘宝订单管理', link: '/taobao-orders', uuid: RES_UUID_MAP.EPS.ORDERS.RES_UUID},
                {id: '/ecommerce-orders', name: '电商销售单', link: '/ecommerce-orders', uuid: RES_UUID_MAP.EPS.ECOMMERCE.RES_UUID},
                {id: '/eps/interface_config', name: '电商平台接口配置管理', link: '/eps/interface_config', uuid: RES_UUID_MAP.EPS.INTERFACE_CONFIG.RES_UUID},
                {id: '/eps/wx_config', name: '微信公众号配置管理', link: '/eps/wx_config', uuid: RES_UUID_MAP.EPS.WX_CONFIG.RES_UUID},
                {
                    id: '/eps/alipay',
                    name: RES_UUID_MAP.EPS.ALI_PAY.TITLE,
                    link: '/eps/alipay',
                    uuid: RES_UUID_MAP.EPS.ALI_PAY.RES_UUID
                },
                {id: '/ass/workflow', name: '工作流設置', link: '/ass/workflow', uuid: ''},

            ]
        },
        {
            id: 8,
            uuid: RES_UUID_MAP.CBI.RES_UUID,
            name: '基础资料',
            isOpen: false,
            icon: 'fa fa-paw',
            subList: [
                {id: '/cbi/employee', name: '员工基础资料', link: '/cbi/employee', uuid: RES_UUID_MAP.CBI.EMPL.RES_UUID},
                {id: '/cbi/employee_password', name: '员工密码维护', link: '/cbi/employee_password', uuid: RES_UUID_MAP.CBI.EMPL_PASS.RES_UUID},
                {id: '/ocm/channel', name: '渠道/直营店基础资料', link: '/ocm/channel', uuid: ''},
                {id: '/ocm/mall', name: '商场基础资料', link: '/ocm/mall', uuid: ''},
                {id: '/cbi/customer', name: '客户基础资料', link: '/cbi/customer', uuid: ''},
                {id: '/cbi/customerAddress', name: '客户地址基础资料', link: '/cbi/customerAddress', uuid: ''},
                {id: '/cbi/payWay', name: '付款方式基础资料', link: '/cbi/payWay', uuid: ''},
                {id: '/cbi/order_type', name: '预订单类型基础资料', link: '/cbi/order_type', uuid: RES_UUID_MAP.CBI.ORDER_TYPE.RES_UUID},
                {id: '/cbi/sale_type', name: '销售类型基础资料', link: '/cbi/sale_type', uuid: RES_UUID_MAP.CBI.SALE_TYPE.RES_UUID},
                {id: '/cbi/return_reason', name: '销退原因基础资料', link: '/cbi/return_reason', uuid: ''},
                {id: '/cbi/area', name: '地区基础资料', link: '/cbi/area', uuid: ''},
                {id: '/cbi/deliverWay', name: '送货方式基础资料', link: '/cbi/deliver-way', uuid: ''},
                {id: '/cbi/warehouse', name: '仓库基础资料', link: '/cbi/warehouse', uuid: ''},
                {id: '/cbi/department', name: '部门基础资料', link: '/cbi/department', uuid: ''},
                {id: '/ocm/parameters', name: '中台参数管理', link: '/ocm/parameters', uuid: ''},
                {id: '/fam/discountCartType', name: '优惠券种类', link: '/fam/discountCartType', uuid: ''},
                {id: '/fam/incomePurpose', name: '收款用途', link: '/fam/incomePurpose', uuid: ''},
                {id: '/fam/discountCard', name: '优惠券', link: '/fam/discountCard', uuid: RES_UUID_MAP.CBI.DISCOUNT_CARD.RES_UUID},
                {id: '/fam/bank', name: '银行基础资料', link: '/fam/bank', uuid: RES_UUID_MAP.CBI.BANK.RES_UUID},
                {id: '/fam/bankCard', name: '银行卡基础资料', link: '/fam/bankCard', uuid: RES_UUID_MAP.CBI.BANK_CARD.RES_UUID},
                {id: '/fam/refundWay', name: '退款方式作业', link: '/fam/refundWay', uuid: RES_UUID_MAP.CBI.REFUND_WAY.RES_UUID},
                {
                    id: '/fam/refundCause',
                    name: '退款原因作业',
                    link: '/fam/refundCause',
                    uuid: RES_UUID_MAP.CBI.REFUND_CAUSE.RES_UUID
                },
                {id: '/plm/series', name: '商品系列信息', link: '/plm/series', uuid: RES_UUID_MAP.CBI.SERIES.RES_UUID}
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
    },

    'PRODUCT_ERRORS': {
        Duplicated: {code: 'Duplicated', message: '已有重复商品编号!'}
    },

    'ORDER_CHANGE_FLAG': {
        1: {value: '1', name: '未变更'},
        2: {value: '2', name: '已变更'}
    },

    'BUILDING_TYPE': {
        1: {value: '1', name: '楼梯房'},
        2: {value: '2', name: '电梯房'}
    },

    'WALK_THROUGH_CONF_STATUS': {
        0: {value: '0', name: '全部'},
        1: {value: '1', name: '未确认'},
        2: {value: '2', name: '确认备货'},
        3: {value: '3', name: '提交变更'}
    },

    'PURCHASE_TYPE': {
        1: {value: '1', name: '正常品'},
        2: {value: '2', name: '定做品'},
        3: {value: '3', name: '外购品'}
    },

    'CARD_TYPE': {
        1: {value: '1', name: '借记卡'},
        2: {value: '2', name: '贷记卡'}
    },

    'COST_TYPE': {
        1: {value: '1', name: '比例分摊'},
        2: {value: '2', name: '固定费率'}
    },

    'FUND_TYPE': {
        1: {value: '1', name: '线下'},
        2: {value: '2', name: '线上'}
    },
    'TURN_FLAG': {
        Y: {value: 'Y', name: '转单'},
        N: {value: 'N', name: '非转单'}
    },
    'WORKFLOW_TYPE': {
        1: {value: '1', name: '固定流程'},
        2: {value: '2', name: '自由流程'}
    },
    'WORKFLOW_TRANSFER_TYPE': {
        1: {value: '1', name: '流转下一关'},
        2: {value: '2', name: '结案'}
    },
    'WORKFLOW_TRANSFER_SOURCE': {
        1: {value: '1', name: '群组职能'},
        2: {value: '2', name: '渠道'},
        3: {value: '3', name: '员工'}
    }
});