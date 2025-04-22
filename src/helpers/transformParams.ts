export const transformParamsTransactions = (page?: string | null, month?: string | null, year?: string | null) => {
  let params = '?';
  let isFirstParam = true;

  if(page){
    params += `${isFirstParam ? '' : '&'}page=${page}`;
    isFirstParam = false;
  }

  if(month) {
    params += `${isFirstParam ? '' : '&'}month=${month}`;
    isFirstParam = false;
  }

  if(year) {
    params += `${isFirstParam ? '' : '&'}year=${year}`;
    isFirstParam = false;
  }

  return params;
}