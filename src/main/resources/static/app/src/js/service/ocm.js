angular.module('IOne-Production').service('ChannelService', function ($http, Constant) {
    this.getAll = function (sizePerPage, page, confirm, status, channelName, resUuid) {
        confirm = confirm == 0 ? '' : confirm;
        status = status == 0 ? '' : status;

        var url = '/channels?size=' + sizePerPage
            + '&page=' + page
            + '&confirm=' + confirm
            + '&status=' + status;
        if (channelName !== undefined && channelName !== null) {
            url = url + '&name=' + channelName;
        }

        if (resUuid !== undefined && resUuid !== null) {
            url = url + '&resUuid=' + resUuid;
        }
        return $http.get(Constant.BACKEND_BASE + url);
    };

    this.get = function (uuid) {
        return $http.get(Constant.BACKEND_BASE + '/channels/' + uuid);
    };

});

angular.module('IOne-Production').service('ChannelPriceService', function ($http, Constant) {
    this.getAll = function (channelUuid, resUuid) {
        var url = '/channelPrices?channelUuid=' + channelUuid + '&resUuid=' + resUuid;
        return $http.get(Constant.BACKEND_BASE + url);
    };

    this.getAllWithPaging = function (sizePerPage, page, channelUuid, catalogueName, itemName, warehouseQueryUuid) {
        var url = '/channelPrices?size=' + sizePerPage
            + '&page=' + page
            + '&channelUuid=' + channelUuid;

        if (catalogueName !== undefined && catalogueName !== null) {
            url = url + '&catalogueName=' + catalogueName;
        }

        if (itemName !== undefined && itemName !== null) {
            url = url + '&itemName=' + itemName;
        }

        if (warehouseQueryUuid !== undefined && warehouseQueryUuid !== null) {
            url = url + '&warehouseUuid=' + warehouseQueryUuid;
        }
        return $http.get(Constant.BACKEND_BASE + url);
    };

    this.getByItemUuid = function (channelUuid, itemUuid) {
        var url = '/channelPrices?channelUuid=' + channelUuid + "&itemUuid=" + itemUuid;
        return $http.get(Constant.BACKEND_BASE + url);
    };

    this.getAllCount = function (channelUuid) {
        var ChannelPriceQuery = {
            channelUuid: channelUuid
        };
        var url = 'channelPrices/' + channelUuid + '/count/';
        return $http.get(Constant.BACKEND_BASE + url);
    };

    this.getAllCountByChannelUuid = function (channelUuid) {
        var ChannelPriceQuery = {
            channelUuid: channelUuid
        };
        var url = 'channels/' + channelUuid + '/count/';
        return $http.get(Constant.BACKEND_BASE + url);
    };

    this.get = function (ChannelPriceUuid) {
        return $http.get(Constant.BACKEND_BASE + '/channelPrices/' + ChannelPriceUuid);
    };

    this.add = function (ChannelPriceInput) {
        return $http.post(Constant.BACKEND_BASE + '/channelPrices/', ChannelPriceInput);
    };

    this.modify = function (ChannelPriceUuid, ChannelPriceUpdateInput) {
        return $http.patch(Constant.BACKEND_BASE + '/channelPrices/' + ChannelPriceUuid, ChannelPriceUpdateInput);
    };

    this.modifyAll = function (ChannelPriceUpdateInput) {
        return $http.patch(Constant.BACKEND_BASE + '/channelPrices/', ChannelPriceUpdateInput);
    };

    this.delete = function (ChannelPriceUuid) {
        return $http.delete(Constant.BACKEND_BASE + '/channelPrices/' + ChannelPriceUuid);
    };

    this.updateStandardPriceInBatch = function (channelUuid, catalogueName, itemName, warehouseUuid, standardPriceDiscountRate) {
        var url = '/channelPrices/batch?';
        var ChannelPriceBatchUpdateInput = {channelUuid: channelUuid};

        if (catalogueName !== undefined && catalogueName !== null) {
            ChannelPriceBatchUpdateInput.catalogueName = catalogueName;
        }

        if (itemName !== undefined && itemName !== null) {
            ChannelPriceBatchUpdateInput.itemName = itemName;
        }
        if (warehouseUuid !== undefined && warehouseUuid !== null) {
            ChannelPriceBatchUpdateInput.warehouseUuid = warehouseUuid;
        }
        if (standardPriceDiscountRate !== undefined && standardPriceDiscountRate !== null) {
            ChannelPriceBatchUpdateInput.standardPriceDiscountRate = standardPriceDiscountRate;
            return $http.patch(Constant.BACKEND_BASE + url, ChannelPriceBatchUpdateInput);
        }
    };

    this.updateSalePriceInBatch = function (channelUuid, catalogueName, itemName, warehouseUuid, saleDiscountRate) {
        var url = '/channelPrices/batch?';
        var ChannelPriceBatchUpdateInput = {channelUuid: channelUuid};

        if (catalogueName !== undefined && catalogueName !== null) {
            ChannelPriceBatchUpdateInput.catalogueName = catalogueName;
        }

        if (itemName !== undefined && itemName !== null) {
            ChannelPriceBatchUpdateInput.itemName = itemName;
        }
        if (warehouseUuid !== undefined && warehouseUuid !== null) {
            ChannelPriceBatchUpdateInput.warehouseUuid = warehouseUuid;
        }
        if (saleDiscountRate !== undefined && saleDiscountRate !== null) {
            ChannelPriceBatchUpdateInput.saleDiscountRate = saleDiscountRate;
            return $http.patch(Constant.BACKEND_BASE + url, ChannelPriceBatchUpdateInput);
        }
    };


    this.updateWarehouseInBatch = function (channelUuid, catalogueName, itemName, warehouseUuid, warehouseUpdatedUuid) {
        var url = '/channelPrices/batch?';
        var ChannelPriceBatchUpdateInput = {channelUuid: channelUuid};

        if (catalogueName !== undefined && catalogueName !== null) {
            ChannelPriceBatchUpdateInput.catalogueName = catalogueName;
        }

        if (itemName !== undefined && itemName !== null) {
            ChannelPriceBatchUpdateInput.itemName = itemName;
        }

        if (warehouseUuid !== undefined && warehouseUuid !== null) {
            ChannelPriceBatchUpdateInput.warehouseUuid = warehouseUuid;
        }

        if (warehouseUpdatedUuid !== undefined && warehouseUpdatedUuid !== null) {
            ChannelPriceBatchUpdateInput.warehouseUpdatedUuid = warehouseUpdatedUuid;
            return $http.patch(Constant.BACKEND_BASE + url, ChannelPriceBatchUpdateInput);
        }
    };


});


angular.module('IOne-Production').service('WarehousesService', function ($http, Constant) {
    this.getAll = function () {
        return $http.get(Constant.BACKEND_BASE + '/warehouses/');
    };
});


angular.module('IOne-Production').service('OCMParametersService', function ($http, Constant) {
    this.getAll = function () {
        return $http.get(Constant.BACKEND_BASE + '/ocmParameters/');
    };

    this.getAllWithPaging = function (sizePerPage, page, coefficient, discount) {
        var url = '/ocmParameters?size=' + sizePerPage
            + '&page=' + page;

        if (!isNaN(parseFloat(coefficient))) {
            url = url + '&standardPriceCoefficient=' + coefficient;
        }

        if (!isNaN(parseFloat(discount))) {
            url = url + '&saleDiscountRate=' + discount;
        }

        return $http.get(Constant.BACKEND_BASE + url);
    };

    this.get = function (uuid) {
        return $http.get(Constant.BACKEND_BASE + '/ocmParameters/' + uuid);
    };

    this.delete = function (uuid) {
        return $http.delete(Constant.BACKEND_BASE + '/ocmParameters/' + uuid);
    };

    this.modify = function (uuid, parametersUpdateInput) {
        return $http.patch(Constant.BACKEND_BASE + '/ocmParameters/' + uuid, parametersUpdateInput);
    };

    this.add = function (parametersInput) {
        return $http.post(Constant.BACKEND_BASE + '/ocmParameters/', parametersInput);
    };
});

angular.module('IOne-Production').service('OCMChannelService', function ($http, Constant) {
    this.getAll = function (sizePerPage, page, confirm, status, no, name, channelFlag, resUuid) {
        confirm = confirm == 0 ? '' : confirm;
        status = status == 0 ? '' : status;

        var url = '/channels?size=' + sizePerPage
            + '&page=' + page
            + '&confirm=' + confirm
            + '&status=' + status;

        if (no !== undefined && no !== null && no !== '') {
            url = url + '&no=' + no;
        }

        if (name !== undefined && name !== null && name !== '') {
            url = url + '&name=' + name;
        }

        if (channelFlag !== undefined && channelFlag !== null && channelFlag !== '' && channelFlag != 0) {
            url = url + '&channelFlag=' + channelFlag;
        }

        if (resUuid !== undefined && resUuid !== null) {
            url = url + '&resUuid=' + resUuid;
        }
        return $http.get(Constant.BACKEND_BASE + url);
    };

    this.get = function (uuid) {
        return $http.get(Constant.BACKEND_BASE + '/channels/' + uuid);
    };

    this.delete = function (uuid) {
        return $http.delete(Constant.BACKEND_BASE + '/channels/' + uuid);
    };

    this.modify = function (uuid, UpdateInput) {
        return $http.patch(Constant.BACKEND_BASE + '/channels/' + uuid, UpdateInput);
    };

    this.add = function (AddInput) {
        return $http.post(Constant.BACKEND_BASE + '/channels', AddInput);
    };

});

angular.module('IOne-Production').service('OCMMallService', function ($http, Constant) {
    this.getAll = function (sizePerPage, page, confirm, status, no, name, mallFlag, resUuid) {
        confirm = confirm == 0 ? '' : confirm;
        status = status == 0 ? '' : status;

        var url = '/malls?size=' + sizePerPage
            + '&page=' + page
            + '&confirm=' + confirm
            + '&status=' + status;

        if (no !== undefined && no !== null && no !== '') {
            url = url + '&no=' + no;
        }

        if (name !== undefined && name !== null && name !== '') {
            url = url + '&name=' + name;
        }

        if (mallFlag !== undefined && mallFlag !== null && mallFlag !== '' && mallFlag != 0) {
            url = url + '&mallFlag=' + mallFlag;
        }

        if (resUuid !== undefined && resUuid !== null) {
            url = url + '&resUuid=' + resUuid;
        }
        return $http.get(Constant.BACKEND_BASE + url);
    };

    this.get = function (uuid) {
        return $http.get(Constant.BACKEND_BASE + '/malls/' + uuid);
    };

    this.delete = function (uuid) {
        return $http.delete(Constant.BACKEND_BASE + '/malls/' + uuid);
    };

    this.modify = function (uuid, UpdateInput) {
        return $http.patch(Constant.BACKEND_BASE + '/malls/' + uuid, UpdateInput);
    };

    this.add = function (AddInput) {
        return $http.post(Constant.BACKEND_BASE + '/malls', AddInput);
    };

});
