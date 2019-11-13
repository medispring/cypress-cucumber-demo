class StringHelper {
  reverseDate(str) {
    const dd = str.slice(0, 2);
    const mm = str.slice(2, 4);
    const yyyy = str.slice(4, 8);
    return yyyy + mm + dd;
  }
}
export default new StringHelper();
