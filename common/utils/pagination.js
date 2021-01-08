/**
 * @param  {number} totalRecord 总记录
 * @param  {number} pageSize 每页记录条数
 * @return {number}          总页码
 */
 export function getTotalPage(totalRecord, pageSize) {
    return parseInt((totalRecord + pageSize - 1) / pageSize);
}
