var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var account = /** @class */ (function () {
    function account(accountNo, Balance) {
        if (accountNo === void 0) { accountNo = 1; }
        if (Balance === void 0) { Balance = 0; }
        this.accountNo = accountNo;
        this.Balance = Balance;
    }
    account.prototype.debitAmount = function () { };
    account.prototype.creditAmount = function () { };
    account.prototype.getBalance = function () { };
    return account;
}());
var current_Account = /** @class */ (function (_super) {
    __extends(current_Account, _super);
    function current_Account() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    current_Account.prototype.addCustomer = function () { };
    ;
    current_Account.prototype.removeCustomer = function () { };
    ;
    return current_Account;
}(account));
var saving_Account = /** @class */ (function (_super) {
    __extends(saving_Account, _super);
    function saving_Account() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    saving_Account.prototype.addCustomer = function () { };
    ;
    saving_Account.prototype.removeCustomer = function () { };
    ;
    return saving_Account;
}(account));
