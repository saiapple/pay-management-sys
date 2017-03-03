angular.module('IOne-Production').service('Production', function($http, Constant) {
    this.getAll = function (sizePerPage, page, confirm, release, status, prodType, stopProd, no, name, resUuid, eshopType, assemblingFlag, orderByName) {
        confirm = confirm == 0 ? '' : confirm;
        release = release == 0 ? '' : release;
        status = status == 0 ? '' : status;
        prodType = prodType == 0 ? '' : prodType;
        stopProd = stopProd == 0 ? '' : stopProd;

        if(no == undefined) {
            no = '';
        } else {
            no = no.replace(/\+/g, "%2B");
        }

        if(name == undefined) {
            name = '';
        } else {
            name = name.replace(/\+/g, "%2B");
        }
        if(resUuid == undefined) {
            resUuid = '';
        }
        if(assemblingFlag == undefined) {
            assemblingFlag = '';
        }
        if(eshopType == undefined || eshopType == 0) {
            eshopType = '';
        }
        if (orderByName == undefined || orderByName == null) {
            orderByName = '2';
        }

        return $http.get(Constant.BACKEND_BASE + '/items?size=' + sizePerPage
            + '&page=' + page
            + '&confirm=' + confirm
            + '&status=' + status
            + '&release=' + release
            + '&type=' + prodType
            + '&stopProd=' + stopProd
            + '&no=' + no
            + '&name=' + name
            + '&eshopType=' + eshopType
            + '&assemblingFlag=' + assemblingFlag
            + '&resUuid=' + resUuid
            + '&orderByName=' + orderByName);
    };

    this.get = function(productionUuid, resUuid) {
        return $http.get(Constant.BACKEND_BASE + '/items/' + productionUuid + '?resUuid=' + resUuid);
    };

    this.modify = function(production) {
        return $http.patch(Constant.BACKEND_BASE + '/items/' + production.uuid, production);
    };

    this.add = function(production) {
        return $http.post(Constant.BACKEND_BASE + '/items/', production);
    };

    this.delete = function(productionUuid) {
        return $http.delete(Constant.BACKEND_BASE + '/items/' + productionUuid);
    };

    this.addImage = function(productionUuid, imageUuid) {
        return $http.post(Constant.BACKEND_BASE + '/items/' + productionUuid + '/images',{itemImageFileUuid: imageUuid});
    };

    this.deleteImage = function(productionUuid, type) {
        return $http.delete(Constant.BACKEND_BASE + '/items/' + productionUuid + '/images?imageTypes=' + type);
    };
});

angular.module('IOne-Production').service('ProductionBom', function($http, Constant) {
    this.getAll = function(productionUuid) {
        return $http.get(Constant.BACKEND_BASE + '/items/' + productionUuid + '/boms');
    };

    this.add = function(productionUuid, bom) {
        return $http.post(Constant.BACKEND_BASE + '/items/' + productionUuid + '/boms', bom);
    };

    this.modify = function(productionUuid, bom) {
        return $http.patch(Constant.BACKEND_BASE + '/items/' + productionUuid + '/boms/' + bom.uuid, bom);
    };

    this.delete = function(productionUuid, bomUuid) {
        return $http.delete(Constant.BACKEND_BASE + '/items/' + productionUuid + '/boms/' + bomUuid);
    };
});

angular.module('IOne-Production').service('ProductionPic', function($http, Constant) {
    this.getAll = function(productionUuid) {
        return $http.get(Constant.BACKEND_BASE + '/items/' + productionUuid + '/paths');
    };

    this.add = function(production) {
        return $http.post(Constant.BACKEND_BASE + '/items/' + production.uuid + '/paths', {
            itemUuid : production.uuid,
            no : Math.random().toString(36).substring(10)
        });
    };

    this.addImage = function(productionUuid, itemPathsUuid, fileUuid) {
        return $http.post(Constant.BACKEND_BASE + '/items/' + productionUuid + '/paths/' + itemPathsUuid + '/images', {imageFileUuid: fileUuid});
    };

    this.deleteImage = function(productionUuid, itemPathsUuid) {
        return $http.delete(Constant.BACKEND_BASE + '/items/' + productionUuid + '/paths/' + itemPathsUuid);
    };
});

angular.module('IOne-Production').service('ProductionCustom', function($http, Constant) {
    this.getAll = function() {
        return $http.get(Constant.BACKEND_BASE + '/itemCustoms');
    };

    this.getCustom = function(customUuid) {
        return $http.get(Constant.BACKEND_BASE + '/itemCustoms/' + customUuid + '/scopes');
    }
});

angular.module('IOne-Production').service('ProductionItemCustom', function($http, Constant) {
    this.get = function(productionUuid) {
        if(productionUuid == undefined) {
            productionUuid = '';
        }
        return $http.get(Constant.BACKEND_BASE + '/items/' + productionUuid + '/customs?itemUuid=' + productionUuid);
    };

    this.add = function(productionUuid, itemCustom) {
        return $http.post(Constant.BACKEND_BASE + '/items/' + productionUuid + '/customs', itemCustom);
    };

    this.modify = function(productionUuid, itemCustomUuid, itemCustom) {
        return $http.patch(Constant.BACKEND_BASE + '/items/' + productionUuid + '/customs/' + itemCustomUuid, itemCustom);
    };

    this.delete = function(productionUuid, itemCustomUuid) {
        return $http.delete(Constant.BACKEND_BASE + '/items/' + productionUuid + '/customs/' + itemCustomUuid);
    }
});

angular.module('IOne-Production').service('ProductionArea', function($http, Constant) {
    this.getAll = function() {
        return $http.get(Constant.BACKEND_BASE + '/areas');
    };

    this.get = function(productionUuid) {
        return $http.get(Constant.BACKEND_BASE + '/areas?itemUuid=' + productionUuid);
    };
});

angular.module('IOne-Production').service('ProductionBrand', function($http, Constant) {
    this.getAll = function(resUuid) {
        if(resUuid == undefined) {
            resUuid = '';
        }

        return $http.get(Constant.BACKEND_BASE + '/brands?'
        + 'resUuid=' + resUuid);
    };

    this.get = function(productionUuid) {
        return $http.get(Constant.BACKEND_BASE + '/areas?itemUuid=' + productionUuid);
    };

    this.addImage = function(brandUuid, fileUuid) {
        return $http.patch(Constant.BACKEND_BASE + '/brands/' + brandUuid + '?fileUuid=' + fileUuid, {});
    };
});

angular.module('IOne-Production').service('ProductionCatalogueDetails', function($http, Constant) {
    this.getByCatalogue = function(catalogueUuid, sizePerPage, page, no, name, resUuid) {
        if(no == undefined) {
            no = '';
        } else {
            no = no.replace(/\+/g, "%2B");
        }

        if(name == undefined) {
            name = '';
        } else {
            name = name.replace(/\+/g, "%2B");
        }

        if(resUuid == undefined) {
            resUuid = '';
        }

        return $http.get(Constant.BACKEND_BASE + '/itemCatalogueDetails?catalogueUuid=' + catalogueUuid +
            '&size=' + sizePerPage +
            '&page=' + page +
            '&itemNo=' + no +
            '&itemName=' + name +
            '&resUuid=' + resUuid);
    };

    this.getByCatalogueAndChannel = function(catalogueUuid, channelUuid,resUuid) {
      var url = '/itemCatalogueDetails/channel/' + channelUuid + '?catalogueUuid=' + catalogueUuid;
       if(resUuid !== undefined && resUuid !== null) {
           url = url + '&resUuid=' + resUuid;
       }
       return $http.get(Constant.BACKEND_BASE + url);

    };

    this.postByCatalogueAndChannel = function(catalogueUuid, channelUuid,resUuid) {
      var url = '/itemCatalogueDetails/channel/' + channelUuid + '?catalogueUuid=' + catalogueUuid;
       if(resUuid !== undefined && resUuid !== null) {
           url = url + '&resUuid=' + resUuid;
       }
       return $http.post(Constant.BACKEND_BASE + url);

    };

    this.getByProduction = function(productionUuid, sizePerPage, page) {
        return $http.get(Constant.BACKEND_BASE + '/itemCatalogueDetails?itemUuid=' + productionUuid + '&size=' + sizePerPage + '&page=' + page);
    };

    this.addLink = function(catalogueUuid, itemUuid) {
        return $http.post(Constant.BACKEND_BASE + '/itemCatalogueDetails', {
            catalogueUuid: catalogueUuid,
            itemUuid: itemUuid
        });
    };

    this.delete = function(uuid) {
        return $http.delete(Constant.BACKEND_BASE + '/itemCatalogueDetails/' + uuid);
    };

    this.modify = function(uuid, item) {
        return $http.patch(Constant.BACKEND_BASE + '/itemCatalogueDetails/' + uuid, item);
    };
});

