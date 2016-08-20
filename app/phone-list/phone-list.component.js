// Register 'phoneList' component, along with its associated controller and template

angular.
    module('phoneList').
    component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: function PhoneListController() {
        this.phones = [
            {
                name: 'Nexus S',
                snippet: 'Fast just got faster.',
                age: 1
            },
            {
                name: 'Motorola XOOM',
                snippet: 'The next, next generation tablet.',
                age: 2
            },
            {
                name: 'Motorola XOOM with WiFi',
                snippet: 'The next, next phone.',
                age: 3
            }
        ];
        this.orderProp = 'age';
    }
});




