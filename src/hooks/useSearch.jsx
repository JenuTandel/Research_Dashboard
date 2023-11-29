const useSearch = (data, value) => {
  if (value === " ") {
    return data;
  } else {
    const filteredData = data.filter(
      (item) =>
        item.datasetName?.toLowerCase().includes(value) ||
        item.datasetDetails.toLowerCase().includes(value)
    );
    return filteredData;
  }
};
export default useSearch;
