chrome.runtime.onInstalled.addListener((d)=>{
    console.log(d)
    console.log('Application Just installed')
})

chrome.bookmarks.onCreated.addListener((bookmark)=>{
    console.log(bookmark)
    console.log('Added A bookmark so please see the above thing')
})