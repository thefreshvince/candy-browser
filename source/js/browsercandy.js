(function(){

  var Tabs = function(cbWin){
    this.cbWin = cbWin;
    this.tabs = this.cbWin.getElementsByClassName('cb__tab');
    this.contents = this.cbWin.getElementsByClassName('cb__content')[0].children;
  };

  Tabs.prototype.tabClick = function(tab){
    var doc = document,
        theme = tab.getAttribute('data-theme'),
        id = tab.getAttribute('href').replace('#',''),
        cbWinClasses;

    this.cbWin.getElementsByClassName('cb__tab--current')[0]
      .classList.remove('cb__tab--current');
    tab.classList.add('cb__tab--current');

    if(theme){
      switch(theme){
        case 'disco':
          theme = 'green cb__window--disco';
          break;
        default:
          this.cbWin.classList.remove('cb__window--disco');
      }
      cbWinClasses = this.cbWin.getAttribute('class');
      this.cbWin.setAttribute('class', cbWinClasses.replace(/cb\_\_window\-\-[a-z,A-Z,0-9]*/,'cb__window--'+theme+' '));
    }
    var content = doc.getElementById(id) || this.cbWin.getElementsByClassName(id)[0];
    if(content){
      for (var i = 0, l = this.contents.length; i < l; i++) {
        this.contents[i].style.display = 'none';
      }
      content.style.display = 'block';
    }
  };

  Tabs.prototype.init = function(){
    var self = this;
    for (var i = 0, l = this.tabs.length; i < l; i++) {
      this.tabs[i].addEventListener('click', function(e){
        e.preventDefault();
        self.tabClick(this);
      });
    }
  };

  var cbWins = document.getElementsByClassName('cb__window'),
      wins = [];
  for (var i = 0, l = cbWins.length; i < l; i++) {
    wins[i] = new Tabs(cbWins[i]);
    wins[i].init();
  }

})();
