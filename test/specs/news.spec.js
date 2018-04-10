'use strict'
import NewsPage from '../page/news.page';

describe('ABC News Page', ()=>{
  it('should loaded', ()=>{
    NewsPage.open();
    NewsPage.pageLoad();
  });
});

// describe('AbC Banner Context', ()=> {
//   it('should load all the banner images', ()=> {
//     NewsPage.checkNewsBannerLoad()
//   })
// });
