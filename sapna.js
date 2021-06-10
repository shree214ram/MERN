

Page A Code 
url : A.php?a=1&b=2&backToAfromB=true
componanatDidMount(){
  const sessionSearchParam = sessionStorage.getItem("searchParam");
  if(window.params.backToAfromB && sessionSearchParam && type of sessionSearchParam === "object" && Object.keys(sessionSearchParam).length > 0 ){
    this.searchAdvanceFilter(sessionSearchParam)
  }
}

searchAdvanceFilter = (params) => {
  this.setState({searchParam})
  sessionStorage.setItem("searchParam", this.state.searchParam);
  const newUrl = A.php?a=1&b=2
  window.location.pushState(newUrl) // ye kya karega ki backToAfromB parameter hata. dega url me se 
}

Page B Code 
url : B.php?a=1&b=2

backToAPage = (params) => {
  const newUrl = A.php?a=1&b=2&backToAfromB=true
  window.location.href = newUrl // ye kya karega ki backToAfromB parameter add kar dega 
}
