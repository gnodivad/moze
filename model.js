exports.AHAccount = {
  name: 'AHAccount',
  primaryKey: 'identifier',
  properties: {
    identifier: 'string?',
    name: 'string?',
    imageName: 'string?',
    desc: 'string?',
    group: 'AHAccountGroup',
    mainCurrency: 'AHCurrency',
    depositAccount: 'AHAccount',
    lastAdjustRecordID: 'string?',
    sequence: 'int',
    startDay: 'int',
    paymentDeadline: 'int',
    budgetLimit: 'int',
    createDate: 'date?',
    type: 'int',
    isBalanceIncluded: 'bool',
    isArchived: 'bool',
    isCreditAccount: 'bool',
    isAutoDeposit: 'bool',
    originalAmount: 'double',
    creditLimit: 'double',
    balanceLimit: 'double',
    depositAmount: 'double',
    paymentDeadlineType: 'int',
    creditSharingID: 'string?',
    isShowOnWidget: 'bool',
    isAutoPostponed: 'bool'
  }
}

exports.AHAccountGroup = {
  name: 'AHAccountGroup',
  primaryKey: 'identifier',
  properties: {
    identifier: 'string?',
    name: 'string?',
    sequence: { type: 'int', indexed: true },
    type: 'int',
    hidden: 'bool'
  }
}

exports.AHAccountPayment = {
  name: 'AHAccountPayment',
  primaryKey: 'identifier',
  properties: {
    identifier: 'string?',
    account: 'AHAccount',
    year: 'int',
    month: 'int',
    isReminderDisabled: 'bool'
  }
}

exports.AHAppConfig = {
  name: 'AHAppConfig',
  properties: {
    transferInAccount: 'AHAccount',
    transferOutAccount: 'AHAccount',
    invoiceAccount: 'string?',
    invoicePassword: 'string?',
    invoiceStatus: 'int',
    accountPeriodType: 'int',
    databaseVersion: 'int',
    statisticsCurrencyCode: 'string?',
    invoiceSortType: 'int',
    downloadDate: 'date?',
    dropboxBackupTime: 'date?',
    iCloudBackupTime: 'date?',
    emailBackupTime: 'date?',
    transferCode: 'string?',
    transactionID: 'string?',
    copiedTimeType: 'int'
  }
}

exports.AHBudget = {
  name: 'AHBudget',
  primaryKey: 'identifier',
  properties: {
    identifier: 'string?',
    project: 'AHProject',
    category: 'AHCategory',
    classification: 'AHClassification',
    mainCurrency: 'AHCurrency',
    startDate: 'date?',
    endDate: 'date?',
    amount: 'double',
    proportion: 'double',
    reminderRatio: 'int',
    notifyStep: 'int',
    isBudgetAccumulated: 'bool',
    isDailyBudgetEnabled: 'bool',
    isDailyBudgetProportional: 'bool',
    isBudgetProportional: 'bool',
    isPreviousBudgeyApplied: 'bool',
    isOverspentBudgetIncluded: 'bool',
    isIncomeBudgetIncluded: 'bool'
  }
}

exports.AHCategory = {
  name: 'AHCategory',
  primaryKey: 'identifier',
  properties: {
    identifier: 'string?',
    name: 'string?',
    imageName: 'string?',
    sequence: 'int',
    type: 'int',
    color: 'data?',
    isHidden: 'bool'
  }
}

exports.AHClassification = {
  name: 'AHClassification',
  primaryKey: 'identifier',
  properties: {
    identifier: 'string?',
    name: 'string?',
    imageName: 'string?',
    recentID: 'string?',
    category: 'AHCategory',
    defaultOutAccount: 'AHAccount',
    defaultInAccount: 'AHAccount',
    defaultAccount: 'AHAccount',
    defaultProject: 'AHProject',
    sequence: 'int',
    isMultipleRecorded: 'bool',
    isHidden: 'bool'
  }
}

exports.AHClassificationConfig = {
  name: 'AHClassificationConfig',
  primaryKey: 'identifier',
  properties: {
    identifier: 'string?',
    classification: 'AHClassification',
    currency: 'AHCurrency',
    price: 'double'
  }
}

exports.AHCreditSharing = {
  name: 'AHCreditSharing',
  primaryKey: 'identifier',
  properties: {
    identifier: 'string?',
    accounts: 'AHAccount[]'
  }
}

exports.AHCurrency = {
  name: 'AHCurrency',
  primaryKey: 'code',
  properties: {
    code: 'string?',
    customName: 'string?',
    isFavorite: 'bool',
    isDefault: 'bool',
    isOnline: 'bool'
  }
}

exports.AHCurrencyConversion = {
  name: 'AHCurrencyConversion',
  primaryKey: 'recordID',
  properties: {
    recordID: 'string?',
    baseCurrencyCode: 'string?',
    targetCurrencyCode: 'string?',
    exchangeRate: 'double'
  }
}

exports.AHExchangeRate = {
  name: 'AHExchangeRate',
  properties: {
    dateString: 'string?',
    baseCode: 'string?',
    targetCode: 'string?',
    rate: 'double'
  }
}

exports.AHInstallment = {
  name: 'AHInstallment',
  primaryKey: 'identifier',
  properties: {
    identifier: 'string?',
    account: 'AHAccount',
    startDate: 'date?',
    times: 'int',
    total: 'double',
    installment: 'double',
    remainder: 'double',
    type: 'int',
    mergeType: 'int',
    isRoundedNumber: 'bool'
  }
}

exports.AHInvoice = {
  name: 'AHInvoice',
  primaryKey: 'number',
  properties: {
    number: 'string?',
    encrypt: 'string?',
    customID: 'string?',
    sellerID: 'string?',
    randomNumber: 'string?',
    sellerName: 'string?',
    sellerAddress: 'string?',
    interval: 'string?',
    details: 'string?',
    prize: 'string?',
    prizeNumber: 'string?',
    prizeAmount: 'string?',
    recordID: 'string?',
    carrierName: 'string?',
    date: 'date?',
    time: 'date?',
    noTaxPrice: 'double',
    taxPrice: 'double',
    decode: 'int',
    status: 'int',
    isChecked: 'bool',
    carrierType: 'string?',
    items: 'string?',
    prices: 'string?',
    bonus: 'double',
    isHidden: 'bool'
  }
}

exports.AHLoan = {
  name: 'AHLoan',
  primaryKey: 'identifier',
  properties: {
    identifier: 'string?',
    borrower: 'string?',
    account: 'AHAccount',
    startDate: 'date?',
    endDate: 'date?',
    amount: 'double',
    repayment: 'double',
    settle: 'bool'
  }
}

exports.AHPackage = {
  name: 'AHPackage',
  primaryKey: 'identifier',
  properties: {
    identifier: 'string?',
    imageName: 'string?',
    name: 'string?',
    desc: 'string?',
    tags: 'string?',
    store: 'string?',
    invoiceNumber: 'string?',
    eventID: 'string?',
    feeName: 'string?',
    bonusName: 'string?',
    currency: 'AHCurrency',
    records: 'AHRecord[]',
    date: { type: 'date?', indexed: true },
    chargeDate: 'date?',
    timeSeconds: 'int',
    eventType: 'int',
    happenType: 'int',
    installment: 'double',
    fee: 'double',
    bonus: 'double',
    index: 'int',
    isEnabled: 'bool',
    refundID: 'string?',
    type: 'int',
    isChecked: 'bool'
  }
}

exports.AHPeriod = {
  name: 'AHPeriod',
  primaryKey: 'identifier',
  properties: {
    identifier: 'string?',
    type: 'int',
    times: 'int',
    count: 'int',
    unit: 'int',
    startDate: 'date?'
  }
}

exports.AHPreference = {
  name: 'AHPreference',
  properties: {
    passcodeEnable: 'bool',
    alarmEnable: 'bool',
    eventAlarmEnable: 'bool',
    imageSaving: 'bool',
    walkThroughFinish: 'bool',
    showBalance: 'bool',
    carouselEnable: 'bool',
    transitionAnimationEnable: 'bool',
    showTips: 'bool',
    receiptScan: 'bool',
    alarmTime: 'date?',
    passcode: 'string?',
    mainCurrency: 'AHCurrency',
    themeColor: 'data?',
    expenseIncomeColor: 'int',
    recordOrder: 'int',
    numberPadType: 'int',
    theme: 'int',
    firstWeekday: 'int',
    completeAnimation: 'bool'
  }
}

exports.AHProject = {
  name: 'AHProject',
  primaryKey: 'identifier',
  properties: {
    identifier: 'string?',
    imageName: 'string?',
    name: 'string?',
    mainCurrency: 'AHCurrency',
    coveredAccounts: 'AHAccount[]',
    createDate: 'date?',
    period: 'int',
    periodUnit: 'int',
    periodTimes: 'int',
    sequence: 'int',
    isPreviousBudgetApply: 'bool',
    isStatistics: 'bool',
    isArchived: 'bool',
    isShowOnHome: 'bool'
  }
}

exports.AHRecord = {
  name: 'AHRecord',
  primaryKey: 'identifier',
  properties: {
    identifier: 'string?',
    imageName: 'string?',
    name: 'string?',
    desc: 'string?',
    tags: 'string?',
    eventID: 'string?',
    transferID: 'string?',
    store: 'string?',
    invoiceNumber: 'string?',
    packageID: 'string?',
    feeName: 'string?',
    bonusName: 'string?',
    currency: 'AHCurrency',
    currencyConversion: 'AHCurrencyConversion',
    account: 'AHAccount',
    project: 'AHProject',
    classification: 'AHClassification',
    target: 'AHTarget',
    date: { type: 'date?', indexed: true },
    chargeDate: 'date?',
    eventType: 'int',
    timeSeconds: 'int',
    index: 'int',
    type: 'int',
    happenType: 'int',
    price: 'double',
    fee: 'double',
    bonus: 'double',
    total: 'double',
    isTransferIn: 'bool',
    isEnabled: 'bool',
    refundID: 'string?',
    isChecked: 'bool'
  }
}

exports.AHReport = {
  name: 'AHReport',
  primaryKey: 'identifier',
  properties: {
    identifier: 'string?',
    imageName: 'string?',
    name: 'string?',
    currency: 'AHCurrency',
    createDate: 'date?',
    period: 'int',
    periodUnit: 'int',
    periodTimes: 'int',
    accounts: 'AHAccount[]',
    projects: 'AHProject[]',
    classifications: 'AHClassification[]',
    recordNames: 'string?',
    stores: 'string?',
    tags: 'string?',
    minPrice: 'double',
    maxPrice: 'double',
    recordType: 'int',
    eventType: 'int',
    happenType: 'int',
    transactionChartOption: 'int',
    transactionChartPeriodType: 'int',
    sequence: 'int',
    isHidden: 'bool'
  }
}

exports.AHSearchCondition = {
  name: 'AHSearchCondition',
  primaryKey: 'identifier',
  properties: {
    identifier: 'string?',
    startDate: 'date?',
    endDate: 'date?',
    durationType: 'int',
    recordType: 'int',
    eventType: 'int',
    happenType: 'int',
    sortType: 'int',
    isSortByDateAscending: 'bool',
    isSortByPriceAscending: 'bool',
    minPrice: 'double',
    maxPrice: 'double'
  }
}

exports.AHSearchKeyword = {
  name: 'AHSearchKeyword',
  primaryKey: 'text',
  properties: {
    text: 'string?',
    date: { type: 'date?', indexed: true }
  }
}

exports.AHTag = {
  name: 'AHTag',
  primaryKey: 'identifier',
  properties: {
    identifier: 'string?',
    text: 'string?',
    relatedID: 'string?',
    type: 'int',
    time: { type: 'date?', indexed: true }
  }
}

exports.AHTarget = {
  name: 'AHTarget',
  primaryKey: 'identifier',
  properties: {
    identifier: 'string?',
    name: 'string?',
    type: 'int',
    date: { type: 'date?', indexed: true },
    isSettle: 'bool',
    isSuspend: 'bool',
    isEnabled: 'bool'
  }
}

exports.AHTransfer = {
  name: 'AHTransfer',
  primaryKey: 'identifier',
  properties: {
    identifier: 'string?',
    outRecord: 'AHRecord',
    inRecord: 'AHRecord',
    exchangeRate: 'double',
    isEnabled: 'bool'
  }
}

exports.AHWinningList = {
  name: 'AHWinningList',
  primaryKey: 'interval',
  properties: {
    interval: 'string?',
    superPrizeNumber: 'string?',
    specialPrizeNumber1: 'string?',
    specialPrizeNumber2: 'string?',
    specialPrizeNumber3: 'string?',
    firstPrizeNumber1: 'string?',
    firstPrizeNumber2: 'string?',
    firstPrizeNumber3: 'string?',
    firstPrizeNumber4: 'string?',
    firstPrizeNumber5: 'string?',
    firstPrizeNumber6: 'string?',
    firstPrizeNumber7: 'string?',
    firstPrizeNumber8: 'string?',
    firstPrizeNumber9: 'string?',
    firstPrizeNumber10: 'string?',
    sixthPrizeNumber1: 'string?',
    sixthPrizeNumber2: 'string?',
    sixthPrizeNumber3: 'string?',
    sixthPrizeNumber4: 'string?',
    sixthPrizeNumber5: 'string?',
    sixthPrizeNumber6: 'string?',
    superPrizeAmount: 'string?',
    specialPrizeAmount: 'string?',
    firstPrizeAmount: 'string?',
    secondPrizeAmount: 'string?',
    thirdPrizeAmount: 'string?',
    fourthPrizeAmount: 'string?',
    fifthPrizeAmount: 'string?',
    sixthPrizeAmount: 'string?'
  }
}

exports.__Class = {
  name: '__Class',
  primaryKey: 'name',
  properties: {
    name: 'string',
    permissions: '__Permission[]'
  }
}

exports.__Permission = {
  name: '__Permission',
  properties: {
    role: '__Role',
    canRead: 'bool',
    canUpdate: 'bool',
    canDelete: 'bool',
    canSetPermissions: 'bool',
    canQuery: 'bool',
    canCreate: 'bool',
    canModifySchema: 'bool'
  }
}

exports.__Realm = {
  name: '__Realm',
  primaryKey: 'id',
  properties: {
    id: 'int',
    permissions: '__Permission[]'
  }
}

exports.__Role = {
  name: '__Role',
  primaryKey: 'name',
  properties: {
    name: 'string',
    members: '__User[]'
  }
}

exports.__User = {
  name: '__User',
  primaryKey: 'id',
  properties: {
    id: 'string',
    role: '__Role'
  }
}

