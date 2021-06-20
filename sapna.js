

Page A Code 
url : A.php?a=1&b=2&backToAfromB=true
componanatDidMount(){
  const sessionSearchParam = sessionStorage.getItem("searchParam");
 
  setTimeout(function(){
       this.setState({paramObject:sessionSearchParam })
  }, 2000);
  
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

render(){
  const sessionStorage
  return(
  <div><input type="text" value></div>
  )
}

Page B Code 
url : B.php?a=1&b=2

backToAPage = (params) => {
  const newUrl = A.php?a=1&b=2&backToAfromB=true
  window.location.href = newUrl // ye kya karega ki backToAfromB parameter add kar dega 
}
  
  https://stackoverflow.com/questions/66043164/testing-click-event-in-react-testing-library
