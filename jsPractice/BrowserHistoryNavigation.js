function BrowserHistory () {
    let history=[];
    let index=-1;
    return {
        visit(url) {
           index++;
           history.push(url);
        },
        current() {
         return index>=0?history[index]:null;
        },
        backward() {
          index--;
          return index>=0?history[index]:null;
        },
        forward() {
          if(index<=history.length-2){
             index++;
          }
          return history[index] || null;
        }
    }
};
const browser=BrowserHistory();
browser.visit("google.com");
browser.visit("youtube.com");
browser.visit("github.com");

console.log(browser.backward());
console.log(browser.current());

browser.visit("linkedin.com"); 

console.log(browser.forward()); 
console.log(browser.current()); 