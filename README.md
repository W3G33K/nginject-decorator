###
# nginject-decorator #
###

`@NgInject(...inject)`

Simply sets a static $inject property onto a component, controller, service or filter class 
which specifies what dependencies AngularJS built-in $injector will need to inject at 
runtime and avoids mucking up module declarations with unnecessary verbosity.

###
## Usage ##
###

```js
// AngularJS will know to inject $http service even after minification.
@NgInject("$http")
class TranslateService {
	constructor($http) {
		/* ... */
	}
}

// AngularJS will know to inject $scope and translateService service 
// even after minification.
@NgInject("$scope", "translateService")
class GreetingController {
	constructor($scope, translateService) {
		/* ... */
	}
}
```

###
### Requirements ###
###

* @babel/core v7.3.4
* @babel/plugin-proposal-decorators v7.3.0
* @babel/preset-env v7.3.4

###
### Example ###
###

* **angular-es6-starter** - [https://github.com/W3G33K/angular-es6-starter](https://github.com/W3G33K/angular-es6-starter)
