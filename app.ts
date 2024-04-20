type QueryObjectPropertyValueType =
  | number
  | string
  | boolean
  | null
  | undefined;

type SearchQueryType = Record<string, QueryObjectPropertyValueType>;

/**
 *
 * @param queryParams as Object
 * @returns string
 */
function appendQuery(queryParams: SearchQueryType) {
  /* Early Return Empty Object is passed as argument */
  if (Object.keys(queryParams)?.length <= 0) {
    return "";
  }

  /* For Making Query Object null and undefined free */
  for (const key in queryParams) {
    !queryParams[key] && delete queryParams[key];
  }

  /* Second Early Return if After Query Object Modification Query Object turns out be Empty Object */
  if (Object.keys(queryParams)?.length <= 0) {
    return "";
  }

  // console.log("queryParams :>> ", queryParams)

  const queryString = Object.entries(queryParams)
    ?.map(([key, value]) => `${key}=${value}`)
    ?.join("&");

  // console.log("queryString :>> ", queryString)

  return `?${queryString}`;
}

console.log(appendQuery({ id: undefined, statusId: 13, search: "googleTag" }));
// ?statusId=13&search=googleTag
