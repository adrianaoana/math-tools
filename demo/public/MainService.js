/*******************************************************************************
 * // Main API service provides for HTTP get and put calls to server
 ******************************************************************************/
MainApp.factory('MainAPI', function($http) {

    var apiService = {                  
		calculateAnswers: function(nr){
			var promise = $http.post('/math/calculateAnswers/', nr).then(function(response) {
		     	return response.data; 
			}, function(errResponse) {
	            console.error('Error');
	        });
	        return promise;
		}       
    };	
	return apiService;
});
