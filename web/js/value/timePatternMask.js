angular.module("escala").config(['uiMask.ConfigProvider', function(uiMaskConfigProvider) {
    uiMaskConfigProvider.maskDefinitions({'H': /[0-2]/, 'h': /[0-9]/, 'M': /[0-5]/, 'm': /[0-9]/, 'T' : /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/});
}]);
