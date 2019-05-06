'use strict';

angular.module('employeeList', ['ngRoute'])
  .component('employeeList', {
    templateUrl: 'employee-list/employee-list.template.html',
    controller: function EmployeeListController($scope) {
      $scope.employees = [
        {
          'id': 1,
          'lastName': 'Fontanilla',
          'firstName': 'Kevin',
          'email': 'kevin.fontanilla50@gmail.com'
        },
        {
          'id': 2,
          'lastName': 'Salvador',
          'firstName': 'Janella',
          'email': 'janella.salvador@gmail.com'
        },
        {
          'id': 3,
          'lastName': 'Hood',
          'firstName': 'Robina',
          'email': 'robina.hood@gmail.com'
        }
      ];

      $scope.addEmployee = () => {
        $scope.newEmployee.id = $scope.employees.length + 1;
        $scope.employees.push($scope.newEmployee)
        Push.create('A new employee has been added!')
      }

      $scope.selectEmployee = (employee) => {
        $scope.selectedEmployee = employee
        $scope.selectedEmployeeUpdate = angular.copy(employee)
      }

      $scope.updateEmployee = (selectedEmployee) => {
        $scope.employees[selectedEmployee.id - 1].lastName = selectedEmployee.lastName
        $scope.employees[selectedEmployee.id - 1].firstName = selectedEmployee.firstName
        $scope.employees[selectedEmployee.id - 1].email = selectedEmployee.email
        Push.create('An employee has been updated!')
      }

      $scope.deleteEmployee = (selectedEmployee) => {
        var index = $scope.employees.indexOf(selectedEmployee);
        $scope.employees.splice(index, 1);  
        Push.create('An employee has been deleted!')   
      }
    }
  });