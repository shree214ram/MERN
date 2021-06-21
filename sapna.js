

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
  
  https://stackoverflow.com/questions/64889165/fireevent-click-is-not-directing-me-to-another-page
  
  
  https://stackoverflow.com/questions/52783144/how-do-you-test-for-the-non-existence-of-an-element-using-jest-and-react-testing
  
  
  https://stackoverflow.com/questions/54021037/how-to-mock-window-location-href-with-jest-vuejs
  
  
  
  https://wildwolf.name/jest-how-to-mock-window-location-href/
  
  it('should handle assignments to location.href correctly', (): void => {
     
        
        ----
        509 
        510
        511
        copy kar ke rakhna fir 
        ----
        const target = url 
//         window.location.href = target;
//         expect(window.location.href).toBe(target);
  
//         expect(window.open).toHaveBeenCalled()
//         expect(window.open).toHaveBeenCalledWith(target)
  
        const newWindow = window.open(target, '_self', '');
        expect(newWindow).toHaveBeenCalled()
        expect(newWindow).toHaveBeenCalledWith(target)
  
        //B page ka existance khatam
        expect(getByText('Login')).toBeNull();
        expect(getByText('Login')).not.toBeInTheDocument();
        //A page ka existance Chalu
        expect(screen.getByText('Screen A Ka Koi Special word.')).not.toBeNull();
        expect(getByText('Screen A Ka Koi Special word.')).toBeInTheDocument();
    });


https://stackoverflow.com/questions/63409476/how-to-mock-window-location-href-with-jest-in-react
https://stackoverflow.com/questions/64799458/how-to-mock-the-javascript-window-open-and-window-close/64799608


1. ReactTestingIndexComponanat.js
2. React-Router.js
3. React-Router.test.js

