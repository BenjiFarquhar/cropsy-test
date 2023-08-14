import { Row } from "../../../domain/row/Row";

test("row.prunedToTargetPercent() calculates correctly", () => {
  const row = Row.fromDto(
    {
      id: 9,
      attribute: "Pruning",
      blockId: 462,
      rowId: 21208,
      modifiedOn: "2023-04-11T22:04:50.793696",
      scanArea: 407.88000000000005,
      scanDate: "2023-04-11T22:04:50.793696",
      scanWindowStart: "2023-04-11T22:04:50.793696",
      vineCounts: [103, 0, 0],
      customStats: [
        { attribute: "canes0", vinecount: 0, attributeVal: 0 },
        { attribute: "canes1", vinecount: 1, attributeVal: 1 },
        { attribute: "canes2", vinecount: 5, attributeVal: 2 },
        { attribute: "canes3", vinecount: 97, attributeVal: 3 },
        { attribute: "canes4", vinecount: 0, attributeVal: 4 },
      ],
    },
    "CV0912"
  );
  expect(row.prunedToTargetPercent()?.toFixed(1)).toBe("94.2");
});

test("Row.prunedToTargetAverage(rows) calculates correctly", () => {
  const rows = [
    Row.fromDto(
      {
        id: 9,
        attribute: "Pruning",
        blockId: 462,
        rowId: 21208,
        modifiedOn: "2023-04-11T22:04:50.793696",
        scanArea: 407.88000000000005,
        scanDate: "2023-04-11T22:04:50.793696",
        scanWindowStart: "2023-04-11T22:04:50.793696",
        vineCounts: [103, 0, 0],
        customStats: [
          { attribute: "canes0", vinecount: 0, attributeVal: 0 },
          { attribute: "canes1", vinecount: 1, attributeVal: 1 },
          { attribute: "canes2", vinecount: 5, attributeVal: 2 },
          { attribute: "canes3", vinecount: 97, attributeVal: 3 },
          { attribute: "canes4", vinecount: 0, attributeVal: 4 },
        ],
      },
      "CV0912"
    ),
    Row.fromDto(
      {
        id: 10,
        attribute: "Pruning",
        blockId: 462,
        rowId: 21209,
        modifiedOn: "2023-04-11T22:04:49.726004",
        scanArea: 419.76000000000005,
        scanDate: "2023-04-11T22:04:49.726004",
        scanWindowStart: "2023-04-11T22:04:49.726004",
        vineCounts: [106, 0, 0],
        customStats: [
          { attribute: "canes0", vinecount: 0, attributeVal: 0 },
          { attribute: "canes1", vinecount: 1, attributeVal: 1 },
          { attribute: "canes2", vinecount: 10, attributeVal: 2 },
          { attribute: "canes3", vinecount: 95, attributeVal: 3 },
          { attribute: "canes4", vinecount: 0, attributeVal: 4 },
        ],
      },
      "CV0916"
    ),
  ];
  expect(Row.prunedToTargetAverage(rows)?.toFixed(1)).toBe("91.9");
});
