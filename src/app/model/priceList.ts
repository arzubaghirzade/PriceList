export class PriceList {
  priceListID?: number;
  priceListName?: string;
  extErpPriceListID?: number;

  static jsonToModel(jsonObject:PriceList): PriceList {
    const doc = new PriceList();
    doc.priceListID = jsonObject.priceListID;
    doc.priceListName = jsonObject.priceListName;
    doc.extErpPriceListID = jsonObject.extErpPriceListID;
    return doc;
  }
  static jsonArrayToModel(jsonArray: PriceList[]): PriceList[] {
    const docs = Array<PriceList>();
    jsonArray.forEach((document: PriceList) => {
      docs.push(document);
    });
    return docs;
  }
}
