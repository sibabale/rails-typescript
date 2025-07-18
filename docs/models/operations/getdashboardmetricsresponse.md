# GetDashboardMetricsResponse

Dashboard metrics

## Example Usage

```typescript
import { GetDashboardMetricsResponse } from "rails/models/operations";

let value: GetDashboardMetricsResponse = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `activeBanks`                                                                                | *number*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `totalRevenue`                                                                               | *number*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `completionRate`                                                                             | *number*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `revenueOverview`                                                                            | *number*[]                                                                                   | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `transactionLogs`                                                                            | [operations.TransactionLog](../../models/operations/transactionlog.md)[]                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `activeBanksList`                                                                            | [operations.ActiveBanksList](../../models/operations/activebankslist.md)[]                   | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `bankDistributions`                                                                          | [operations.BankDistribution](../../models/operations/bankdistribution.md)[]                 | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `activeTransactions`                                                                         | [models.Transaction](../../models/transaction.md)[]                                          | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `settlementOverview`                                                                         | [operations.SettlementOverview](../../models/operations/settlementoverview.md)               | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `mondayClearingPreparation`                                                                  | [operations.MondayClearingPreparation](../../models/operations/mondayclearingpreparation.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |