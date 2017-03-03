/**
 * Base service for single table
 * @param api
 * @param httpService
 * @param Constant
 * @constructor
 */

function addResUuid(params, resUuid) {
    if(resUuid) {
        params['resUuid'] = resUuid;
    }
}

function preHandleParams(params) {
    angular.forEach(Object.keys(params), function(key) {
        if(params[key] == undefined) {
            params[key] = '';
        }
    })
}

function BaseService(api, httpService, Constant, resUuid) {
    this.api = api;
    this.Constant = Constant;
    this.httpService = httpService;
    this.resUuid = resUuid;
}

BaseService.prototype.getAll = function(params, resUuid) {
    if(params) {
        preHandleParams(params);
    } else {
        params = {};
    }
    addResUuid(params, resUuid || this.resUuid);

    return this.httpService.get(this.Constant.BACKEND_BASE + this.api, {params: params});
};

BaseService.prototype.get = function (uuid, config) {
    return this.httpService.get(this.Constant.BACKEND_BASE + this.api + '/' + uuid, config);
};

BaseService.prototype.add = function (addInput, config) {
    return this.httpService.post(this.Constant.BACKEND_BASE + this.api, addInput, config);
};

BaseService.prototype.delete = function (uuid, config) {
    return this.httpService.delete(this.Constant.BACKEND_BASE + this.api + '/' + uuid, config);
};

BaseService.prototype.modify = function (uuid, updateInput, config) {
    return this.httpService.patch(this.Constant.BACKEND_BASE + this.api + '/' + uuid, updateInput, config);
};

/**
 * Base detail Service for all dtl tables
 * @param main
 * @param detail
 * @param httpService
 * @param Constant
 * @constructor
 */
function BaseDetailService(main, detail, httpService, Constant, resUuid) {
    this.main = main;
    this.detail = detail;
    this.Constant = Constant;
    this.httpService = httpService;
    this.resUuid = resUuid;
}

BaseDetailService.prototype.getAll = function(mainUuid, params, resUuid) {
    if(params) {
        preHandleParams(params);
    } else {
        params = {};
    }
    addResUuid(params, resUuid || this.resUuid);

    return this.httpService.get(this.Constant.BACKEND_BASE
        + this.main + '/' + mainUuid
        + this.detail, {params: params});
};

BaseDetailService.prototype.get = function (mainUuid, uuid, config) {
    return this.httpService.get(this.Constant.BACKEND_BASE
        + this.main + '/' + mainUuid
        + this.detail + '/' + uuid, config);
};

BaseDetailService.prototype.add = function (mainUuid, addInput, config) {
    return this.httpService.post(this.Constant.BACKEND_BASE
        + this.main + '/' + mainUuid
        + this.detail, addInput, config);
};

BaseDetailService.prototype.delete = function (mainUuid, uuid, config) {
    return this.httpService.delete(this.Constant.BACKEND_BASE
        + this.main + '/' + mainUuid
        + this.detail + '/' + uuid, config);
};

BaseDetailService.prototype.modify = function (mainUuid, uuid, updateInput, config) {
    return this.httpService.patch(this.Constant.BACKEND_BASE
        + this.main + '/' + mainUuid
        + this.detail + '/' + uuid, updateInput, config);
};

/**
 * Base service for all extend tables.
 * @param main
 * @param detail
 * @param extend
 * @param httpService
 * @param Constant
 * @constructor
 */
function BaseExtendDetailService(main, detail, extend, httpService, Constant, resUuid) {
    this.main = main;
    this.detail = detail;
    this.extend = extend;
    this.Constant = Constant;
    this.httpService = httpService;
    this.resUuid = resUuid;
}

BaseExtendDetailService.prototype.getAll = function(mainUuid, detailUuid, params, resUuid) {
    if(params) {
        preHandleParams(params);
    } else {
        params = {};
    }
    addResUuid(params, resUuid || this.resUuid);

    return this.httpService.get(this.Constant.BACKEND_BASE
        + this.main + '/' + mainUuid
        + this.detail + '/' + detailUuid
        + this.extend,
        {params: params});
};

BaseExtendDetailService.prototype.get = function (mainUuid, detailUuid, uuid, config) {
    return this.httpService.get(this.Constant.BACKEND_BASE
        + this.main + '/' + mainUuid
        + this.detail + '/' + detailUuid
        + this.extend + '/' + uuid, config);
};

BaseExtendDetailService.prototype.add = function (mainUuid, detailUuid, addInput, config) {
    return this.httpService.post(this.Constant.BACKEND_BASE
        + this.main + '/' + mainUuid
        + this.detail + '/' + detailUuid
        + this.extend, addInput, config);
};

BaseExtendDetailService.prototype.delete = function (mainUuid, detailUuid, uuid, config) {
    return this.httpService.delete(this.Constant.BACKEND_BASE
        + this.main + '/' + mainUuid
        + this.detail + '/' + detailUuid +
        this.extend + '/' + uuid, config);
};

BaseExtendDetailService.prototype.modify = function (mainUuid, detailUuid, uuid, updateInput, config) {
    return this.httpService.patch(this.Constant.BACKEND_BASE
        + this.main + '/' + mainUuid
        + this.detail + '/' + detailUuid
        + this.extend + '/' + uuid, updateInput, config);
};


/**
 * Base service for all extend2 tables.
 * @param main
 * @param detail
 * @param extend
 * @param httpService
 * @param Constant
 * @constructor
 */
function BaseExtend2DetailService(main, detail, extend, extend2, httpService, Constant, resUuid) {
    this.main = main;
    this.detail = detail;
    this.extend = extend;
    this.extend2 = extend2;
    this.Constant = Constant;
    this.httpService = httpService;
    this.resUuid = resUuid;
}

BaseExtend2DetailService.prototype.getAll = function(mainUuid, detailUuid, extendUuid, params, resUuid) {
    if(params) {
        preHandleParams(params);
    } else {
        params = {};
    }
    addResUuid(params, resUuid || this.resUuid);

    return this.httpService.get(this.Constant.BACKEND_BASE
        + this.main + '/' + mainUuid
        + this.detail + '/' + detailUuid
        + this.extend + '/' + extendUuid
        + this.extend2 , {params: params});
};

BaseExtend2DetailService.prototype.get = function (mainUuid, detailUuid, extendUuid, uuid, config) {
    return this.httpService.get(this.Constant.BACKEND_BASE
        + this.main + '/' + mainUuid
        + this.detail + '/' + detailUuid
        + this.extend + '/' + extendUuid
        + this.extend2 + '/' + uuid, config);
};

BaseExtend2DetailService.prototype.add = function (mainUuid, detailUuid, extendUuid, addInput, config) {
    return this.httpService.post(this.Constant.BACKEND_BASE
        + this.main + '/' + mainUuid
        + this.detail + '/' + detailUuid
        + this.extend + '/' + extendUuid
        + this.extend2, addInput, config);
};

BaseExtend2DetailService.prototype.delete = function (mainUuid, detailUuid, extendUuid, uuid, config) {
    return this.httpService.delete(this.Constant.BACKEND_BASE
        + this.main + '/' + mainUuid
        + this.detail + '/' + detailUuid
        + this.extend + '/' + extendUuid
        + this.extend2 + '/' + uuid, config);
};

BaseExtend2DetailService.prototype.modify = function (mainUuid, detailUuid, extendUuid, uuid, updateInput, config) {
    return this.httpService.patch(this.Constant.BACKEND_BASE
        + this.main + '/' + mainUuid
        + this.detail + '/' + detailUuid
        + this.extend + '/' + extendUuid
        + this.extend2 + '/' + uuid, updateInput, config);
};




function BaseDetailNoMstUuidInpathService(mainVariableInDetail, detail, httpService, Constant, resUuid) {
    this.mainVariableInDetail = mainVariableInDetail;
    this.detail = detail;
    this.Constant = Constant;
    this.httpService = httpService;
    this.resUuid = resUuid;
}

BaseDetailNoMstUuidInpathService.prototype.getAll = function(mainUuid, params, resUuid) {
    if(params) {
        preHandleParams(params);
    } else {
        params = {};
    }
    addResUuid(params, resUuid || this.resUuid);
    params[this.mainVariableInDetail] = mainUuid;
    return this.httpService.get(this.Constant.BACKEND_BASE
        + this.detail, {params: params});
};

BaseDetailNoMstUuidInpathService.prototype.get = function (mainUuid, uuid, config) {
    return this.httpService.get(this.Constant.BACKEND_BASE
        + this.detail + '/' + uuid, config);
};

BaseDetailNoMstUuidInpathService.prototype.add = function (mainUuid, addInput, config) {
    addInput[this.mainVariableInDetail] = mainUuid;
    return this.httpService.post(this.Constant.BACKEND_BASE
        + this.detail, addInput, config);
};

BaseDetailNoMstUuidInpathService.prototype.delete = function (mainUuid, uuid, config) {
    return this.httpService.delete(this.Constant.BACKEND_BASE
        + this.detail + '/' + uuid, config);
};

BaseDetailNoMstUuidInpathService.prototype.modify = function (mainUuid, uuid, updateInput, config) {
    updateInput[this.mainVariableInDetail] = mainUuid;
    return this.httpService.patch(this.Constant.BACKEND_BASE
        + this.detail + '/' + uuid, updateInput, config);
};



function BaseExtendDetailNoMstUuidInpathService(main, detail, extend, httpService, Constant, resUuid) {
    this.main = main;
    this.detail = detail;
    this.extend = extend;
    this.Constant = Constant;
    this.httpService = httpService;
    this.resUuid = resUuid;
}

BaseExtendDetailNoMstUuidInpathService.prototype.getAll = function(mainUuid, detailUuid, params, resUuid) {
    if(params) {
        preHandleParams(params);
    } else {
        params = {};
    }
    addResUuid(params, resUuid || this.resUuid);

    return this.httpService.get(this.Constant.BACKEND_BASE
        + this.detail + '/' + detailUuid
        + this.extend,
        {params: params});
};

BaseExtendDetailNoMstUuidInpathService.prototype.get = function (mainUuid, detailUuid, uuid, config) {
    return this.httpService.get(this.Constant.BACKEND_BASE
        + this.detail + '/' + detailUuid
        + this.extend + '/' + uuid, config);
};

BaseExtendDetailNoMstUuidInpathService.prototype.add = function (mainUuid, detailUuid, addInput, config) {
    return this.httpService.post(this.Constant.BACKEND_BASE
        + this.detail + '/' + detailUuid
        + this.extend, addInput, config);
};

BaseExtendDetailNoMstUuidInpathService.prototype.delete = function (mainUuid, detailUuid, uuid, config) {
    return this.httpService.delete(this.Constant.BACKEND_BASE
        + this.detail + '/' + detailUuid +
        this.extend + '/' + uuid, config);
};

BaseExtendDetailNoMstUuidInpathService.prototype.modify = function (mainUuid, detailUuid, uuid, updateInput, config) {
    return this.httpService.patch(this.Constant.BACKEND_BASE
        + this.detail + '/' + detailUuid
        + this.extend + '/' + uuid, updateInput, config);
};

